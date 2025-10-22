<script setup lang="ts">
  defineProps<{
    highlight?: boolean;
  }>();
</script>

<template>
  <img
    src="~/assets/images/palceholder.jpg"
    :class="[
      'aspect-square h-22 rounded-full object-cover',
      'transition-all',

      'outline -outline-offset-1',
      highlight ? 'outline-primary' : 'outline-transparent',

      'border-4 border-white',
    ]"
  />
</template>
