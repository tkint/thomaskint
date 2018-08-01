<!--TODO: Au clic sur le titre, accéder au portfolio en cherchant d'après un tag de rattachement (BookKeeper)-->
<!--TODO: Sinon, afficher le portfolio filtré en POPUP temporaire-->
<template>
  <v-flex
    xs12
    md6
    v-if="item"
    @mouseover="onMouseOver()"
    @mouseleave="onMouseLeave()"
    @click="onClick()">
    <v-card
      :light="over"
      style="cursor: pointer;">
      <v-card-title class="item">
        <div>
          <b>{{ item.title }}</b>
          <br/>
          {{ item.place }}
          <br/>
          {{ item.city }}
        </div>
      </v-card-title>
      <resume-section-item-details
        :item="item"
        :position="position"
        :class="`text ${details ? 'text-show' : 'text-hide'}`"
        v-if="item.descriptions">
      </resume-section-item-details>
    </v-card>
  </v-flex>
</template>

<script>
import ResumeSectionItemDetails from './ResumeSectionItemDetails';

export default {
  name: 'SectionItem',
  components: { ResumeSectionItemDetails },
  props: ['item', 'index', 'lockOver'],
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
  },
  watch: {
    lockOver(newValue) {
      if (!newValue) {
        this.over = false;
        this.details = false;
      }
    },
  },
};
</script>

<style scoped>
  .text {
    z-index: 999;
    position: absolute;
    margin-top: -1px;
  }

  .text-show {
    display: block;
    background: white;

  }

  .text-hide {
    visibility: hidden;
  }
</style>
