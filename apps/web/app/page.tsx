import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/marketing-lab-logo.png"
          alt="Marketing Lab"
          width={70}
          height={70}
          priority
        />
        <h1 className={styles.secondary}>Markting Lab</h1>
        <h3 className={styles.secondary}>Resultados com criatividade.</h3>
        <p className={styles.secondary}>🌟 Em Breve! 🌟</p>
        <p className={styles.secondary}>Estamos animados para anunciar que nosso site estará disponível em breve! A Marketing Lab está preparando um espaço onde você poderá explorar nossos serviços e descobrir como podemos ajudar sua marca a alcançar resultados incríveis.

Agradecemos pela sua paciência e apoio.</p>
        <p className={styles.secondary}>Fique atento para mais novidades e prepare-se para se conectar conosco!</p>
        <p className={styles.secondary}>Até já!</p>

        <h1 className={styles.secondary}>valtermiguelwork@gmail.com</h1>
        <h1 className={styles.secondary}>+244 943556523</h1>
      </main>
      <footer className={styles.footer}>
      <p className={styles.secondary}>2024 Marketing lab All Reserved rights</p>
      </footer>
    </div>
  );
}
