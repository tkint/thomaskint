<!--TODO: Au clic sur le titre, accéder au portfolio en cherchant d'après un tag de rattachement (BookKeeper)-->
<!--TODO: Sinon, afficher le portfolio filtré en POPUP temporaire-->
<template>
  <v-flex
    xs12
    v-if="item">
    <v-card
      :color="overed ? 'blue-grey' : ''"
      :class="faded ? 'grey--text faded elevation-0' : ''"
      style="cursor: pointer"
      @click.native.stop="onClick()"
      @mouseover="onMouseOver()"
      @mouseleave="onMouseLeave()"
      v-click-outside="onBlur">
      <v-card-title class="item">
        <span>
          <b>{{ item.title }}</b>
          <br/>
          {{ item.place }} - {{ item.city }}
          <br/>
          <duration :duration="item.duration"></duration>
        </span>
        <v-spacer></v-spacer>
        <icon
          :value="details ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          :class="faded ? 'grey--text' : ''">
        </icon>
      </v-card-title>
      <resume-section-item-details
        :item="item"
        :index="index"
        :position="position"
        :show="showDetails"
        :ref="`details${index}`"
        :class="computedClass"
        v-show="showDetails">
      </resume-section-item-details>
    </v-card>
  </v-flex>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import Duration from './Duration';
import ResumeSectionItemDetails from './ResumeSectionItemDetails';

export default {
  name: 'SectionItem',
  props: ['item', 'index', 'lockOver', 'showAll'],
  components: { Duration, ResumeSectionItemDetails },
  data() {
    return {
      over: false,
      details: false,
    };
  },
  computed: {
    position() {
      if (this.index % 2 === 0) {
        return 'right';
      }
      return 'left';
    },
    showDetails() {
      return (this.showAll || this.details) && this.item.descriptions;
    },
    overed() {
      return this.showAll || this.details || this.over;
    },
    computedClass() {
      let c = 'text ';
      c += (this.showDetails ? 'text-show blue-grey ' : 'text-hide ');
      c += (this.showAll ? 'relative ' : '');
      return c;
    },
    faded() {
      return this.lockOver && !this.overed;
    },
  },
  watch: {
    lockOver(newValue) {
      if (!newValue) {
        this.over = false;
        this.details = false;
      }
    },
  },
  methods: {
    onMouseOver() {
      if (!this.over && !this.lockOver) {
        this.over = true;
      }
    },
    onMouseLeave() {
      if (this.over && !this.lockOver) {
        this.over = false;
      }
    },
    onClick() {
      this.$emit('lock', !this.lockOver);
      this.over = !this.lockOver;
      this.details = !this.lockOver;
    },
    onBlur() {
      if (this.details) {
        this.$emit('lock', false);
        this.over = false;
        this.details = false;
      }
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
  .text {
    z-index: 900;
    position: absolute;
    margin-top: -1px;
  }

  .text-show {
    display: block;
  }

  .text-hide {
    visibility: hidden;
  }

  .relative {
    position: relative;
  }

  .faded {
    text-shadow: none;
  }
</style>
