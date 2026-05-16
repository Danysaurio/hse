import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/Container/Container";
import { Tabs } from "@/components/Tabs/Tabs";
import { CalendlyWidget } from "@/components/CalendlyWidget/CalendlyWidget";
import { SITE } from "@/data/site";
import styles from "./page.module.css";
import HolaTypeform from "../hola/HolaTypeform";

export const metadata = {
  title: "Contacto — HSE Solutions",
  description: "Inicia tu Diagnóstico HSE. Cobertura nacional en México.",
};

export default function ContactoPage() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className={styles.title}>Inicia tu <br/> Diagnóstico HSE</h2>

            <ul className={styles.contact}>
              <li>
                <FontAwesomeIcon icon={faShieldHalved} />
                <span>HSE Solutions®</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} />
                <span>{SITE.contact.name}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} />
                <a href={`https://${SITE.contact.web}`} target="_blank" rel="noopener noreferrer">{SITE.contact.web}</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{SITE.contact.location}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Zona de servicio: Cobertura Nacional (México)</span>
              </li>
            </ul>

            <h2 className={styles.subtitle}>Tiempos de respuesta</h2>
            <ul className={styles.times}>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <span>Respuesta a dudas generales: 24 hrs</span>
              </li>
                  <strong>Por servicio:</strong>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <p>Capacitación técnica y normativa de 5 a 10 días hábiles</p>
                  <p className={styles.dim}>
                    Diseño del programa, validación temática y entrega de
                    materiales personalizados.
                  </p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <p>Consultoría especializada de 10 a 15 días hábiles</p>
                  <p className={styles.dim}>
                    Diagnóstico inicial, propuesta técnica y cronograma adaptado
                    al cliente.
                  </p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <p>Auditoría técnica y normativa de 15 a 20 días hábiles</p>
                  <p className={styles.dim}>
                    Planificación, ejecución en sitio o virtual, y entrega de
                    reporte ejecutivo.
                  </p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <p>Póliza HSE Solutions de 10 a 15 días hábiles (activación inicial)</p>
                  <p className={styles.dim}>
                    Incluye diagnóstico, planificación integral y entrega de
                    recursos estratégicos.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.panel}>
            <Tabs
              tabs={[
                {
                  id: "agendar",
                  label: "Agendar diagnóstico",
                  content: <SchedulePanel />,
                },
                {
                  id: "mensaje",
                  label: "Enviar un mensaje",
                  content: <HolaTypeform />,
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SchedulePanel() {
  return (
    <div className={styles.calendar}>
      <CalendlyWidget />
    </div>
  );
}

