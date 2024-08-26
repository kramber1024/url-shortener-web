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
  terms: "off" | "on";
}

export interface User extends UserWithName {
  id: string;
}
