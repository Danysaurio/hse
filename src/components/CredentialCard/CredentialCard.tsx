import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./CredentialCard.module.css";

type Props = {
  icon: IconProp;
  logo?: string;
  description: string;
};

export function CredentialCard({ icon, logo, description }: Props) {
  return (
    <article className={styles.card}>
      <div className={logo ? styles.logoWrap : styles.iconWrap}>
        {logo ? (
          <Image src={logo} alt="" width={120} height={80} className={styles.logoImg} />
        ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </div>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}
