<template>
  <div class="flex">
    <div class="w-1/2 pr-1">
      <SCard>
        <template v-slot:header>
          <div>Card</div>
        </template>
        <template v-slot:body>
          <p>
            I Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitiosum est enim
            in dividendo partem in genere numerare. Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. At vero illa, quae Peripatetici, quae
            Stoici dicunt, se
          </p>
        </template>
        <template v-slot:footer>
          <p>
            Duo Reges: constructio interrete. Quid est, quod ab ea absolvi et perfici
            debeat? Itaque sensibus rationem adiunxit et ratione effecta sensus non
            reliquit. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum
            putaverunt.
          </p>
        </template>
      </SCard>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      notifications: [],
      showModal: false,
      inputText: "Texto usando input",
      inputNumber: 15,
      inputSelect: "",
      optionsSelect: [
        { value: "", name: "Selecione uma das opções", disabled: true, selected: true },
        { value: 1, name: "Número 1" },
        { value: 2, name: "Número 2" },
        { value: "Número 3", name: "Número 3" },
      ],
    };
  },
  methods: {
    methodSelect() {
      console.log(`Meu número é: ${this.inputNumber} e meu select é ${this.inputSelect}`);
    },
    removeNotification() {
      this.notifications = [];
    },
    addNotification() {
      this.notifications.push({
        body: "corpo do titulo",
        title: "Toast Notification",
        color: "red",
      });
    },
  },
};
</script>

<style lang="css">
.card {
  @apply bg-white rounded w-full p-1  shadow-xl dark:bg-gray-800 dark:text-gray-100;
}
.card-header {
  @apply border-b border-gray-200 dark:border-gray-500 p-1 text-sm;
}
.card-body {
  @apply border-gray-200 dark:border-gray-500 p-1;
}
.card-footer {
  @apply border-t  py-1;
}
</style>
