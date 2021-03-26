import { API, User } from "api";
import React, { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext<any>(null);
const { Provider } = GlobalContext;

interface Props {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: Props) {
  const [login, setLogin] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const token = window.localStorage.getItem("email");

    if (token) {
      API.requestUsers()
        .then((users) => {
          const loginUser = users.find((user) => token === user.email);

          if (loginUser) {
            setUser(loginUser);
            setLogin(true);
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <Provider value={{ login, setLogin, user, setUser }}>{children}</Provider>
  );
}
