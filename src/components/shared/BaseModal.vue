<template>
  <div :id="modalId" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalId }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseModal',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const modalId = `modal-${(Math.random() * 1000).toFixed(0)}`;
    console.log(modalId);

    const active = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        emit('update:modelValue', newValue);
      },
    });

    return {
      modalId,
    };
  },
});
</script>
