import client from "../util/client";

interface IUserInfo {
  username: string;
  password: string;
}

export const fetchTodos =  () => {
  // const res = await client.get("/user/login")
  return ([
    {
      id: 123,
      content: "123",
      deadline: 11,
    },
    {
      id: 1234,
      content: "12341",
      deadline: 111,
    },
  ])
};
