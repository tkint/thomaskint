<template>
  <!--  <label class="switch">-->
  <!--    <input type="checkbox" :checked="active" @click="toggle">-->
  <!--    <span class="slider"></span>-->
  <!--  </label>-->

  <label class="switch">
    <input class="toggle" type="checkbox" :checked="active" @click="toggle">
    <span class="slider"></span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitchButton',
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        emit('update:modelValue', newValue);
      },
    });

    return {
      active,
      toggle: () => {
        active.value = !active.value;
      },
    };
  },
});
</script>
