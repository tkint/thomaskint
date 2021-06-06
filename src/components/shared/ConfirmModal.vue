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
import { defineComponent } from 'vue';
import BaseModal from './BaseModal.vue';
import modalMixin from '../../mixins/modal';
import useModal from '../../composables/useModal';

export default defineComponent({
  name: 'ConfirmModal',
  mixins: [modalMixin],
  components: { BaseModal },
  setup(props: typeof modalMixin.props, { emit }) {
    const { modalId } = useModal(props, emit);

    return { modalId };
  },
});
</script>
