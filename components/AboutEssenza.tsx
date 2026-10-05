"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import styles from "./AboutEssenza.module.css";

export default function AboutEssenza() {
  return (
    <section className={styles.section} id="essenza">
      <div className={styles.decorativeCircle} />

      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.tag}>
            <span />
            A Essenza
          </div>

          <h2>
            Beleza não precisa
            <br />
            <em>transformar você.</em>
          </h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.contentNumber}>02</span>

          <p className={styles.lead}>
            Cada tratamento começa com uma avaliação individual, respeitando
            suas características, seus objetivos e aquilo que faz você ser
            única.
          </p>

          <div className={styles.divider} />

          <p className={styles.description}>
            Na Essenza, estética não é sobre seguir padrões. É sobre equilíbrio,
            segurança e escolhas cuidadosas para valorizar sua beleza de forma
            natural.
          </p>

          <motion.a
            href="#procedimentos"
            className={styles.link}
            whileHover="hover"
          >
            <span>Conhecer nossa abordagem</span>

            <motion.span
              variants={{
                hover: {
                  x: 4,
                  y: -4,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
            >
              <ArrowUpRight size={17} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}