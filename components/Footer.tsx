import { MapPin, MessageCircle } from "lucide-react";

import styles from "./Footer.module.css";

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <a href="#inicio" className={styles.logo}>
            <span>ESSENZA</span>
            <small>Estética & Harmonização</small>
          </a>

          <p>
            Cuidado, naturalidade e segurança em cada detalhe.
            Uma experiência pensada para valorizar quem você é.
          </p>
        </div>

        <div className={styles.column}>
          <span>Navegação</span>

          <a href="#inicio">Início</a>
          <a href="#procedimentos">Procedimentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#especialista">Especialista</a>
          <a href="#experiencia">Experiência</a>
          <a href="#duvidas">Dúvidas</a>
        </div>

        <div className={styles.column}>
          <span>Contato</span>

          <a
            href="https://wa.me/5531999999999"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={15} strokeWidth={1.8} />
            WhatsApp
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            @essenzaclinica
          </a>

          <p className={styles.address}>
            <MapPin size={15} strokeWidth={1.8} />
            Belo Horizonte — MG
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© 2026 Essenza Estética & Harmonização.</span>

        <span>Beleza com naturalidade.</span>
      </div>
    </footer>
  );
}