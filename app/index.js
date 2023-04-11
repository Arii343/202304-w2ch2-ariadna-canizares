import { strictEqual } from "./strictEqual/index.js";

console.log(
  "When valueA is 1 and valueB is 1 should return -> ",
  strictEqual(1, 1)
);

console.log(
  "When valueA is NaN and valueB is NaN should return ->",
  strictEqual(NaN, NaN)
);

console.log(
  "When valueA is 0 and valueB is -0 should return ->",
  strictEqual(0, -0)
);

console.log(
  "When valueA is -0 and valueB is 0 should return ->",
  strictEqual(-0, 0)
);

console.log(
  "When valueA is 1 and valueB is '1' should return ->",
  strictEqual(1, "1")
);

console.log(
  "When valueA is true and valueB is false should return ->",
  strictEqual(true, false)
);

console.log(
  "When valueA is false and valueB is false should return ->",
  strictEqual(false, false)
);

console.log(
  "When valueA is 'Water' and valueB is 'oil' should return ->",
  strictEqual("Water", "oil")
);
