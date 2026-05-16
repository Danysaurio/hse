import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { DETAILED_SERVICES, POLICY_BENEFITS } from "@/data/servicios";
import { SHOWCASE } from "@/data/showcase";
import { FichaTecnicaBtn } from "./FichaTecnicaBtn";
import styles from "./page.module.css";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

export const metadata = {
  title: "Servicios — HSE Solutions",
  description:
    "Capacitación, consultoría y auditoría en gestión integral de riesgos.",
};

export default function ServiciosPage() {
  return (
    <>
      <Container className={styles.heroContainer}>
        <SectionTitle align="center">Transformamos la complejidad normativa en <br /> ventajas competitivas para su industria.</SectionTitle>
      </Container>
      <section className={styles.policy}>
        <Container>
          <div className={styles.policyGrid}>
            <div className={styles.policyLeft}>
              <div className={styles.policyHead}>
                <Image
                  src="/icono.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.policyIcon}
                />
                <h3 className={styles.policyTitle}>Póliza HSE Solutions®: Solución Integral</h3>
              </div>
              <p className={styles.policyLead}>
                Tu aliado permanente en <strong>gestión integral</strong>. La
                Póliza HSE Solutions® acompaña a tu empresa desde el diagnóstico
                inicial hasta la mejora continua.
              </p>
              <p className={styles.policyBody}>
                <strong>Incluye</strong> auditorías, reportes ejecutivos, planes
                de acción estratégicos, documentación clave, entrenamiento
                especializado y sistemas de gestión con indicadores de
                desempeño. Un servicio integral que garantiza resiliencia,
                cumplimiento y sustentabilidad.
                <FichaTecnicaBtn label="Conocer detalles" className={styles.policyBtn} showcase={SHOWCASE[3]} />
              </p>
              <Image
                src="/escritoriocut.png"
                alt="Equipo HSE Solutions"
                width={1072}
                height={2581}
                className={styles.policyImg}
              />
            </div>

            <aside className={styles.benefits}>
              <h3>¿Por qué elegirla?</h3>
              <ul>
                {POLICY_BENEFITS.map((b) => (
                  <li key={b.title}>
                    <FontAwesomeIcon icon={faChevronRight} className={styles.chev} />
                    <span>
                      <strong>{b.title}</strong> {b.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <div className={styles.policyCta}>
                <Button href="/contacto" size="sm">
                  Agendar Sesión de Diagnóstico
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className={styles.detailed}>
        <Container>
          <div className={styles.detailedGrid}>
            {DETAILED_SERVICES.map((s, i) => (
              <article key={s.title} className={styles.dCard}>
                <div className={styles.dIcon}>
                  <FontAwesomeIcon icon={s.icon} />
                </div>
                <h3 className={styles.dTitle}>{s.title}</h3>
                <p className={styles.dBody}>
                  <strong>{s.lead}</strong> {s.body}
                </p>
                <p className={styles.dItemsLabel}>{s.itemsLabel}</p>
                <ul className={styles.dItems}>
                  {s.items.map((it) => (
                    <li key={it}>
                      <FontAwesomeIcon icon={faChevronRight} className={styles.chev} />
                      {it}
                    </li>
                  ))}
                </ul>
                <FichaTecnicaBtn showcase={SHOWCASE[i]} />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title={
          <>
            Conozca <strong>con exactitud</strong> el nivel de cumplimiento
            normativo y protección que <strong>requiere</strong> su instalación.
            Hablemos.
          </>
        }
        ctaLabel="Agendar Sesión Diagnóstico"
        ctaHref="/contacto"
        bgImage="/poliza-hse-1.jpg"
        bgPosition="center 60%"
      />
    </>
  );
}
