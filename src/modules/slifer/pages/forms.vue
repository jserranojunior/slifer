<template>
  <div class="flex">
    <div class="w-1/2 pr-1">
      <SCard>
        <template v-slot:header>
          <div>Form</div>
        </template>
        <template v-slot:body>
          <SInputT name="SName" v-model="inputText" />
          <SInputN name="SNumber" v-model="inputNumber" />
          <SInputS
            name="SSelect"
            v-model="inputSelect"
            :options="optionsSelect"
            :change="methodSelect"
          />
        </template>
      </SCard>
    </div>
    <div class="w-1/2 mt-2">
      <SCard class="mt-2">
        <template v-slot:header>
          <div>Retorno Inputs</div>
        </template>
        <template v-slot:body>
          {{ inputText }} - {{ inputNumber }} - {{ inputSelect }}
        </template>
      </SCard>
    </div>
  </div>
  <div class="flex">
    <div class="w-1/2 mt-2 pr-1">
      <SCard>
        <template v-slot:header>
          <div>Funções</div>
        </template>
        <template v-slot:body>
          <SBtn color="blue" @click="inputNumber = 155" value="Mudar Valor Number" />
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
