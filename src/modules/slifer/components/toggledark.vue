<template>
  <SBtn
    value="<i class='dark:text-gray-100 fas fa-adjust'></i>"
    color="btn"
    @click="toggleDarkMode()"
  ></SBtn>
</template>
<script>
export default {
  name: "toggledark",
  beforeMount() {
    this.checkDarkMode();
  },
  methods: {
    checkDarkMode() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (localStorage.theme === "dark") {
        document.querySelector("html").classList.add("dark");
        document.querySelector("html").classList.remove("light");
      } else if (!localStorage.theme) {
        localStorage.theme = "light";
        document.querySelector("html").classList.add("light");
        document.querySelector("html").classList.remove("dark");
      } else {
        localStorage.theme = "light";
        document.querySelector("html").classList.add("light");
        document.querySelector("html").classList.remove("dark");
      }
    },

    toggleDarkMode() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        document.querySelector("html").classList.add("light");
        document.querySelector("html").classList.remove("dark");
      } else {
        localStorage.theme = "dark";
        document.querySelector("html").classList.add("dark");
        document.querySelector("html").classList.remove("light");
      }
    },
  },
};
</script>
