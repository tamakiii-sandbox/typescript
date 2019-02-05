let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

export const output = [
  decimal,
  hex,
  binary,
  octal,
].join()

export const result = {
  label: "Number",
  output: output,
}