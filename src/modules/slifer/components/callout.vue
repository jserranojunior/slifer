<template>
  <div :class="`callout-${color} dark:text-gray-500`" v-html="value"></div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue",
      require: false,
    },
    value: {
      type: String,
      require: true,
    },
  },
  setup() {},
};
</script>
