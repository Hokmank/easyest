<script lang="ts" setup>
const props = defineProps([
  'dataFormRef',
  'formInline',
  'beforeInitHandler',
  'otherTableParams',
  'dataHandler',
  'getData',
  'clientPagination',
  'tableIntervalSwitch',
  'tableIntervalTime',
  'tableId'
]);

const {
  tableData,
  total,
  multipleSelection,
  handleSelectionChange,
  pageSize,
  pageNum,
  handleSizeChange,
  handleCurrentChange,
  tableSortChange,
  getList,
  onReset,
  loading
} = useTable(props);

defineExpose({
  getList,
  multipleSelection
});

const tableRef = ref(null);
const slots = useSlots();

function showSelection() {
  return slots.default().some((v) => v.props.type === 'selection');
}
const isShowSelection = showSelection();
</script>

<template>
  <div v-loading="loading">
    <FilterPanel
      v-if="$slots.form"
      :table-id="tableId"
      @onReset="onReset"
      @getList="getList(true)"
    >
      <slot name="form" />
    </FilterPanel>
    <div class="sys-table-container">
      <div class="sys-table-card">
        <div
          v-if="isShowSelection || $slots['opr-btn-list']"
          class="sys-table-card__heater"
        >
          <div>
            <div v-if="isShowSelection" class="text-plain-bg">
              已选择{{ multipleSelection.length }}条数据
            </div>
          </div>

          <div class="flex align-items-center flex-wrap">
            <slot name="opr-btn-list" />
          </div>
        </div>
        <ElementProTable
          ref="tableRef"
          :data="tableData"
          tooltip-effect="light"
          :scrollbar-always-on="true"
          header-row-class-name="el-header-row-class"
          row-class-name="el-row-class"
          :table-id="tableId"
          @sort-change="tableSortChange"
          @selection-change="handleSelectionChange"
        >
          <!-- <div>1212</div> -->
          <slot />
        </ElementProTable>
      </div>
      <Pagination
        v-model:current-page="pageNum"
        v-model:page-size="pageSize"
        class="fix-pagination"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
        <template #icon>
          <ElementProTableSetting v-if="tableRef" :table="tableRef">
            <div
              class="rounded-full h-40px w-40px bg-third cursor-pointer inline-block text-center leading-40px mr-6px"
            >
              <i i-mdi-cog-transfer-outline title="表设计" class="!mr-0" />
            </div>
          </ElementProTableSetting>
        </template>
      </Pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//分页器固定样式
.fix-pagination {
  position: sticky;
  padding: 10px 0;
  margin-top: 10px;
  bottom: 0px;
  z-index: 99;
  background: #fff;
}
</style>
