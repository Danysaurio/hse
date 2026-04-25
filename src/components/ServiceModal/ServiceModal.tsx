"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/Button/Button";
import type { Showcase } from "@/data/showcase";
import styles from "./ServiceModal.module.css";

type Props = {
  data: Showcase;
  onClose: () => void;
};

const subscribe = () => () => {};

export function ServiceModal({ data, onClose }: Props) {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  const panelRef = useRef<HTMLDivElement>(null);
  const { modal } = data;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const focusable =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const panel = panelRef.current;
    if (!panel) return;

    const els = Array.from(panel.querySelectorAll<HTMLElement>(focusable));
    els[0]?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.root}>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.header}>
          <h2 id="modal-title" className={styles.title}>
            {data.title}
          </h2>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Cerrar"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.col}>
            <h3 className={styles.sectionHeading}>Objetivo</h3>
            <p className={styles.text}>{modal.objetivo}</p>
            <h3 className={styles.sectionHeading}>Modalidad</h3>
            <p className={styles.text}>{modal.modalidad}</p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.sectionHeading}>Componentes</h3>
            <ul className={styles.list}>
              {modal.componentes.map((item) => (
                <li key={item} className={styles.listItem}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.chevron}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className={styles.sectionHeading}>Beneficios institucionales</h3>
            <ul className={styles.list}>
              {modal.beneficios.map((item) => (
                <li key={item} className={styles.listItem}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className={styles.check}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <Button href="/contacto" size="md">
            Agendar Sesión Inicial
          </Button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
