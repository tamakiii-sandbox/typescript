interface Person {
  firstName: string;
  lastName: string;
}

export function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

export const user = { firstName: "Jane", lastName: "Daniel" };

export const output = greeter(user);

export const result = {
  label: "greeter",
  output: output,
}