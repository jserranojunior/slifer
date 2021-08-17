<template>
  <SLayout>
    <template v-slot:header> <STogglesidebar /> HEADER <SToggledark /></template>
    <template v-slot:sidebar>
      <router-link to="/" class="nav-btn">
        <span>Home</span>
      </router-link>
      <router-link to="/buttons" class="nav-btn">
        <span>Buttons</span>
      </router-link>
      <router-link to="/notifications" class="nav-btn">
        <span>Notifications</span>
      </router-link>
      <router-link to="/cards" class="nav-btn">
        <span>Cards</span>
      </router-link>
      <router-link to="/forms" class="nav-btn">
        <span>Forms</span>
      </router-link>
      <router-link to="/tables" class="nav-btn">
        <span>Tables</span>
      </router-link>
      <router-link to="/prints" class="nav-btn">
        <span>Prints</span>
      </router-link>
    </template>
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
<style>
@import "./assets/styles/slifer-style.css";
</style>
