<!--TODO: Ajouter une barre de recherche (comme sur BookKeeper)-->
<template>
  <v-layout row wrap>
    <work-dialog :project="currentProject" :show="showProject" @close="closeProject()"></work-dialog>
    <v-layout row class="ml-3 mt-3 mb-0">
      <v-flex xs12 sm6 md4>
        <v-text-field
          solo
          clearable
          color="teal"
          label="Tapez un mot clef"
          v-model="search">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-flex xs12>
      <v-container fluid grid-list-lg class="mt-0 pt-0">
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md4
            lg3
            xl2
            v-for="(gitlabProject, index) in filteredProjects"
            :key="index">
            <work-item
              :project="gitlabProject">
            </work-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { keys as GStoreKeys } from '@/store/gitlab';
import { keys as GlStoreKeys } from '@/store/global';
import { types as GStoreActions } from '@/store/gitlab/actions';
import { types as GlStoreActions } from '@/store/global/actions';
import { types as TStoreActions } from '@/store/template/actions';

import RouteNames from '@/router/names';

import GitlabService from '@/services/gitlabService';

import WorkItem from './components/ProjectItem';
import WorkDialog from './components/ProjectDialog';

export default {
  name: 'Portfolio',
  components: { WorkDialog, WorkItem },
  data() {
    return {
      searchList: [],
      inputSearch: null,
      showProject: false,
      works: [],
    };
  },
  computed: {
    ...mapState({
      projectSearch: state => state.GlobalStore[GlStoreKeys.PROJECT_SEARCH],
      gitlabUser: state => state.GitlabStore[GStoreKeys.USER],
      gitlabProjects: state => state.GitlabStore[GStoreKeys.PROJECTS],
    }),
    search: {
      get() {
        return this.projectSearch;
      },
      set(value) {
        this.setGlobalValue({ key: GlStoreKeys.PROJECT_SEARCH, value });
      },
    },
    projects() {
      if (this.gitlabProjects) {
        return this
          .gitlabProjects
          .sort((p1, p2) => new Date(p2.updated) - new Date(p1.updated));
      }
      return [];
    },
    filteredProjects() {
      return this.projects.filter(p =>
        (!this.search
          || p.system_name.includes(this.search.toLowerCase())
          || (p.languages
            && Object.keys(p.languages)
              .find(l => l.toLowerCase().includes(this.search.toLowerCase()))
          )
        ));
    },
    currentProjectId() {
      return this.$route.params.id;
    },
    currentProject() {
      if (this.currentProjectId !== undefined) {
        return this
          .projects
          .find(project => project.system_name === this.currentProjectId);
      }
      return null;
    },
  },
  watch: {
    projects(newValue) {
      if (newValue.length < GitlabService.getInstance().projectsName.length) {
        this.setProgressBar(true);
        this.$global.sleep(60000).then(() => this.setProgressBar(false));
      } else {
        this.setProgressBar(false);
      }
    },
    currentProject(newValue) {
      this.showProject = !!newValue;
    },
  },
  methods: {
    ...mapActions({
      setGlobalValue: GlStoreActions.SET_GLOBAL_VALUE,
      setProgressBar: TStoreActions.SET_PROGRESSBAR,
      retrieveGitlabUser: GStoreActions.RETRIEVE_USER,
      retrieveGitlabProjects: GStoreActions.RETRIEVE_PROJECTS,
    }),
    loadData() {
      this.retrieveGitlabUser();
      this.retrieveGitlabProjects();
    },
    closeProject() {
      this.$global.openRouteByName({ name: RouteNames.PORTFOLIO });
      this.showProject = false;
    },
    doesArrayContainsArray(array1, array2) {
      let contains = false;
      let i = 0;
      let j = 0;
      while (i < array1.length && !contains) {
        while (j < array2.length && !contains) {
          if (array1[i].toLowerCase() === array2[j].toLowerCase()) {
            contains = true;
          }
          j += 1;
        }
        i += 1;
        j = 0;
      }
      return contains;
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
</style>
