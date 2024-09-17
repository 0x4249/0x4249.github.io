import { E as defineComponent, _ as _export_sfc, G as openBlock, P as createElementBlock, R as createBaseVNode } from "./index-ByAOPkok.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ErrorNotFound"
  },
  __name: "ErrorNotFound",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "fullscreen bg-primary text-white text-center q-pa-md flex flex-center column" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", {
  class: "column",
  style: { "font-size": "30vh" }
}, " 404 ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", {
  class: "column",
  style: { "font-size": "5vh" }
}, " Page Not Found ", -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4);
}
const ErrorNotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ErrorNotFound.vue"]]);
export {
  ErrorNotFound as default
};
