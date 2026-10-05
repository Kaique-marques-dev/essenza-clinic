"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { procedures } from "@/data/procedures";
import styles from "./ProceduresSection.module.css";

export default function ProceduresSection() {
  const featured = procedures.find((item) => item.featured);
  const others = procedures.filter((item) => !item.featured);

  return (
    <section className={styles.section} id="procedimentos">
      <div className={styles.decorativeCircle} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.heading}>
            <span className={styles.eyebrow}>
              <span />
              Tratamentos
            </span>

            <h2>
              Cuidado pensado para
              <br />
              <em>cada detalhe.</em>
            </h2>
          </div>

          <div className={styles.headerText}>
            <span>03</span>

            <p>
              Cada procedimento é indicado após uma avaliação individual,
              levando em consideração seus objetivos, suas características e
              aquilo que realmente faz sentido para você.
            </p>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {featured && (
            <motion.article
              className={styles.featured}
              initial={{ opacity: 0, y: 45, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.featuredImage}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  quality={100}
                  sizes="(max-width: 1000px) 100vw, 55vw"
                  className={styles.image}
                />

                <div className={styles.featuredOverlay} />
                <div className={styles.featuredGlow} />
              </div>

              <div className={styles.featuredTop}>
                <span>01</span>
                <span>Procedimento em destaque</span>
              </div>

              <div className={styles.featuredContent}>
                <span className={styles.category}>{featured.category}</span>

                <h3>{featured.title}</h3>

                <p>{featured.description}</p>

                <motion.a
                  href="#agendamento"
                  className={styles.featuredLink}
                  whileHover="hover"
                >
                  <span>Conhecer tratamento</span>

                  <motion.span
                    className={styles.featuredArrow}
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
                    <ArrowUpRight size={18} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.article>
          )}

          <div className={styles.cards}>
            {others.map((procedure, index) => (
              <motion.article
                key={procedure.id}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={procedure.image}
                    alt={procedure.title}
                    fill
                    quality={95}
                    sizes="(max-width: 650px) 100vw, 25vw"
                    className={styles.image}
                  />

                  <div className={styles.cardOverlay} />
                </div>

                <div className={styles.cardNumber}>0{index + 2}</div>

                <div className={styles.cardContent}>
                  <span>{procedure.category}</span>

                  <h3>{procedure.title}</h3>

                  <p>{procedure.description}</p>

                  <a
                    href="#agendamento"
                    aria-label={`Conhecer ${procedure.title}`}
                    className={styles.cardButton}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          <p>Não sabe qual tratamento é indicado para você?</p>

          <a href="#agendamento">
            Agendar uma avaliação
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}