<template>
  <div :class="`callout-${color}`">{{ value }}</div>
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
