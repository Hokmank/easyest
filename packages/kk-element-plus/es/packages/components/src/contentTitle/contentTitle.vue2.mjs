import { defineComponent as t, openBlock as n, createElementBlock as o, toDisplayString as c } from "vue";
const l = { class: "content-title text-18px black-80 pl-20px mb-14px relative" }, i = t({ name: "content-title" }), s = /* @__PURE__ */ t({
  ...i,
  props: {
    title: String
  },
  setup(e) {
    return (p, r) => (n(), o("div", l, c(e.title), 1));
  }
});
export {
  s as default
};
