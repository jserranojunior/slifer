<template>
  <div>
    <nav
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
    ></nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      linkSair: process.env.VUE_APP_LARAVEL_SITE_URL + "/sair",
    };
  },
  methods: {
    ...mapActions("Auth", ["Logout"]),

    sair() {
      this.Logout();
      this.$router.go("/login");
    },
  },
  computed: {
    ...mapState({
      Auth: (state) => state.Auth,
    }),
  },
};
</script>
