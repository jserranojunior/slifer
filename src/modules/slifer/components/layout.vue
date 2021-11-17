<template>
  <div :class="`${classGeral}`">
    <div v-if="this.$slots.header">
      <slot name="header"></slot>
    </div>

    <div :class="`flex ${classMainSidebar}`">
      <div v-if="this.$slots.sidebar">
        <div>
          <slot name="sidebar"></slot>
        </div>
      </div>
      <div @click="closeSidebarBodyClick()">
        <slot name="mainpage"></slot>
      </div>
    </div>
    <div v-if="this.$slots.footer">
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    classMainSidebar: {
      type: String,
      require: false,
      default: "",
    },
    classGeral: {
      type: String,
      require: false,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    closeSidebar() {
      if (document.querySelector(".sidebar")) {
        const sidebar = document.querySelector(".sidebar");
        const storageSidebar = localStorage.getItem("sidebar");
        if (storageSidebar === "sidebar-open" && sidebar) {
          localStorage.sidebar = "sidebar-close";
          sidebar.classList.remove("sidebar-open");
          sidebar.classList.add("sidebar-close");
        }
      }
    },
    closeSidebarBodyClick() {
      if (document.querySelector(".sidebar")) {
        const storageSidebar = localStorage.getItem("sidebar");
        if (window.screen.width < 768 && storageSidebar === "sidebar-open") {
          this.closeSidebar();
        }
      }
    },
  },
};
</script>
