import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}');
const _sfc_main = { name: "components/button/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ea_button = resolveComponent("ea-button");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_ea_button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`默认按钮`);
      } else {
        return [
          createTextVNode("默认按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ea_button, { type: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`默认按钮`);
      } else {
        return [
          createTextVNode("默认按钮")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<details class="details custom-block"><summary>显示代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;默认按钮&lt;/</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt; &lt;</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">type</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;默认按钮&lt;/</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;默认按钮&lt;/</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt; &lt;</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">type</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">=</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;默认按钮&lt;/</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">ea-button</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span></code></pre></div></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
