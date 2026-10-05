"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="agendamento">
      <div className={styles.glow} />

      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.eyebrow}>
            <span />
            Sua jornada começa aqui
          </div>

          <h2>
            Sua melhor versão começa
            <br />
            com uma <em>boa avaliação.</em>
          </h2>

          <p>
            Converse com nossa equipe e descubra quais tratamentos fazem sentido
            para seus objetivos, sempre com segurança, equilíbrio e naturalidade.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <a href="#procedimentos" className={styles.secondaryButton}>
              Ver tratamentos
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.side}
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.number}>09</span>

          <div className={styles.sideContent}>
            <span>ESSENZA</span>

            <strong>
              Estética, cuidado
              <br />
              e naturalidade.
            </strong>
          </div>

          <div className={styles.line} />
        </motion.div>
      </div>
    </section>
  );
}