import { Container } from "@/components/Container/Container";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ShowcaseGridClient } from "./ShowcaseGridClient";
import { SHOWCASE } from "@/data/showcase";
import styles from "./ShowcaseGrid.module.css";

export function ShowcaseGrid() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle uppercase>Nuestros Servicios</SectionTitle>
        <ShowcaseGridClient items={SHOWCASE} />
      </Container>
    </section>
  );
}
