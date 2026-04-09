import Image from "next/image";
import { Container } from "@/components/Container/Container";
import styles from "./AboutStrip.module.css";

export function AboutStrip() {
  return (
    <section className={styles.strip}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Image
              src="/logo-vertical.png"
              alt="HSE Solutions"
              width={240}
              height={240}
              className={styles.logoImg}
            />
          </div>
          <p className={styles.text}>
            Con más de 35 años de experiencia en gestión integral de riesgos,
            seguridad industrial, protección civil y sustentabilidad, HSE
            Solutions® se presenta como una firma especializada en transformar
            desafíos complejos en estrategias confiables y soluciones integrales,
            aplicando el rigor técnico y dando como resultado cambios en la
            cultura, fortalecimiento de la resiliencia organizacional y la
            confianza institucional.
          </p>
        </div>
      </Container>
    </section>
  );
}
