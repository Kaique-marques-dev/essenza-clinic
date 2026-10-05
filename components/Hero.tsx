"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.eyebrow}>
            <span />
            Estética & Harmonização
          </div>

          <h1>
            Estética que respeita
            <br />
            <span>quem você é.</span>
          </h1>

          <p className={styles.description}>
            Tratamentos personalizados para valorizar sua beleza com
            equilíbrio, segurança e naturalidade.
          </p>

          <div className={styles.actions}>
            <a href="#agendamento" className={styles.primaryButton}>
              Agendar minha avaliação
              <ArrowUpRight size={18} />
            </a>

            <a href="#procedimentos" className={styles.secondaryButton}>
              Conhecer tratamentos
            </a>
          </div>

          <div className={styles.details}>
            <div>
              <strong>Atendimento</strong>
              <span>Personalizado</span>
            </div>

            <div>
              <strong>Resultados</strong>
              <span>Naturais</span>
            </div>

            <div>
              <strong>Cuidado</strong>
              <span>Em cada detalhe</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.imagePlaceholder}>
            <Image
              src="/images/hero/hero-clinic.png"
              alt="Profissional da Essenza Estética e Harmonização"
              fill
              priority
              quality={100}
              sizes="(max-width: 850px) 100vw, 50vw"
              className={styles.heroImage}
            />

            <div className={styles.imageOverlay} />
            <div className={styles.softGlow} />
            <div className={styles.circle} />
          </div>

          <div className={styles.floatingCard}>
            <span>01</span>

            <p>
              Beleza com
              <br />
              <strong>naturalidade.</strong>
            </p>
          </div>
        </motion.div>
      </div>

      <a className={styles.scroll} href="#procedimentos">
        <ArrowDown size={15} />
        Descubra a Essenza
      </a>
    </section>
  );
}