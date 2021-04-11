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

    <!-- <div :class="">
      {{ header }}
    </div> -->
    <!-- <div :class="`card-body  ${classBody}`">
      {{ body }}
    </div> -->
    <!-- <div :class="`card-footer  ${classFooter}`">
      {{ footer }}
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    // header: {
    //   type: String,
    //   require: false,
    // },
    // body: {
    //   type: String,
    //   require: false,
    // },
    // footer: {
    //   type: String,
    //   require: false,
    // },
    classHeader: {
      type: String,
      require: false,
    },
    classBody: {
      type: String,
      require: false,
    },
    classFooter: {
      type: String,
      require: false,
    },
  },
  setup() {},
};
</script>
