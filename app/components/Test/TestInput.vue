<script setup lang="ts">
  defineProps<{
    label: string;
    caption: string;
  }>();

  // State
  const inputModel = defineModel<string>();
  const shadow = useTemplateRef<HTMLSpanElement>("shadow");
  const width = ref<number>(0);

  // Methods
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const digits = target.value.replace(/\D/g, "");
    let formatted = digits.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

    // Корректное начало
    formatted = formatted.replace(/^[0\s]+/, "");

    // Kypcop
    const selectionStart = target.selectionStart || 0;
    const oldLength = target.value.length;
    nextTick(() => {
      const newLength = formatted.length;
      const diff = newLength - oldLength;
      target.setSelectionRange(selectionStart + diff, selectionStart + diff);
    });

    // Обновляем модель
    inputModel.value = formatted;
    target.value = formatted;
  };

  // Watchers
  watch(
    () => inputModel.value,
    async () => {
      nextTick(() => {
        if (shadow.value) width.value = shadow.value.clientWidth || 0;
      });
    },
    { immediate: true },
  );
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
      <span class="pointer-events-none absolute px-2 opacity-0" ref="shadow">
        {{ inputModel }}
      </span>

      <input
        placeholder="7"
        @input="handleInput"
        type="tel"
        :style="`width: ${width}px`"
        :class="[
          'ease-cubic transition-all duration-300',
          'min-w-[72px] rounded-md py-2 ps-2 outline',
          'outline-light-grey hover:outline-mid-grey',
          inputModel ? 'outline-primary-light outline-[1.5px]' : 'outline',
        ]"
      />

      <p class="text-[18px] font-light">
        year{{ Number(inputModel?.replaceAll(" ", "")) > 1 ? "s" : "" }} old
      </p>
    </div>
  </div>
</template>
