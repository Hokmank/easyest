import { defineComponent as n, ref as p, openBlock as u, createBlock as i, unref as d } from "vue";
import "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.2_vue@3.3.7/node_modules/element-plus/theme-chalk/base.css.mjs";
import "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.2_vue@3.3.7/node_modules/element-plus/theme-chalk/el-date-picker.css.mjs";
import "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.2_vue@3.3.7/node_modules/element-plus/theme-chalk/el-input.css.mjs";
import "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.2_vue@3.3.7/node_modules/element-plus/theme-chalk/el-scrollbar.css.mjs";
import "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.2_vue@3.3.7/node_modules/element-plus/theme-chalk/el-popper.css.mjs";
import "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.2_vue@3.3.7/node_modules/element-plus/theme-chalk/el-button.css.mjs";
import { set as r } from "../../../../node_modules/.pnpm/registry.npmmirror.com_@vueuse_shared@10.5.0_vue@3.3.7/node_modules/@vueuse/shared/index.mjs";
import { ElDatePicker as f } from "../../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.2_vue@3.3.7/node_modules/element-plus/es/components/date-picker/index.mjs";
const D = n({ name: "date-picker" }), x = /* @__PURE__ */ n({
  ...D,
  props: {
    modelValue: Array
  },
  emits: ["update:modelValue"],
  setup(l, { emit: m }) {
    const a = l, s = [
      {
        text: "最近一周",
        value: () => {
          const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
          return t.setTime(t.getTime() - 3600 * 1e3 * 24 * 7), [t, e];
        }
      },
      {
        text: "最近一个月",
        value: () => {
          const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
          return t.setTime(t.getTime() - 3600 * 1e3 * 24 * 30), [t, e];
        }
      },
      {
        text: "最近三个月",
        value: () => {
          const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
          return t.setTime(t.getTime() - 3600 * 1e3 * 24 * 90), [t, e];
        }
      }
    ], o = p([]);
    r(
      o,
      a.modelValue.length > 0 ? a.modelValue.map((e) => e.substr(0, 10)) : []
    );
    const c = (e) => {
      e ? r(o, [`${e[0]} 00:00:00`, `${e[1]} 23:59:59`]) : r(o, []), m("update:modelValue", o);
    };
    return (e, t) => (u(), i(d(f), {
      "model-value": o.value,
      type: "daterange",
      "start-placeholder": "开始时间",
      "end-placeholder": "结束时间",
      format: "YYYY-MM-DD",
      "value-format": "YYYY-MM-DD",
      style: { width: "100%" },
      shortcuts: s,
      "onUpdate:modelValue": c
    }, null, 8, ["model-value"]));
  }
});
export {
  x as default
};
