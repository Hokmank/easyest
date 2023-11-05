<script lang="ts" setup>
const dataPickerVal = ref([]);
</script>

<template>
  <div>
    <ContentTitle title="标题" />
    <el-form label-position="top">
      <el-form-item label="时间选择器" class="w-300px">
        <date-picker v-model="dataPickerVal" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup></script>
