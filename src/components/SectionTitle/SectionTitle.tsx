import styles from "./SectionTitle.module.css";

type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
  uppercase?: boolean;
  as?: "h2" | "h3";
};

export function SectionTitle({
  children,
  align = "center",
  uppercase = false,
  as: Tag = "h2",
}: Props) {
  return (
    <Tag
      className={`${styles.title} ${styles[align]} ${uppercase ? styles.uppercase : ""}`}
    >
      {children}
    </Tag>
  );
}
