import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@/components/Container/Container";
import { Timeline } from "@/components/Timeline/Timeline";
import { ValueCard } from "@/components/ValueCard/ValueCard";
import { CredentialCard } from "@/components/CredentialCard/CredentialCard";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid/IndustriesGrid";
import { AcercaTabs } from "./AcercaTabs";
import {
  ROLES,
  SPECIALTIES,
  CREDENTIALS,
  AFFILIATIONS,
  COMPANY_PILLARS,
  COMPANY_VALUES,
  COMPANY_CREDENTIALS,
} from "@/data/acerca";
import { SITE } from "@/data/site";
import styles from "./page.module.css";

export const metadata = {
  title: "Acerca de — HSE Solutions",
  description: "HSE Solutions® y Mtro. Martín Conde Carreño.",
};

export default function AcercaPage() {
  return (
    <AcercaTabs
      initial="empresa"
      tabs={[
        {
          id: "empresa",
          label: "Acerca de | HSE Solutions®",
          content: <CompanyContent />,
        },
        {
          id: "martin",
          label: "Acerca de | Mtro. Martín Conde Carreño",
          content: <FounderContent />,
        },
      ]}
    />
  );
}

function CompanyContent() {
  return (
    <>
      <section className={styles.companyHero}>
        <div className={styles.companyHeroImage}>
          <Image
            src="/building.jpg"
            alt="HSE Solutions"
            fill
            priority
            sizes="100vw"
            className={styles.companyHeroImg}
          />
        </div>
        <div className={styles.companyHeroOverlay} />
        <Container>
          <div className={styles.companyHeroInner}>
            <Image
              src="/logo-vertical.png"
              alt="HSE Solutions"
              width={220}
              height={220}
              className={styles.companyLogo}
            />
            <h1 className={styles.companyTitle}>{SITE.tagline}</h1>
          </div>
        </Container>
      </section>

      <section className={styles.companyIntro}>
        <Container>
          <div className={styles.pillarsGrid}>
            <article className={styles.pillarCard}>
              <h2>Misión</h2>
              <p>{COMPANY_PILLARS.mission}</p>
            </article>
            <article className={styles.pillarCard}>
              <h2>Visión</h2>
              <p>{COMPANY_PILLARS.vision}</p>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.valuesSection}>
        <Container>
          <p className={styles.valuesEyebrow}>Nuestros Valores</p>
          <div className={styles.valuesGrid}>
            {COMPANY_VALUES.map((value) => (
              <article key={value.title} className={styles.valueItem}>
                <span className={styles.valueIcon}>
                  <FontAwesomeIcon icon={value.icon} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <IndustriesGrid />

      <section className={styles.methodology}>
        <Container>
          <div className={styles.methodologyText}>
            <h2>Nuestra Metodología</h2>
            <p>{COMPANY_PILLARS.methodology}</p>
          </div>

          <div className={styles.companyCredentials}>
            {COMPANY_CREDENTIALS.map((item) => (
              <article key={item.title} className={styles.companyCredentialCard}>
                <span className={styles.companyCredentialIcon}>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function FounderContent() {
  return (
    <>
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
            {SPECIALTIES.map((specialty) => (
              <ValueCard key={specialty.title} title={specialty.title} items={specialty.items} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.credentials}>
        <Container>
          <SectionTitle>Credenciales Personales</SectionTitle>
          <div className={styles.credentialsGrid}>
            {CREDENTIALS.map((credential, index) => (
              <CredentialCard
                key={index}
                icon={credential.icon}
                logo={credential.logo}
                logoWidth={credential.logoWidth}
                logoHeight={credential.logoHeight}
                description={credential.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.affiliations}>
        <Container>
          <SectionTitle>Afiliaciones y Membresías</SectionTitle>
          <div className={styles.affiliationsGrid}>
            {AFFILIATIONS.map((affiliation) => (
              <article key={affiliation.label} className={styles.affCard}>
                <div className={styles.affLogo}>
                  <Image
                    src={affiliation.logo}
                    alt={affiliation.label}
                    width={120}
                    height={80}
                    className={styles.affLogoImg}
                  />
                </div>
                <div>
                  <h4>{affiliation.label}</h4>
                  <p>{affiliation.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
