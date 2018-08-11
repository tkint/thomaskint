<template>
  <v-layout
    column
    align-center
    v-if="project.loadingValue < 100 && !project.reloading">
    <v-progress-circular
      :size="100"
      :width="15"
      :rotate="-90"
      :value="project.loadingValue + 10"
      color="teal">
      {{project.loadingValue}}%
    </v-progress-circular>
    <span class="mt-4">
      Chargement des données...
    </span>
  </v-layout>
  <v-layout
    row
    wrap
    v-else>
    <v-flex xs12 md6>
      <v-data-table
        v-model="selected"
        :items="languages"
        item-key="language"
        hide-actions
        hide-headers>
        <template slot="no-data">
          <v-alert :value="true" color="error" icon="warning">
            Un problème est survenu, rechargez la page
          </v-alert>
        </template>
        <template slot="items" slot-scope="props">
          <tr @click="onLegendClick(props)" :active="props.selected" style="cursor: pointer">
            <td>
              <v-badge>
                <span
                  class="v-badge v-badge__badge custom-badge"
                  :style="`background-color: ${props.item.color} !important`">
                </span>
              </v-badge>
            </td>
            <td>{{props.item.language}}</td>
            <td>{{props.item.weight}} %</td>
          </tr>
        </template>
      </v-data-table>
    </v-flex>
    <v-flex xs12 md6>
      <doughnut-chart
        :chartData="chartData"
        :options="options"
        :height="300"
        ref="chart">
      </doughnut-chart>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable no-underscore-dangle */

import DoughnutChart from '@/components/common/charts/DoughnutChart';

export default {
  name: 'Statistics',
  components: { DoughnutChart },
  props: ['project'],
  data() {
    return {
      headers: [
        { text: 'Couleur', value: 'color' },
        { text: 'Langage', value: 'langage' },
        { text: 'Poids', value: 'poids' },
      ],
      selected: [],
      emptyItems: [],
    };
  },
  computed: {
    chartData() {
      const labels = [];
      const datasets = [{ data: [], backgroundColor: [] }];
      const languages = this.project.languages;
      if (languages) {
        Object.keys(languages).forEach((key) => {
          labels.push(key);
          datasets[0].data.push(languages[key]);
          datasets[0].backgroundColor.push(this.$global.getLanguageColor(key));
        });
      }
      return { labels, datasets };
    },
    options() {
      return {
        legend: {
          display: false,
        },
        elements: {
          center: {
            text: `${this.project.commits} commits`,
            color: '#FFF',
            fontStyle: 'Helvetica',
            sidePadding: 40,
          },
        },
      };
    },
    languages() {
      const items = [];
      const languages = this.project.languages;
      if (languages) {
        Object.keys(languages).forEach((key) => {
          items.push({
            language: key,
            weight: languages[key],
            color: this.$global.getLanguageColor(key),
          });
        });
        items.sort(a => a.weight).reverse();
        this.selected = items;
      }
      return items;
    },
  },
  methods: {
    onLegendClick(props) {
      const index = props.index;
      const chartComponent = this.$refs.chart;
      if (chartComponent) {
        const chart = chartComponent.$data._chart;
        if (chart) {
          const meta = chart.getDatasetMeta(0);
          const data = meta.data[index];
          if (this.selected.length > 1 || !props.selected) {
            data.hidden = !data.hidden;
            props.selected = !props.selected;
          }
          chart.update();
        }
      }
    },
  },
};
</script>

<style scoped>
  .custom-badge {
    border: 1px solid white;
    box-shadow: 1px 1px 5px black;
  }
</style>
