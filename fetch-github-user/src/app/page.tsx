import Image from "next/image";
import { getUserInfo } from "../lib/getUserInfo";
import styles from "./page.module.css";
import { Octokit } from "octokit";

export default function Home() {
  function getUserByUsername() {}

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section>
          <h1>Buscar informações</h1>
          <form action="" method="get">
            <label htmlFor="iuser">Nome de Usuário:</label>
            <input type="text" name="user" id="iuser" />

            <input type="submit" value="Enviar" />
          </form>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
