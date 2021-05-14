<template>
  <div class="flex">
    <div class="w-1/2 mt-2">
      <SModal name="Nova Modal" v-if="showModal">
        <template v-slot:header>
          <div>Modal para testar as novas funções</div>
        </template>
        <template v-slot:body>
          <SBtn color="blue" @click="inputNumber = 155" value="Mudar Valor Number" />
        </template>
      </SModal>
      <SCard>
        <template v-slot:header>
          <div>Modais</div>
        </template>
        <template v-slot:body>
          <SBtn color="green" @click="showModal = true" value="Abrir Modal" />
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
