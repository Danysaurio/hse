import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./CredentialCard.module.css";

type Props = {
  icon: IconProp;
  logo?: string;
  description: string;
  logoWidth?: number;
  logoHeight?: number;
};

export function CredentialCard({ icon, logo, description, logoWidth = 220, logoHeight = 120 }: Props) {
  return (
    <article className={styles.card}>
      <div className={logo ? styles.logoWrap : styles.iconWrap}>
        {logo ? (
          <Image src={logo} alt="" width={logoWidth} height={logoHeight} className={styles.logoImg} />
        ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </div>
      <p className={styles.desc}>{description}</p>
    </article>
  );
}
