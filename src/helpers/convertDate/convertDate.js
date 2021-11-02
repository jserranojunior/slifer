export function dateUStoJsFull(value) {
  var data = value.replace(/-/g, ",");
  var date = new Date(data);
  return date;
}

export function dateUStoJs(value) {
  var data = value.replace(/-/g, ",");
  var date = new Date(data);
  return date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
}

export function dateUstoPtBr(data) {
  if (data) {
    var dia = data.split("-")[2];
    var mes = data.split("-")[1];
    var ano = data.split("-")[0];
    return ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
  }
}

export function dateJstoPtBr(value) {
  var d = new Date(value),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
}

export function dateJstoUs(value) {
  var d = new Date(value),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function datePtBrToUs(data) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}

export function datePtBrToJs(data) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}
