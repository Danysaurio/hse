import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import styles from "./IntegralBanner.module.css";

export function IntegralBanner() {
  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Más que un servicio, una solución integral
          </h2>
          <p className={styles.text}>
            Póliza HSE Solutions®: Diagnóstico, implementación y mejora continua
            en un sólo contrato.
          </p>
          <p className={styles.subtext}>
            La Póliza HSE Solutions® no es un servicio aislado, es un sistema
            integral de gestión de riesgos que acompaña a tu organización en
            cada etapa: diagnóstico, implementación, capacitación, auditoría y
            mejora continua.
          </p>
          <Button href="/servicios" size="lg">
            Conoce la Póliza HSE
          </Button>
        </div>
      </Container>
    </section>
  );
}
