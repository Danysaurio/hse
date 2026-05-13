import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./QuoteBlock.module.css";

type Props = {
  text: string;
  className?: string;
};

export function QuoteBlock({ text, className = "" }: Props) {
  return (
    <blockquote className={`${styles.quote} ${className}`}>
      <FontAwesomeIcon icon={faQuoteLeft} className={styles.iconLeft} />
      <p>{text}</p>
      <FontAwesomeIcon icon={faQuoteRight} className={styles.iconRight} />
    </blockquote>
  );
}
