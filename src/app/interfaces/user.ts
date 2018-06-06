// export interface User {
//   id: number;
//   username: string;
//   name?: string;
//   email: string;
// }


export interface Roles {
  reader: boolean;
  admin?: boolean;
  registered?: boolean;
}


export class User {
  email: string;
  photoURL: string;
  roles: Roles;


  constructor(authData) {
    this.email = authData.email;
    this.photoURL = authData.photoURL;
    this.roles = {reader: true};
  }
}
