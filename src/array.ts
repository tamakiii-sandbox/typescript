const outputs = [];

let list: number[] = [1, 2, 3];
outputs.push(list.join(','))

let list2: Array<number> = [1, 2, 3];
outputs.push(list2.join(','))

export const result = {
  label: "Array",
  output: outputs.join("\n")
}