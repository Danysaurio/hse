import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import styles from "./MartinBio.module.css";

export function MartinBio() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imgWrap}>
            <Image
              src="/MCC-sq.png"
              alt="Mtro. Martín Conde Carreño"
              fill
              sizes="(max-width: 900px) 90vw, 380px"
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.name}>Mtro. Martín Conde Carreño</h2>
            <p className={styles.role}>El experto detrás de HSE Solutions®</p>
            <p className={styles.bio}>
              Martín Conde es <strong>consultor, formador y estratega</strong>{" "}
              especializado en gestión integral de riesgos, seguridad industrial,
              protección civil y sustentabilidad. Con una trayectoria
              consolidada y visión interdisciplinaria, ha transformado
              protocolos técnicos en soluciones prácticas y visuales de alto
              impacto.
            </p>
            <p className={styles.bio}>
              Como <strong>fundador de HSE Solutions®</strong>, integra
              experiencia pericial, pensamiento estratégico y comunicación
              persuasiva para acompañar a las organizaciones en la construcción
              de entornos más seguros, resilientes y sustentables.
            </p>
            <div className={styles.cta}>
              <Button href="/acerca?tab=martin">Conocer más</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
