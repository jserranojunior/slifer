<template>
  <div>Estou Rodando <i class="fas fa-spinner fa-spin"></i></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "lg",
    },
  },
};
</script>
