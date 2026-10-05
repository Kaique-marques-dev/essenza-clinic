"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

import styles from "./SpecialistSection.module.css";

const credentials = [
  "8 anos de experiência",
  "+2.000 pacientes atendidos",
  "Especialização em Harmonização Facial",
  "Atendimento personalizado",
];

export default function SpecialistSection() {
  return (
    <section className={styles.section} id="especialista">
      <div className={styles.decorativeCircle} />
      <div className={styles.decorativeText}>ESSENZA</div>

      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: -35, scale: 0.985 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/clinic/specialist.png"
              alt="Dra. Helena Duarte, especialista da Essenza"
              fill
              quality={100}
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.imageLabel}>
              <span>ESSENZA</span>
              <strong>Naturalidade em primeiro lugar.</strong>
            </div>
          </div>

          <motion.div
            className={styles.experienceCard}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >
            <span>+8</span>

            <p>
              anos de
              <br />
              <strong>experiência</strong>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            delay: 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.eyebrow}>
            <span />
            Especialista
          </div>

          <span className={styles.sectionNumber}>05</span>

          <h2>
            Dra. Helena
            <br />
            <em>Duarte.</em>
          </h2>

          <span className={styles.profession}>Biomédica Esteta</span>

          <p className={styles.lead}>
            “Meu objetivo é valorizar sua beleza sem tirar aquilo que faz você
            ser você.”
          </p>

          <p className={styles.description}>
            Cada atendimento começa com uma conversa cuidadosa. A avaliação
            considera proporções, características individuais e expectativas
            para construir um plano realmente personalizado, com segurança,
            equilíbrio e naturalidade.
          </p>

          <div className={styles.credentials}>
            {credentials.map((credential, index) => (
              <motion.div
                key={credential}
                className={styles.credential}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.16 + index * 0.07,
                }}
              >
                <span className={styles.check}>
                  <Check size={13} strokeWidth={2.2} />
                </span>

                <span>{credential}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#agendamento"
            className={styles.cta}
            whileHover="hover"
          >
            <span>Conhecer nossa abordagem</span>

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
              <ArrowUpRight size={18} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}