<template>
  <div class="dark:bg-gray-900 dark:text-gray-100">
    <nav
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full dark:bg-gray-800 dark:text-gray-100"
      v-if="this.$slots.header"
    >
      <slot name="header"></slot>
    </nav>
    <div class="flex bg-gray-100 w-full h-screen dark:bg-gray-700 dark:text-gray-100">
      <div
        class="sidebar sm:w-4/12 md:w-4/12 lg:w-3/12 xl:w-2/12 bg-white rounded p-3 shadow-lg dark:bg-gray-700 dark:text-gray-100"
        v-if="this.$slots.sidebar"
      >
        <div class="flex items-center space-x-4 p-2 mb-5">
          <slot name="sidebar"></slot>
        </div>
      </div>
      <!-- sm:w-8/12 md:w-10/12 lg:w-11/12 xl:w-11/12  -->
      <div class="w-auto p-2 dark:bg-gray-600 dark:text-gray-100">
        <slot name="mainpage"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
