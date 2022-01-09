<script lang="ts" setup>
withDefaults(
  defineProps<{
    verticalAlign?: 'top' | 'middle' | 'bottom';
  }>(),
  {
    verticalAlign: 'top',
  }
);
</script>

<template>
  <div
    :class="[
      'd-flex',
      'w-100',
      'justify-content-center',
      {
        'align-items-start': verticalAlign === 'top',
        'align-items-center': verticalAlign === 'middle',
        'align-items-end': verticalAlign === 'bottom',
      },
    ]"
    style="min-height: 100%">
    <div class="row w-100" style="min-height: 100%">
      <div class="col py-5">
        <div class="row mb-4">
          <h1 class="col text-center">
            <slot name="title"></slot>
          </h1>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
