import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
};

type LinkBtn = CommonProps & { href: string; onClick?: never; type?: never };
type ActionBtn = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button(props: LinkBtn | ActionBtn) {
  const { variant = "primary", size = "md", children, className = "" } = props;
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={cls}
    >
      {children}
    </button>
  );
}
