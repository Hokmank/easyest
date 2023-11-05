<script setup lang="ts">
import { ref } from 'vue';
import { set } from '@vueuse/core';
import { ElDatePicker } from 'element-plus';
import 'element-plus/es/components/date-picker/style/css';

defineOptions({ name: 'date-picker' });

const props = defineProps({
  modelValue: Array
});
const emit = defineEmits(['update:modelValue']);
const shortcuts = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    }
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    }
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    }
  }
];
const pickerValue = ref([]);
set(
  pickerValue,
  props.modelValue.length > 0
    ? props.modelValue.map((v) => v.substr(0, 10))
    : []
);
const changeDatePicker = (value: Array<string>) => {
  if (value) {
    set(pickerValue, [`${value[0]} 00:00:00`, `${value[1]} 23:59:59`]);
  } else {
    set(pickerValue, []);
  }

  emit('update:modelValue', pickerValue);
};
</script>

<template>
  <el-date-picker
    :model-value="pickerValue"
    type="daterange"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    format="YYYY-MM-DD"
    value-format="YYYY-MM-DD"
    style="width: 100%"
    :shortcuts="shortcuts"
    @update:modelValue="changeDatePicker"
  />
</template>

<style scoped></style>
