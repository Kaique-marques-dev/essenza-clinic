"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

import styles from "./ClinicExperience.module.css";

const highlights = [
  {
    icon: Sparkles,
    title: "Ambiente pensado nos detalhes",
    description:
      "Uma experiência leve, acolhedora e elegante desde o primeiro contato.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança em cada etapa",
    description:
      "Protocolos cuidadosos, avaliação individual e acompanhamento próximo.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    description:
      "Cada pessoa é recebida de forma única, com atenção aos objetivos e expectativas.",
  },
];

export default function ClinicExperience() {
  return (
    <section className={styles.section} id="experiencia">
      <div className={styles.decorativeText}>EXPERIÊNCIA</div>

      <div className={`container ${styles.container}`}>
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
            <div className={styles.eyebrow}>
              <span />
              Experiência Essenza
            </div>

            <h2>
              Cada detalhe pensado
              <br />
              <em>para você se sentir bem.</em>
            </h2>
          </div>

          <div className={styles.headerText}>
            <span>06</span>

            <p>
              Mais do que procedimentos, queremos oferecer uma experiência
              tranquila, confortável e segura em cada etapa do atendimento.
            </p>
          </div>
        </motion.div>

        <div className={styles.layout}>
          <motion.div
            className={styles.videoCard}
            initial={{ opacity: 0, y: 45, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <video
              className={styles.video}
              src="/video/clinic-experience.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div className={styles.videoOverlay} />

            <div className={styles.videoTop}>
              <span>ESSENZA</span>
              <span>Ambiente & cuidado</span>
            </div>

            <div className={styles.videoContent}>
              <span>Experiência Essenza</span>

              <h3>
                Um espaço pensado para
                <br />
                <em>cuidar de você.</em>
              </h3>
            </div>
          </motion.div>

          <div className={styles.side}>
            <div className={styles.images}>
              <motion.div
                className={styles.imageCard}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/images/clinic/experience-1.png"
                  alt="Ambiente confortável da clínica Essenza"
                  fill
                  quality={100}
                  sizes="(max-width: 900px) 100vw, 30vw"
                  className={styles.image}
                />

                <div className={styles.imageOverlay} />

                <span className={styles.imageLabel}>Conforto</span>
              </motion.div>

              <motion.div
                className={styles.imageCard}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/images/clinic/experience-2.png"
                  alt="Detalhes da clínica Essenza"
                  fill
                  quality={100}
                  sizes="(max-width: 900px) 100vw, 30vw"
                  className={styles.image}
                />

                <div className={styles.imageOverlay} />

                <span className={styles.imageLabel}>Cuidado</span>
              </motion.div>
            </div>

            <motion.div
              className={styles.info}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.highlights}>
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      className={styles.highlight}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.22 + index * 0.08,
                      }}
                    >
                      <div className={styles.icon}>
                        <Icon size={17} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.a
                href="#agendamento"
                className={styles.cta}
                whileHover="hover"
              >
                <span>Agendar minha avaliação</span>

                <motion.span
                  className={styles.ctaArrow}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}