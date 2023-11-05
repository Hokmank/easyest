<script setup lang="ts">
defineOptions({ name: 'content-title' });

defineProps({
  title: String
});
</script>

<template>
  <div class="content-title text-18px black-80 pl-20px mb-14px relative">
    {{ title }}
  </div>
</template>

<style scoped>
.content-title::after {
  content: ' ';
  display: block;
  position: absolute;
  width: 4px;
  height: 10px;
  left: 6px;
  top: 9px;
  background: theme('colors.base');
  border-radius: 4px;
}
</style>
