---
title: Faire une modal générique en VueJS

subtitle:
---

## Introduction

Partant de la stack suivante:

- Vue 3
- Typescript
- Bootstrap 5

## Mise en place

Créer un fichier `useModal.ts` dans le dossier `composables`

```ts
// src/composables/useModal.ts
import { Modal } from 'bootstrap';
import { onMounted, onUnmounted } from 'vue';

export default () => {
  const modalId = `modal-${(Math.random() * 1000).toFixed(0)}`;

  const getModalDiv = () => document.getElementById(modalId);
  const getModalInstance = () => {
    const modalDiv = getModalDiv();
    if (modalDiv) {
      let instance = Modal.getInstance(modalDiv);
      if (!instance) {
        instance = new Modal(modalDiv);
      }
      return instance;
    }
    return null;
  };

  const showModal = () => {
    getModalInstance()?.show();
  };

  const hideModal = () => {
    getModalInstance()?.hide();
  };

  let hideFn: Function;
  const onHide = (callback: Function) => {
    hideFn = callback;
  };

  const executeHideFn = () => !!hideFn && hideFn();
  onMounted(() => {
    getModalDiv()?.addEventListener('hidden.bs.modal', executeHideFn);
  });

  onUnmounted(() => {
    getModalDiv()?.removeEventListener('hidden.bs.modal', executeHideFn);
  });

  return {
    modalId,
    getModalDiv,
    showModal,
    hideModal,
    onHide,
  };
};
```

Créer un composant qui va utiliser `useModal.ts` :

```html
// src/components/SuperModal.vue
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
import useModal from '@/composables/useModal';

export default defineComponent({
  name: 'SuperModal',
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modalId, showModal, hideModal, onHide } = useModal();

    onHide(() => emit('update:modelValue', null));
    watch < Boolean > (
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
```

