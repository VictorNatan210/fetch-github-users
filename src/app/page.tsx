"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [input, setInput] = useState<string>('');
  const [user, setUser] = useState<any>(null);
 
  const request = async () => {
    try {
      const res = await fetch(`${window.location.origin}/api/github?username=${input}`);
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        const error = await res.json();
        console.error(error);
      }
    } catch (err) {
      console.error("Erro ao buscar usuário:", err);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section>
          <h1>Buscar informações</h1>
          <label>Nome de Usuário:</label>
          <input onChange={x => setInput(x.target.value)} type="text" />

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
