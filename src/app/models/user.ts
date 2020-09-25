export class User {
  public id: number;
  public username: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public goal: number;
  constructor(
    id: number,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string,
    goal: number
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.goal = goal;
  }
}
