import styles from "./components/styles.vue";
import btn from "./components/btn.vue";
import spinner from "./components/spinner.vue";
import callout from "./components/callout.vue";
import card from "./components/card.vue";
import inputT from "./components/inputT.vue";
import inputN from "./components/inputN.vue";
import inputS from "./components/inputS.vue";

// Layouts
import layout from "./layouts/layout.vue";

export default {
  install(Vue) {
    Vue.component("SStyle", styles);
    Vue.component("SBtn", btn);
    Vue.component("SSpinner", spinner);
    Vue.component("SCallout", callout);
    Vue.component("SCard", card);
    Vue.component("SInputT", inputT);
    Vue.component("SInputN", inputN);
    Vue.component("SInputS", inputS);
    Vue.component("SLayout", layout);
  },
};
