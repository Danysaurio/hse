import type { Metadata } from "next";
import { SITE } from "@/data/site";
import HolaTypeform from "./HolaTypeform";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Hola — ${SITE.name}`,
  description: "Conéctate con HSE Solutions. Sincroniza tu agenda, solicita información o visita nuestro sitio oficial.",
};

export default function HolaPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Conectemos</h1>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>01 Sincronice su agenda</h2>
              <p className={styles.cardBody}>
                Mantenga asesoría especializada en seguridad industrial siempre disponible. Agregue a HSE Solutions a sus contactos.
              </p>
              <a
                href={`https://www.google.com/contacts/?hl=es`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Guardar contacto en mi agenda
              </a>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Solicita información</h2>
              <p className={styles.cardBody}>
                ¿Tiene alguna necesidad en materia de HSE? Déjenos sus datos llenando el formulario a continuación.
              </p>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Nuestro sitio Oficial</h2>
              <p className={styles.cardBody}>
                Explore y conozca nuestro catálogo de servicios y certificaciones.
              </p>
              <a
                href={`https://${SITE.contact.web}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                Visitar {SITE.contact.web}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <h2 className={styles.formHeading}>Conecta con {SITE.name}</h2>
          <p className={styles.formSubtitle}>
            Le agradecemos su interés en nuestros servicios profesionales. Por favor, compártanos sus datos para brindarle una atención personalizada.
          </p>
          <div className={styles.formWrapper}>
            <HolaTypeform />
          </div>
        </div>
      </section>
    </>
  );
}
