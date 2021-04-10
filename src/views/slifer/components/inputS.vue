<template>
  <select class="form" :id="name" :name="name" v-model="value">
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      :disabled="option.disabled"
      :selected="option.selected"
    >
      {{ option.name }}
    </option>
  </select>
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
      default: 0,
    },
    options: {
      type: Array,
      require: true,
    },
    change: {
      type: Function,
      require: false,
      default: () => {},
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        let newValue = "";
        if (typeof value == "number") {
          newValue = value.toString();
        } else {
          newValue = value;
        }

        this.$emit("update:modelValue", newValue);
        this.change();
      },
    },
  },
};
</script>
