import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container/Container";
import { SITE } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo-negativo.png"
                alt="HSE Solutions"
                width={220}
                height={60}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.tagline}>{SITE.tagline}</p>
          </div>

          <div className={styles.col}>
            <ul className={styles.links}>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/acerca">Acerca de</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><a href="#top">Volver Arriba</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Información de contacto</h4>
            <ul className={styles.contact}>
              <li>{SITE.contact.name}</li>
              <li><a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></li>
              <li><a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a></li>
              <li><a href={`https://${SITE.contact.web}`} target="_blank" rel="noopener noreferrer">{SITE.contact.web}</a></li>
              <li>{SITE.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Link href="/privacidad">Aviso de Privacidad</Link>
            <Link href="/terminos">Términos y Condiciones</Link>
          </div>
          <div className={styles.copy}>
            {SITE.copyright}
          </div>
          <div className={styles.credits}>
            Diseñado por{" "}
            <a href="https://www.instagram.com/janetcondedesign/" target="_blank" rel="noopener noreferrer">
              Janet Conde
            </a>{" "}·{" "}
            Desarrollado por{" "}
            <a href="https://danizavala.com/" target="_blank" rel="noopener noreferrer">
              Daniel Zavala
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
