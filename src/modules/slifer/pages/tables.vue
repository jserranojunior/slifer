<template>
  <div class="flex">
    <div class="w-full pr-1">
      <SCard>
        <template v-slot:header>
          <div>Table</div>
        </template>
        <template v-slot:body>
          <STable class="table-border-r">
            >
            <template v-slot:header>
              <tr class="text-left">
                <th>#</th>
                <th>Nome</th>
                <th>Endereço</th>
              </tr>
            </template>
            <template v-slot:body>
              <tr>
                <td>1</td>
                <td>Jorge</td>
                <td>No. 189, Grove St, Los Angeles</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Serrano</td>
                <td>No. 189, Grove St, Los Angeles</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Serrano</td>
                <td>No. 189, Grove St, Los Angeles</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Serrano</td>
                <td>No. 189, Grove St, Los Angeles</td>
              </tr>
            </template>
          </STable>
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
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
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
<style scoped>
.el-table .warning-row {
  background: #f0f9eb;
}
</style>
