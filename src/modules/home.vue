<template>
  <div class="flex">
    <div class="w-1/2">
      <div class="p-2">Buttons</div>
      <div class="p-2">
        <SBtn value="Botão Red" color="red" :class="'mx-1'" />
        <SBtn value="Botão Yellow" color="yellow" :class="'mx-1'" />
        <SBtn value="Botão Blue" color="blue" :class="'mx-1'" />
        <SBtn value="Botão Green" color="green" :class="'mx-1'" />
      </div>
    </div>
    <div class="w-1/2">
      <div class="mt-1 p-2">Callouts</div>
      <div class="p-2">
        <SCallout value="Callout Red" color="red" />
        <SCallout value="Callout yellow" color="yellow" />
        <SCallout value="Callout Green" color="green" />

        <SCallout value="Callout Blue" color="blue" />
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="w-1/2">
      <div class="mt-1 p-2">Card</div>
      <div class="p-2 bg-gray-200">
        <SCard
          header="Titulo"
          body="Corpo"
          footer="Rodapé"
          classHeader=""
          classBody=""
          classFooter=""
        />
      </div>
    </div>
    <div class="w-1/2">
      <div class="mt-1 p-2">Form</div>
      <div class="p-2">
        <SInputT name="SName" v-model="inputText" />
        <SInputN name="SNumber" v-model="inputNumber" />
      </div>
      <div class="p-2">
        <button class="btn-blue" @click="inputNumber = 155">Mudando</button>
        {{ inputText }} - {{ inputNumber }} - {{ inputSelect }}
        <hr />
        SELECT
        <SInputS
          name="SSelect"
          v-model="inputSelect"
          :options="optionsSelect"
          :change="methodSelect"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
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
  },
};
</script>
