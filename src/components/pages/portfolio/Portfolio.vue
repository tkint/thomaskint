<!--TODO: Ajouter une barre de recherche (comme sur BookKeeper)-->
<template>
  <v-layout>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          xl2
          v-for="(gitlabProject, index) in projects"
          :key="index">
          <work-item
            :project="gitlabProject">
          </work-item>
        </v-flex>
      </v-layout>
    </v-container>
    <work-dialog :project="currentProject" :show="showProject" @close="closeProject()"></work-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { keys as GStoreKeys } from '@/store/gitlab';
import { types as GStoreActions } from '@/store/gitlab/actions';
import { types as TStoreActions } from '@/store/template/actions';

import RouteNames from '@/router/names';

import GitlabService from '@/services/gitlabService';

import WorkItem from './components/WorkItem';
import WorkDialog from './components/WorkDialog';

export default {
  name: 'Portfolio',
  components: { WorkDialog, WorkItem },
  data() {
    return {
      showProject: false,
      works: [],
    };
  },
  computed: {
    ...mapState({
      gitlabUser: state => state.GitlabStore[GStoreKeys.USER],
      gitlabProjects: state => state.GitlabStore[GStoreKeys.PROJECTS],
    }),
    projects() {
      if (this.gitlabProjects) {
        return this
          .gitlabProjects
          .sort((p1, p2) => new Date(p2.updated) - new Date(p1.updated));
      }
      return [];
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
        this.$global.sleep(10000).then(() => this.setProgressBar(false));
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
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
</style>
