export class User {
  public id: number;
  public firstname: string;
  public lastname: string;
  public username: string;
  public password: string;
  public email: string;
  public goal: number;
  constructor(
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string,
    goal: number
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.goal = goal;
  }
}
