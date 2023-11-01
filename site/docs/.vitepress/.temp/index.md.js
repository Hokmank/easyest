import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Easyest","titleTemplate":"一个Vue3组件库","description":"","frontmatter":{"layout":"home","title":"Easyest","titleTemplate":"一个Vue3组件库","hero":{"name":"Easyest","text":"一个Vue3组件库","tagline":"让你的组件库开发更简单"},"features":[{"icon":"💡","title":"Vue3组件库","details":"基于vite+TypeScript开发"},{"icon":"📦","title":"让你的组件库开发更简单","details":"提供一个Vue3组件库开发环境"},{"icon":"🛠️","title":"按需引入","details":"直接支持按需引入无需配置任何插件。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
