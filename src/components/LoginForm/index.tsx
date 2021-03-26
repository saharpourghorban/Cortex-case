import { API } from "api";
import { GlobalContext } from "components/GlobalContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const history = useHistory();
  const { setLogin, setUser } = useContext(GlobalContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [keepLogin, setKeepLogin] = useState<boolean>(false);

  const submitClick = () => {
    API.login(email, password).then((user) => {
      if (user) {
        setUser(user);
        setLogin(true);
        keepLogin && window.localStorage.setItem("email", email);
        history.push("/campaigns");
      }
    });
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={(event) => event.preventDefault()}
    >
      <header className={styles.header}>Welcome</header>

      <label htmlFor="email" className={styles.label}>
        Email:
        <input
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          className={styles.input}
          autoFocus={true}
        />
      </label>

      <label htmlFor="password" className={styles.label}>
        Password:
        <input
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          className={styles.input}
        />
      </label>

      <label
        className={styles.label + " text-xs flex items-center cursor-pointer"}
        htmlFor="keepLogin"
      >
        <input
          type="checkbox"
          id="keepLogin"
          onChange={(event) => setKeepLogin(event.target.checked)}
          className="mr-1"
        />
        Keep me signin
      </label>

      <button className={styles.submit} onClick={submitClick}>
        Login
      </button>
    </form>
  );
}
