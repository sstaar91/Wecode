export interface UserInfo {
  [key: string]: string;
  id: string;
  password: string;
}

export interface AdminUserType {
  id: number;
  name: string;
  email: string;
  password: string;
}
