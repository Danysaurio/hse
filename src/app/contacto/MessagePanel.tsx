"use client";

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import styles from "./page.module.css";

type Status = "idle" | "sending" | "success" | "error";

export function MessagePanel() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <p className={styles.formSuccess}>
        ¡Mensaje enviado! Te responderemos en menos de 24 hrs.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Nombre</span>
        <input type="text" name="name" required placeholder="Tu nombre" />
      </label>
      <label>
        <span>Correo electrónico</span>
        <input type="email" name="email" required placeholder="tu@empresa.com" />
      </label>
      <label>
        <span>Asunto</span>
        <input type="text" name="subject" placeholder="¿En qué podemos ayudarte?" />
      </label>
      <label>
        <span>Mensaje</span>
        <textarea name="message" rows={5} required placeholder="Cuéntanos sobre tu proyecto…" />
      </label>
      {status === "error" && (
        <p className={styles.formError}>No se pudo enviar. Intenta de nuevo.</p>
      )}
      <Button type="submit" size="lg">
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
