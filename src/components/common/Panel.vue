<script lang="ts" setup>
withDefaults(
  defineProps<{
    verticalAlign?: "top" | "middle" | "bottom";
  }>(),
  {
    verticalAlign: "top",
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
    style="min-height: 100%"
  >
    <div class="row w-100" style="min-height: 100%">
      <div class="col my-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
