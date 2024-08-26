interface BaseUser {
  email: string;
}

export interface LoginUser extends BaseUser {
  password: string;
}

interface UserWithName extends LoginUser {
  first_name: string;
  last_name?: string;
}

export interface CreateUser extends UserWithName {
  terms: "on" | "off";
}

export interface User extends UserWithName {
  id: string;
}
