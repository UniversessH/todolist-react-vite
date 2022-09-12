import client from "../util/client";

interface IUserInfo {
  username: string;
  password: string;
}

export const login = async (userInfo: IUserInfo) => {
  const res = await client.get("/user/login")
};
// 还没写完