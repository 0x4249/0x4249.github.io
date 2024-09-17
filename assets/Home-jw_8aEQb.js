import { Q as QPage, a as QCardSection, b as QCard } from "./QPage-ByIETOE1.js";
import { Q as QSeparator } from "./QSeparator-BqnkYkSf.js";
import { E as defineComponent, k as onMounted, _ as _export_sfc, G as openBlock, P as createElementBlock, Q as renderSlot, I as createBlock, J as withCtx, R as createBaseVNode, K as createVNode, M as createTextVNode, S as pushScopeId, U as popScopeId } from "./index-ByAOPkok.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "MathJax"
  },
  __name: "MathJax",
  props: {
    id: String
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    function renderMathJax() {
      let el = document.getElementById(props.id);
      if (!window.MathJax.version) {
        return;
      }
      if (el && !Array.isArray(el)) {
        el = [el];
      }
      return new Promise((resolve, reject) => {
        window.MathJax.typesetPromise(el).then(() => {
          resolve(void 0);
        }).catch((err) => reject(err));
      });
    }
    onMounted(() => {
      renderMathJax();
    });
    const __returned__ = { props, renderMathJax };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["id"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: $setup.props.id
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$1);
}
const MathJax = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "MathJax.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Home"
  },
  __name: "Home",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { MathJax };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-36f91ad0"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "q-pa-md row items-start q-gutter-md" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, " About Me ", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://www.ubc.ca" }, "UBC", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://eldad-haber.webnode.page" }, "Eldad Haber", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://hdl.handle.net/2429/86077" }, "here", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", null, " noise corrupted ", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(QCard, {
          class: "bg-secondary text-white page-card",
          flat: "",
          bordered: ""
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            }),
            createVNode(QSeparator, {
              spaced: "",
              dark: ""
            }),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode($setup["MathJax"], { id: "test" }, {
                  default: withCtx(() => [
                    createTextVNode(" I completed my PhD in Geophysics and Applied Mathematics at the University of British Columbia ("),
                    _hoisted_3,
                    createTextVNode(") under the supervision of professor "),
                    _hoisted_4,
                    createTextVNode(". My PhD thesis (available "),
                    _hoisted_5,
                    createTextVNode(") presents numerical techniques for solving the optimization problem $$ \\begin{equation*} \\min_{\\mathbf{x}} \\big \\{ \\phi(\\mathbf{x}) \\big \\} \\end{equation*} $$ when one only has access to "),
                    _hoisted_6,
                    createTextVNode(" versions of the objective function \\( \\phi(\\mathbf{x}) \\) and its gradient \\( \\nabla \\phi(\\mathbf{x}) \\). ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-36f91ad0"], ["__file", "Home.vue"]]);
export {
  Home as default
};
