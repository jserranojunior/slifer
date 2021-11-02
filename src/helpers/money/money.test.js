import { moneyInBRL } from "./money";

it("Convert 0 in BRL", () => {
  expect(moneyInBRL(0)).toBe("0,00");
});

it("Convert 0 DLR in BRL", () => {
  expect(moneyInBRL(0.0)).toBe("0,00");
});

it("Convert 0.01 DLR in BRL", () => {
  expect(moneyInBRL(0.01)).toBe("0,01");
});

it("Convert number 100 in BRL", () => {
  expect(moneyInBRL(100)).toBe("100,00");
});
