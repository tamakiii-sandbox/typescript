import * as greeter from "./greeter";
import * as number from "./number";
import * as array from "./array";
import * as enm from "./enum";

const results = [
  greeter.result,
  number.result,
  array.result,
  enm.result,
];

results.map((result) => {
  document.querySelector("#app").innerHTML += '<h2>' + result.label + '</h2>'
  document.querySelector("#app").innerHTML += '<textarea readonly>' + result.output + '</textarea>'
});
