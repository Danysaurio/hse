import styles from "./SectionTitle.module.css";

type Props = {
  children: React.ReactNode;
  align?: "left" | "center";
  uppercase?: boolean;
  as?: "h2" | "h3";
  className?: string;
};

export function SectionTitle({
  children,
  align = "center",
  uppercase = false,
  as: Tag = "h2",
  className = "",
}: Props) {
  return (
    <Tag
      className={`${styles.title} ${styles[align]} ${uppercase ? styles.uppercase : ""} ${className}`}
      style={{ fontSize: "1.8rem" }}
    >
      {children}
    </Tag>
  );
}
