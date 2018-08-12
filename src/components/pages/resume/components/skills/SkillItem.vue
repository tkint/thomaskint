<template>
  <v-flex
    xs3
    mt-4
    class="skill-item"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    @click="onClick">
    <v-layout justify-center>
      <icon
        :value="skill.icon"
        :class="'skill-icon ' + color">
      </icon>
    </v-layout>
    <v-layout
      pt-2
      justify-center
      :class="legendColor || color"
      :style="legendBold ? 'font-weight: bold' : ''">
      {{ skill.name }}
    </v-layout>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';
import { keys as GlStoreKeys } from '@/store/global';
import { types as GlStoreActions } from '@/store/global/actions';

import RouteNames from '@/router/names';

export default {
  name: 'SkillItem',
  props: {
    skill: { name: String, icon: String, color: String, legendColor: String },
  },
  data() {
    return {
      defaultColor: 'white--text',
      color: this.defaultColor,
      legendColor: this.defaultColor,
      legendBold: false,
    };
  },
  methods: {
    ...mapActions({
      setGlobalValue: GlStoreActions.SET_GLOBAL_VALUE,
    }),
    onMouseOver() {
      this.color = this.skill.color;
      this.legendColor = this.skill.legendColor;
      this.legendBold = true;
    },
    onMouseLeave() {
      this.color = this.defaultColor;
      this.legendColor = this.defaultColor;
      this.legendBold = false;
    },
    onClick() {
      this.setGlobalValue({ key: GlStoreKeys.PROJECT_SEARCH, value: this.skill.name });
      this.$global.openRouteByName({ name: RouteNames.PORTFOLIO });
    },
  },
};
</script>

<style scoped>
  .skill-icon {
    font-size: 50px;
  }

  .skill-item {
    text-shadow: 2px 2px 5px black;
  }

  .skill-item:hover {
    cursor: pointer;
  }
</style>
