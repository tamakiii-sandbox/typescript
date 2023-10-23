const outputs = [];

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

outputs.push(
  [
    Color.Red,
    Color.Green,
    Color.Blue,
  ].join(",")
)

export const result = {
  label: "Enum",
  output: outputs.join("\n")
}