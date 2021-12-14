<template>
  <SLayout>
    <template v-slot:header>
      <SHeader>
        <template v-slot:header>Home Sobre Contato</template>
      </SHeader>
    </template>

    <template v-slot:sidebar>
      <div
        class="h-screen sidebar w-64 z-10 absolute md:static rounded p-1 shadow-lg no-print bg:whitetheme-700 text-whitetheme-900 dark:bg-darktheme-700 dark:text-darktheme-100"
      >
        <div class="flex flex-wrap items-center p-1 text-sm">
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
        </div>
      </div>
    </template>

    <template v-slot:mainpage>
      <div
        class="h-screen w-full z-0 p-2 absolute md:static bg-whitetheme-100 text-whitetheme-900 dark:bg-darktheme-600 dark:text-darktheme-100"
      >
        <router-view></router-view>
      </div>
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
