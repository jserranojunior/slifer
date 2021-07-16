<template>
  <input class="form" :id="name" type="email" :name="name" v-model="value" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    modelValue: {
      type: String,
      require: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
