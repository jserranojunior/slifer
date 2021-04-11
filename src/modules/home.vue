<template>
  <div class="flex">
    <div class="w-1/2 px-1 mt-2">
      <SCard>
        <template v-slot:header>
          <div>Buttons</div>
        </template>
        <template v-slot:body>
          <div class="flex flex-wrap">
            <div class="w-1/3 px-1 mt-1">
              <SBtn value="<i class='far fa-file-alt'></i> Botão Red" color="red" />
            </div>
            <div class="w-1/3 px-1 mt-1">
              <SBtn value="Botão Yellow" color="yellow" />
            </div>
            <div class="w-1/3 px-1 mt-1">
              <SBtn value="Botão Blue" color="blue" />
            </div>
            <div class="w-1/3 px-1 mt-1">
              <SBtn value="Botão Green" color="green" />
            </div>
            <div class="w-1/3 px-1 mt-1">
              <SBtn value="Botão Gray" color="gray" />
            </div>
            <div class="w-1/3 px-1 mt-1">
              <SBtn value="Botão Ice" color="ice" />
            </div>
            <div class="w-1/3 px-1 mt-1">
              <SBtn value="Botão Transparente" color="btn" />
            </div>
          </div>
        </template>
      </SCard>
    </div>
    <div class="w-1/2 px-1 mt-2">
      <SCard>
        <template v-slot:header>
          <div>Callouts</div>
        </template>
        <template v-slot:body>
          <div class="flex flex-wrap">
            <div class="w-1/2 px-1 mt-2">
              <SCallout value="Callout Red" color="red" />
            </div>
            <div class="w-1/2 px-1 mt-2">
              <SCallout value="Callout yellow" color="yellow" />
            </div>
            <div class="w-1/2 px-1 mt-2">
              <SCallout value="Callout Green" color="green" />
            </div>
            <div class="w-1/2 px-1 mt-2">
              <SCallout value="Callout Blue" color="blue" />
            </div>
          </div>
        </template>
      </SCard>
    </div>
  </div>

  <div class="flex">
    <div class="w-1/2 px-1 mt-2">
      <SCard>
        <template v-slot:header>
          <div>Card</div>
        </template>
        <template v-slot:body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitiosum est enim in
            dividendo partem in genere numerare. Stuprata per vim Lucretia a regis filio
            testata civis se ipsa interemit. At vero illa, quae Peripatetici, quae Stoici
            dicunt, se
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
    <div class="w-1/2 px-1 mt-2">
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

      <SCard>
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
    <div class="w-1/2 px-1 mt-2">
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
