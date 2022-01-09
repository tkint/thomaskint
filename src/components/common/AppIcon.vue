<script lang="ts" setup>
import { Icons, IconKey } from '@/data/icons';

withDefaults(
  defineProps<{
    icon: IconKey;
    size?: 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null;
  }>(),
  {
    size: null,
  }
);
</script>

<template>
  <font-awesome-icon :icon="Icons[icon]" :size="size" />
</template>
