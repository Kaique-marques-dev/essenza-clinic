"use client";

import { motion } from "motion/react";

import styles from "./TrustSection.module.css";

const stats = [
  {
    value: "+2.000",
    label: "Pacientes atendidos",
  },
  {
    value: "8 anos",
    label: "de experiência",
  },
  {
    value: "+15",
    label: "Tratamentos disponíveis",
  },
  {
    value: "4.9",
    label: "Avaliação dos pacientes",
  },
];

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={styles.number}>0{index + 1}</span>

              <strong>{item.value}</strong>

              <span className={styles.label}>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}