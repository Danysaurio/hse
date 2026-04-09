import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/Container/Container";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { Button } from "@/components/Button/Button";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { DETAILED_SERVICES, POLICY_BENEFITS } from "@/data/servicios";
import styles from "./page.module.css";

export const metadata = {
  title: "Servicios — HSE Solutions",
  description:
    "Capacitación, consultoría y auditoría en gestión integral de riesgos.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero title="Transformamos la complejidad normativa en ventajas competitivas para su industria." />

      <section className={styles.policy}>
        <Container>
          <div className={styles.policyHead}>
            <span className={styles.policyIcon}>
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>
            <h2>Póliza HSE Solutions®: Solución Integral</h2>
          </div>

          <div className={styles.policyGrid}>
            <div>
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
              </p>
              <ul className={styles.policyList}>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.chev} />
                  Diseño e implementación de Sistemas de Gestión Integrados o Específicos
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.chev} />
                  Evaluación y mejora de Sistemas de Gestión Integrados o Específicos
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.chev} />
                  Desarrollo de Programas de Seguridad y seguimiento de indicadores
                </li>
                <li>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.chev} />
                  Desarrollo de Programas de cumplimiento legal y seguimiento de indicadores
                </li>
              </ul>
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
            </aside>
          </div>

          <div className={styles.policyCta}>
            <Button href="/contacto" size="lg">
              Agendar Sesión de Diagnóstico
            </Button>
          </div>
        </Container>
      </section>

      <section className={styles.detailed}>
        <Container>
          <div className={styles.detailedGrid}>
            {DETAILED_SERVICES.map((s) => (
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
        bgImage="/reunion.jpg"
      />
    </>
  );
}
