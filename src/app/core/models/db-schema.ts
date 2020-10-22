/**
 * Database Schema.
 */
export interface DbSchema {
  users: Array<Person>;
}

export interface Person {
  name: string;
  age: number;
}
