"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { results } from "@/data/results";
import styles from "./ResultsSection.module.css";

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ResultsSection() {
  return (
    <section className={styles.section} id="resultados">
      <div className={styles.decorativeText}>RESULTADOS</div>

      <div className={styles.decorativeCircle} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={reveal}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.heading}>
            <div className={styles.eyebrow}>
              <span />
              Resultados
            </div>

            <h2>
              Mudanças sutis.
              <br />
              <em>Resultados que fazem sentido.</em>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <span className={styles.sectionNumber}>04</span>

            <p>
              Cada resultado é individual. Nossa proposta é valorizar
              características naturais e respeitar a identidade de cada
              paciente.
            </p>

            <div className={styles.headerLine} />
          </div>
        </motion.div>

        <div className={styles.grid}>
          {results.map((result, index) => (
            <motion.article
              key={result.id}
              className={`${styles.card} ${
                index === 0 ? styles.largeCard : ""
              }`}
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.975,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={result.image}
                  alt={`Antes e depois de ${result.title}`}
                  fill
                  quality={100}
                  sizes={
                    index === 0
                      ? "(max-width: 950px) 100vw, 55vw"
                      : "(max-width: 950px) 100vw, 35vw"
                  }
                  className={styles.image}
                />

                <div className={styles.overlay} />
                <div className={styles.softLight} />
              </div>

              <div className={styles.topInfo}>
                <span>0{index + 1}</span>

                <div className={styles.beforeAfter}>
                  <span>ANTES</span>
                  <div />
                  <span>DEPOIS</span>
                </div>
              </div>

              <div className={styles.content}>
                <span className={styles.label}>{result.eyebrow}</span>

                <h3>{result.title}</h3>

                <p>{result.description}</p>

                <motion.a
                  href="#agendamento"
                  className={styles.resultLink}
                  whileHover="hover"
                >
                  <span>Quero uma avaliação</span>

                  <motion.span
                    className={styles.arrow}
                    variants={{
                      hover: {
                        x: 5,
                        y: -5,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                    }}
                  >
                    <ArrowUpRight size={17} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.bottom}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
        >
          <div className={styles.disclaimer}>
            <span>*</span>

            <p>
              Cada organismo responde de maneira diferente aos procedimentos.
              Resultados, duração e evolução podem variar de pessoa para pessoa.
            </p>
          </div>

          <a href="#agendamento" className={styles.bottomCta}>
            Agendar avaliação
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}