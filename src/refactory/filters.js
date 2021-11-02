import {
  datePtBrToUs,
  converterDateUsToCalendar,
} from "@/helpers/datesHelpers";
function calcularAnosIdade(value) {
  if (value.length == 10) {
    var nascimento = value.split("-");
    var dataNascimento = new Date(
      parseInt(nascimento[0], 10),
      parseInt(nascimento[1], 10) - 1,
      parseInt(nascimento[2], 10)
    );
    var diferenca = Date.now() - dataNascimento.getTime();
    var calIdade = new Date(diferenca);
    var idade = Math.abs(calIdade.getUTCFullYear() - 1970);
    return idade;
  }
}
function mesesDeVidaNoAnoAtual(value) {
  if (value.length == 10) {
    var nascimento = value.split("-");
    var dataNascimento = new Date(
      parseInt(nascimento[0], 10),
      parseInt(nascimento[1], 10) - 1,
      parseInt(nascimento[2], 10)
    );
    const today = new Date();
    const mesAtual = parseInt(today.getMonth() + 1);
    const diaAtual = parseInt(today.getDate());

    var meses = 0;
    var mesesFalta = 0;
    var mesNascimento = parseInt(dataNascimento.getMonth() + 1);
    var diaNascimento = parseInt(dataNascimento.getDate());

    if (mesNascimento > mesAtual) {
      mesesFalta = mesNascimento - mesAtual;
      meses = 12 - mesesFalta;
      if (diaNascimento < diaAtual) {
        meses = meses - 1;
      }
    } else if (mesNascimento < mesAtual) {
      mesesFalta = mesNascimento + mesAtual;
      meses = 12 - mesesFalta;
      if (diaNascimento < diaAtual) {
        meses = meses - 1;
      }
    } else {
      if (diaNascimento < diaAtual) {
        meses = 11;
      } else {
        meses = 0;
      }
    }

    return meses;
  }
}

export const money = (value) => {
  if (!value) {
    return "0,00";
  } else {
    let val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const firstName = (value) => {
  let firstName = value.split(" ");
  return firstName[0];
};

export function imageStorageLink(value) {
  if (value) {
    let urlStorage = process.env.VUE_APP_LARAVEL_STORAGE_URL;
    var avatar = urlStorage + "/" + value;
    return avatar;
  }
}
export function getNameAtividade(value) {
  if (value == 1) {
    return "Apometria";
  } else if (value == 2) {
    return "Passes Magnéticos";
  } else if (value == 3) {
    return "Estudo e Prática do Evangelho - Reunião Espírita";
  } else if (value == 4) {
    return "Obreiros da Luz - Entidades de Umbanda";
  }
}
export const converterDateCalendar = (value) => {
  return converterDateUsToCalendar(value);
};

export const idadeComMeses = (value) => {
  if (value) {
    if (value.length == 10) {
      if (value.includes("/")) {
        value = datePtBrToUs(value);
      }

      const ano = calcularAnosIdade(value);
      const meses = mesesDeVidaNoAnoAtual(value);

      let newMeses = meses.toString();
      if (newMeses.includes("-")) {
        console.log(newMeses);
        newMeses = newMeses.replace("-", "");
      }
      return `${ano} anos e ${newMeses} meses`;
    }
  }
};

export function limitarTexto(value, tamanho) {
  if (!value) return "";
  value = value.toString();
  return value.substring(0, tamanho) + " ...";
}
