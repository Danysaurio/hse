"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../Container/Container";
import { NAV } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="HSE Solutions"
              width={180}
              height={48}
              priority
              className={styles.logoImg}
            />
          </Link>

          <nav className={styles.nav}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive(item.href) ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={styles.menuBtn}
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {open && (
          <div className={styles.overlay}>
            <div className={styles.overlayTop}>
              <FontAwesomeIcon icon={faBars} className={styles.overlayIcon} />
              <button
                className={styles.closeBtn}
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <nav className={styles.mobileNav}>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
