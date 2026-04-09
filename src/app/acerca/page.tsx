import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { Timeline } from "@/components/Timeline/Timeline";
import { ValueCard } from "@/components/ValueCard/ValueCard";
import { CredentialCard } from "@/components/CredentialCard/CredentialCard";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import {
  ROLES,
  SPECIALTIES,
  CREDENTIALS,
  AFFILIATIONS,
} from "@/data/acerca";
import styles from "./page.module.css";

export const metadata = {
  title: "Acerca de — HSE Solutions",
  description: "Mtro. Martín Conde Carreño — el experto detrás de HSE Solutions®",
};

export default function AcercaPage() {
  return (
    <>
      <PageHero
        eyebrow="Acerca de | HSE Solutions®"
        title="Acerca de | Mtro. Martín Conde Carreño"
      />

      <section className={styles.bio}>
        <Container>
          <div className={styles.bioGrid}>
            <div className={styles.imgWrap}>
              <Image
                src="/martin-conde.png"
                alt="Mtro. Martín Conde Carreño"
                fill
                sizes="(max-width: 900px) 90vw, 380px"
                className={styles.img}
              />
            </div>
            <div>
              <p className={styles.bioText}>
                <strong>Consultor, estratega y fundador de HSE Solutions®.</strong>{" "}
                Martín cuenta con una sólida trayectoria de más de tres décadas
                ocupando posiciones de alto nivel en las áreas de protección
                civil, medio ambiente y seguridad industrial.
              </p>
              <p className={styles.bioText}>
                Su enfoque integral combina liderazgo directivo, formación
                especializada y asesoría técnica, aportando a las empresas los
                protocolos necesarios para garantizar operaciones seguras y
                eficientes.
              </p>
              <h3 className={styles.timelineTitle}>Roles Clave</h3>
              <Timeline items={ROLES} />
            </div>
          </div>

          <blockquote className={styles.quote}>
            <p>
              Mi compromiso es transformar la gestión de riesgos en confianza
              institucional, integrando rigor técnico con visión estratégica para
              construir entornos más seguros y sustentables.
            </p>
          </blockquote>
        </Container>
      </section>

      <section className={styles.specialties}>
        <Container>
          <SectionTitle>Áreas de especialidad</SectionTitle>
          <div className={styles.specialtiesGrid}>
            {SPECIALTIES.map((s) => (
              <ValueCard key={s.title} title={s.title} items={s.items} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.credentials}>
        <Container>
          <SectionTitle>Credenciales Personales</SectionTitle>
          <div className={styles.credentialsGrid}>
            {CREDENTIALS.map((c, i) => (
              <CredentialCard key={i} icon={c.icon} logo={c.logo} description={c.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.affiliations}>
        <Container>
          <SectionTitle>Afiliaciones y Membresías</SectionTitle>
          <div className={styles.affiliationsGrid}>
            {AFFILIATIONS.map((a) => (
              <article key={a.label} className={styles.affCard}>
                <div className={styles.affLogo}>
                  <Image src={a.logo} alt={a.label} width={120} height={80} className={styles.affLogoImg} />
                </div>
                <div>
                  <h4>{a.label}</h4>
                  <p>{a.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title={
          <>
            La resiliencia de su organización comienza con la estrategia
            correcta.
          </>
        }
        description="Ponga más de 30 años de experiencia pericial y directiva a trabajar para su empresa. Conversemos sobre sus desafíos en HSE."
        ctaLabel="Solicitar asesoría"
        ctaHref="/contacto"
        bgImage="/edificio.jpg"
      />
    </>
  );
}
