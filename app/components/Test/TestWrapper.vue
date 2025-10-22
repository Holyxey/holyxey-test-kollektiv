<script setup lang="ts">
  // Imports
  import TestImage from "./TestImage.vue";
  import TestInput from "./TestInput.vue";

  // Defines
  defineProps<{
    label: string;
    caption: string;
  }>();

  // State
  const inputModel = ref<string>("");
</script>

<template>
  <div
    :class="[
      'text-text',
      'flex items-center gap-3',
      'rounded-2xl bg-white p-4',
      'shadow-2xl shadow-zinc-900/5',
    ]"
  >
    <TestImage :highlight="Boolean(inputModel)" />
    <TestInput :label :caption v-model="inputModel" />
  </div>
</template>
