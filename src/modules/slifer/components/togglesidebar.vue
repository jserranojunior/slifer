<template>
  <SBtn
    value="<i class='dark:text-gray-100 fas fa-bars'></i>"
    color="btn"
    @click="toggleSidebar()"
  ></SBtn>
</template>
<script>
export default {
  name: "toggledark",
  mounted() {
    this.checkSidebar();
  },
  methods: {
    checkSidebar() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      const sidebar = document.querySelector(".sidebar");
      const storageSidebar = localStorage.getItem("sidebar");

      if (storageSidebar === "sidebar-open" && sidebar) {
        localStorage.sidebar = "sidebar-open";
        sidebar.classList.add("sidebar-open");
        sidebar.classList.remove("sidebar-close");
      } else if (!storageSidebar) {
        localStorage.sidebar = "sidebar-open";
        sidebar.classList.add("sidebar-open");
        sidebar.classList.remove("sidebar-close");
      } else {
        localStorage.sidebar = "sidebar-close";
        sidebar.classList.remove("sidebar-open");
        sidebar.classList.add("sidebar-close");
      }
      console.log(sidebar);
    },

    toggleSidebar() {
      const sidebar = document.querySelector(".sidebar");
      const storageSidebar = localStorage.getItem("sidebar");

      if (storageSidebar === "sidebar-open" && sidebar) {
        localStorage.sidebar = "sidebar-close";

        sidebar.classList.remove("sidebar-open");
        sidebar.classList.add("sidebar-close");
      } else {
        localStorage.sidebar = "sidebar-open";

        sidebar.classList.add("sidebar-open");
        sidebar.classList.remove("sidebar-close");
      }
      console.log(sidebar);
    },
  },
};
</script>
