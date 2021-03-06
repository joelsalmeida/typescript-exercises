// Fix type errors in logPerson function.

// logPerson function should accept both User and Admin and should output
// relevant information according to the input: occupation for User and role for Admin.

// Reference: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
  },
];

export function logPerson(person: Person) {
  let additionalInformation: string;

  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  return(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
