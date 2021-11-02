import { dateUStoJsFull } from "./convertDate";

it("Month and day with 0", () => {
  const dateUs = "2021-01-05";
  var data = dateUs.replace(/-/g, ",");
  const dateJs = new Date(data);
  expect(dateUStoJsFull(dateUs)).toStrictEqual(dateJs);
});

it("Month and day with 10", () => {
  const dateUs = "2021-10-11";
  var data = dateUs.replace(/-/g, ",");
  const dateJs = new Date(data);
  expect(dateUStoJsFull(dateUs)).toStrictEqual(dateJs);
});

it("Month 0 and day with 15", () => {
  const dateUs = "2021-07-15";
  var data = dateUs.replace(/-/g, ",");
  const dateJs = new Date(data);
  expect(dateUStoJsFull(dateUs)).toStrictEqual(dateJs);
});

// Tratar
it("Date is Brazilian Formater", () => {
  const dateUs = "15/06/2021";
  var data = dateUs.replace(/-/g, ",");
  const dateJs = new Date(data);
  expect(dateUStoJsFull(dateUs)).toStrictEqual(dateJs);
});
