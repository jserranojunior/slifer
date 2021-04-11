<template>
  <div class="card">
    <div :class="`card-header ${classHeader}`">
      <slot name="header"></slot>
    </div>

    <div :class="`card-body  ${classBody}`">
      <slot name="body"></slot>
    </div>

    <div :class="`card-footer  ${classFooter}`">
      <slot name="footer"></slot>
    </div>
  </div>
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
