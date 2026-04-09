import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/building.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.bg}
        aria-hidden
      />
      <Container>
        <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Transformamos riesgos complejos en soluciones sustentables
            </h1>
            <p className={styles.subtitle}>
              Diseñamos estrategias claras, prácticas y verificables que
              protegen a tu equipo y optimizan tu operación.
            </p>
            <Button href="/servicios" size="lg">
              Encuentra el servicio ideal para tu empresa
            </Button>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
