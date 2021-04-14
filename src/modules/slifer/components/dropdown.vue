<template>
  <div :class="`btn-${color}`">
    <div
      class="relative inline-flex items-center align-middle w-full"
      @click="toggleDropdown()"
    >
      <span v-html="value" class="text-center"></span>
      <span class="float-right ml-auto">
        <i class="fas fa-angle-down" v-if="!drop"></i>
        <i class="fas fa-angle-up" v-if="drop"></i>
      </span>
    </div>
    <div v-if="drop" class="border-t" @click="toggleDropdown()">
      <div class="mt-1 flex flex-wrap">
        <slot name="itens"></slot>
      </div>
    </div>
  </div>
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
  data() {
    return {
      drop: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.drop = !this.drop;
    },
  },
};
</script>
