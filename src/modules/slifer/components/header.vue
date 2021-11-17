<template>
  <div class="">
    <nav
      :class="`flex sm:text-left sm:justify-between w-full font-sans py-2 px-6 sm:items-baseline shadow-md 
          border-b no-print border-whitetheme-200 bg-whitetheme-200 dark:bg-darktheme-800 dark:text-darktheme-100 dark:border-darktheme-700 ${classHeader}`"
    >
      <span v-if="enableTogglesidebar"> <STogglesidebar /> </span>
      <slot name="header"></slot>
      <span v-if="enableTogglesidebar"><SToggledark /></span>
    </nav>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    classHeader: {
      type: String,
      require: false,
      default: "",
    },
    enableTogglesidebar: {
      type: Boolean,
      require: false,
      default: true,
    },
    enableToggledark: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>
