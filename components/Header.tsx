"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="#" className={styles.logo}>
          <span>ESSENZA</span>
          <small>Estética & Harmonização</small>
        </a>

        <nav className={styles.desktopNav}>
          <a href="#inicio">Início</a>
          <a href="#procedimentos">Procedimentos</a>
          <a href="#essenza">A Essenza</a>
          <a href="#resultados">Resultados</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <a href="#agendamento" className={styles.cta}>
          Agendar avaliação
          <ArrowUpRight size={17} />
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Início
          </a>

          <a href="#procedimentos" onClick={() => setMenuOpen(false)}>
            Procedimentos
          </a>

          <a href="#essenza" onClick={() => setMenuOpen(false)}>
            A Essenza
          </a>

          <a href="#resultados" onClick={() => setMenuOpen(false)}>
            Resultados
          </a>

          <a href="#duvidas" onClick={() => setMenuOpen(false)}>
            Dúvidas
          </a>
        </nav>
      )}
    </header>
  );
}