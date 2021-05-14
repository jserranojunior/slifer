<template>
  <table class="table">
    <thead
      class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200"
      v-if="this.$slots.header"
    >
      <slot name="header"></slot>
    </thead>
    <tbody
      class="bg-gray-700 border-b border-gray-600 text-white"
      v-if="this.$slots.body"
    >
      <slot name="body"></slot>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    classHeader: {
      type: String,
      require: false,
      default: "",
    },
    classBody: {
      type: String,
      require: false,
      default: "",
    },
    classFooter: {
      type: String,
      require: false,
      default: "",
    },
  },
  setup() {},
};
</script>
