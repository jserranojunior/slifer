<template>
  <input class="form" :id="name" type="number" :name="name" v-model="value" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    modelValue: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        let newValue = 0;
        if (typeof value == "string") {
          if (!value) {
            newValue = 0;
          } else {
            newValue = parseInt(value);
          }
        } else {
          newValue = value;
        }
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>
