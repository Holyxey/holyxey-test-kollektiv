<script setup lang="ts">
  import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex items-center justify-center">
    <a
      aria-label="Telegram"
      title="Telegram"
      class="ease-cubic p-2 opacity-50 transition-all duration-300 hover:opacity-100"
      href="tg://holyxey"
    >
      <Icon width="20" icon="hugeicons:telegram" />
    </a>

    <a
      aria-label="GitHub"
      title="GitHub"
      class="ease-cubic p-2 opacity-50 transition-all duration-300 hover:opacity-100"
      href="gh://github.com/Holyxey/holyxey-test-kollektiv"
      target="_blank"
    >
      <Icon width="20" icon="hugeicons:github-01" />
    </a>

    <a
      aria-label="LinkedIn"
      title="LinkedIn"
      class="ease-cubic p-2 opacity-50 transition-all duration-300 hover:opacity-100"
      href="https://www.linkedin.com/in/holyxey/"
      target="_blank"
    >
      <Icon width="20" icon="hugeicons:linkedin-01" />
    </a>
  </div>
</template>
