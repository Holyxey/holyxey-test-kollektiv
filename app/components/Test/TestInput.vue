<script setup lang="ts">
  defineProps<{
    label: string;
    caption: string;
  }>();

  // State
  const inputModel = defineModel<string>();

  // Methods
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const digits = target.value.replace(/\D/g, "");
    const formatted = digits.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    inputModel.value = formatted;
    target.value = formatted;
  };
</script>

<template>
  <div class="flex flex-col gap-3">
    <p
      :class="[
        'font-mono text-base/3 transition-all',
        inputModel && 'text-primary',
      ]"
    >
      {{ label }}
    </p>

    <!-- Input div -->
    <div class="flex items-center gap-3">
      <!-- @input="handleInput" -->
      <input
        placeholder="7"
        @input="handleInput"
        :size="Math.max(1, inputModel?.replaceAll(' ', '').length || 1)"
        type="tel"
        :class="[
          'transition-all',
          'min-w-[72px] rounded-md border-[1.5px] py-2 ps-2',
          'border-light-grey hover:border-mid-grey',
          inputModel && 'border-primary-light',
        ]"
      />
      <p class="text-[18px] font-light">{{ caption }}</p>
    </div>
  </div>
</template>
