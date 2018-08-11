<template>
  <!--<i-->
    <!--v-if="isFa"-->
    <!--:class="value"-->
    <!--:style="style">-->
  <!--</i>-->
  <v-icon
    :color="color"
    :left="left"
    :right="right">
    {{value}}
  </v-icon>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    value: String,
    color: String,
    left: Boolean,
    right: Boolean,
  },
  computed: {
    isFa() {
      return this.value.includes('fa-');
    },
    style() {
      let style = '';
      if (this.isFa) {
        // style += `color: ${this.color}`;
        if (this.left) {
          style += '; margin-right: 15px';
        }
      }
      return style;
    },
  },
}
;
</script>

<style scoped>
  i {
    font-size: 25px;
    color: white;
  }
</style>
