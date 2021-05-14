<template>
  <div class="flex">
    <div class="w-1/2 pr-1">
      <SCard>
        <template v-slot:header>
          <div>Buttons</div>
        </template>
        <template v-slot:body>
          <div class="flex flex-wrap">
            <div class="w-1/3 pr-1 mt-1">
              <SBtn value="<i class='far fa-file-alt'></i> Botão Red" color="red" />
            </div>
            <div class="w-1/3 pr-1 mt-1">
              <SBtn value="Botão Yellow" color="yellow" />
            </div>
            <div class="w-1/3 pr-1 mt-1">
              <SBtn value="Botão Blue" color="blue" />
            </div>
            <div class="w-1/3 pr-1 mt-1">
              <SBtn value="Botão Green" color="green" />
            </div>
            <div class="w-1/3 pr-1 mt-1">
              <SBtn value="Botão Gray" color="gray" />
            </div>
            <div class="w-1/3 pr-1 mt-1">
              <SBtn value="Botão Ice" color="ice" />
            </div>
            <div class="w-1/3 pr-1 mt-1">
              <SBtn value="Botão Transparente" color="btn" />
            </div>
          </div>
        </template>
      </SCard>
    </div>
    <div class="w-1/2">
      <SCard>
        <template v-slot:header>
          <div>Dropdown</div>
        </template>
        <template v-slot:body>
          <div class="w-1/3 pr-1 mt-1">
            <SDropdown value="Dropdown button">
              <template v-slot:itens>
                <a class="drop-item" href="#">Action</a>
                <a class="drop-item" href="#">Another action</a>
                <a class="drop-item" href="#">Something else here</a>
              </template>
            </SDropdown>
          </div>
          <div class="w-1/3 pr-1 mt-1">
            <SDropdown value="Dropdown button" color="red">
              <template v-slot:itens>
                <a class="drop-item" href="#">Action</a>
                <a class="drop-item" href="#">Another action</a>
                <a class="drop-item" href="#">Something else here</a>
              </template>
            </SDropdown>
          </div>
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
