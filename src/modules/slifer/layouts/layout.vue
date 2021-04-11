<template>
  <div>
    <nav
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
      v-if="this.$slots.header"
    >
      <slot name="header"></slot>
    </nav>
    <div class="flex bg-gray-100 w-full h-screen">
      <div
        class="sm:w-4/12 md:w-4/12 lg:w-3/12 xl:w-2/12 bg-white rounded p-3 shadow-lg"
        v-if="this.$slots.sidebar"
      >
        <div class="flex items-center space-x-4 p-2 mb-5">
          <slot name="sidebar"></slot>
        </div>
      </div>
      <div class="sm:w-8/12 md:w-10/12 lg:w-11/12 xl:w-11/12 p-1 mx-auto text-gray-500">
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
