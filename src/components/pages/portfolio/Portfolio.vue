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
          v-for="(work, index) in works"
          :key="index"
        >
          <work-item
            :work="work"
          ></work-item>
        </v-flex>
      </v-layout>
    </v-container>
    <work-dialog :work="work"></work-dialog>
  </v-layout>
</template>

<script>
import WorkDialog from './components/WorkDialog';
import WorkItem from './components/WorkItem';

export default {
  name: 'Portfolio',
  components: { WorkDialog, WorkItem },
  data() {
    return {
      work: null,
      works: [
        {
          id_work: 1,
          title: 'First Work',
        },
        {
          id_work: 2,
          title: 'Second Work',
        },
        {
          id_work: 3,
          title: 'Third Work',
        },
      ],
      showWork: true,
    };
  },
  created() {
    this.openWorkFromUrl();
  },
  methods: {
    openWorkFromUrl() {
      if (this.$route.params.id) {
        this.work = this.getWorkById(this.$route.params.id);
      }
    },
    openWork(work) {
      this.work = work;
    },
    getWorkById(id) {
      let i = 0;
      let work = null;
      while (i < this.works.length && !work) {
        if (this.works[i].id_work === parseInt(id, 10)) {
          work = this.works[i];
        }
        i += 1;
      }
      return work;
    },
  },
};
</script>

<style scoped>
</style>
