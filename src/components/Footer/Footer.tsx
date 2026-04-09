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
              <li>{SITE.contact.email}</li>
              <li>{SITE.contact.phone}</li>
              <li>{SITE.contact.web}</li>
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
            {SITE.copyright} | {SITE.designedBy}
          </div>
        </div>
      </Container>
    </footer>
  );
}
