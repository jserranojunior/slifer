<template>
  <div class="card">
    <div :class="`card-header ${classHeader}`">
      {{ header }}
    </div>
    <div :class="`card-body  ${classBody}`">
      {{ body }}
    </div>
    <div :class="`card-footer  ${classFooter}`">
      {{ footer }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header: {
      type: String,
      require: false,
    },
    body: {
      type: String,
      require: false,
    },
    footer: {
      type: String,
      require: false,
    },
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
