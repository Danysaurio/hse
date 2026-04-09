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
import { Button } from "@/components/Button/Button";
import { SITE } from "@/data/site";
import styles from "./page.module.css";

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
            <h1 className={styles.title}>Inicia tu Diagnóstico HSE</h1>

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
                <span>{SITE.contact.email}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>{SITE.contact.phone}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} />
                <span>{SITE.contact.web}</span>
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
              <li>
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <strong>Por servicio:</strong>
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
                  content: <MessagePanel />,
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
      <div className={styles.calHead}>
        <p className={styles.calName}>Demo Call</p>
        <p className={styles.calMeta}>30 min — Diagnóstico inicial sin costo</p>
      </div>
      <p className={styles.calBody}>
        Un miembro de nuestro equipo te guiará por la propuesta y resolverá tus
        dudas técnicas.
      </p>
      <div className={styles.placeholder}>
        <p>Selecciona una fecha y hora</p>
        <p className={styles.dim}>(Integración con Calendly próximamente)</p>
      </div>
      <Button href="mailto:martin.condeca@yahoo.com" size="lg">
        Solicitar diagnóstico por correo
      </Button>
    </div>
  );
}

function MessagePanel() {
  return (
    <form className={styles.form} action="mailto:martin.condeca@yahoo.com">
      <label>
        <span>Nombre</span>
        <input type="text" name="name" required placeholder="Tu nombre" />
      </label>
      <label>
        <span>Correo electrónico</span>
        <input type="email" name="email" required placeholder="tu@empresa.com" />
      </label>
      <label>
        <span>Asunto</span>
        <input type="text" name="subject" placeholder="¿En qué podemos ayudarte?" />
      </label>
      <label>
        <span>Mensaje</span>
        <textarea name="message" rows={5} required placeholder="Cuéntanos sobre tu proyecto…" />
      </label>
      <Button type="submit" size="lg">
        Enviar mensaje
      </Button>
    </form>
  );
}
