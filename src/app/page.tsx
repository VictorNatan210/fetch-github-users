"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [user, setUser] = useState<any>(null);
 
  const request = async () => {
    const res = await fetch(`/api/github?username=${input}`);
    if(res.ok) {
      const data = await res.json();
      setUser(data);
    } else {
      console.error(await res.json());
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section>
          <h1>Buscar informações</h1>
          <label htmlFor="iuser">Nome de Usuário:</label>
          <input onChange={x => setInput(x.target.value)} type="text" name="user" id="iuser" />

          <input type="submit" onClick={request} value="Enviar" />
        </section>
        <section>
          {user && (
            <div>
              <h1>{user.name}</h1>
            </div>
          )}
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
