<template>
  <SLayout>
    <template v-slot:header> HEADER </template>
    <template v-slot:sidebar> Aqui está a nossa SIDEBAR </template>
    <template v-slot:mainpage>
      <router-view></router-view>
    </template>
  </SLayout>
</template>

<script>
export default {
  name: "App",
};
</script>
