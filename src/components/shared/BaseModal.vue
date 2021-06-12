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
import { defineComponent, watch } from 'vue';
import useModal from '../../composables/useModal';

export default defineComponent({
  name: 'BaseModal',
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modalId, showModal, hideModal, onHide } = useModal();

    onHide(() => emit('update:modelValue', null));
    watch<Boolean>(
      () => props.modelValue,
      (newValue) => {
        if (newValue) showModal();
        else hideModal();
      },
    );

    return {
      modalId,
    };
  },
});
</script>
