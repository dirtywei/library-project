import { defineComponent as e, computed as s, openBlock as u, createElementBlock as l, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.less.mjs";
const c = e({
  name: "dy-button"
}), _ = /* @__PURE__ */ e({
  ...c,
  props: {
    type: {}
  },
  setup(o) {
    const t = o, n = s(() => ({ [`dy-button--${t.type}`]: t.type }));
    return (r, d) => (u(), l("button", {
      class: p(["dy-button", n.value])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  _ as default
};
