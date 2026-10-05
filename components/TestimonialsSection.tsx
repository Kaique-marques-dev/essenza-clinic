"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    name: "Mariana R.",
    procedure: "Harmonização Facial",
    text: "Desde a primeira avaliação me senti muito segura. Tudo foi explicado com calma e o resultado ficou extremamente natural.",
  },
  {
    id: 2,
    name: "Camila S.",
    procedure: "Preenchimento Labial",
    text: "Eu queria algo delicado e foi exatamente isso que consegui. O atendimento foi cuidadoso do início ao fim.",
  },
  {
    id: 3,
    name: "Fernanda M.",
    procedure: "Toxina Botulínica",
    text: "Gostei muito da atenção aos detalhes. O resultado ficou leve, sem perder minha expressão e sem exageros.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  function previous() {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.decorativeText}>HISTÓRIAS</div>

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
              Depoimentos
            </div>

            <h2>
              Experiências que
              <br />
              <em>falam por si.</em>
            </h2>
          </div>

          <div className={styles.headerText}>
            <span>07</span>

            <p>
              Mais do que resultados, valorizamos a confiança construída em
              cada atendimento.
            </p>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.quoteSide}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.quoteIcon}>
              <Quote size={26} strokeWidth={1.5} />
            </div>

            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} fill="currentColor" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                className={styles.testimonial}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p>“{testimonial.text}”</p>

                <div className={styles.person}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.procedure}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.navigation}>
              <button
                type="button"
                onClick={previous}
                aria-label="Depoimento anterior"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próximo depoimento"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            className={styles.sidePanel}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={styles.panelNumber}>
              0{current + 1}
            </span>

            <div className={styles.panelContent}>
              <span>Confiança</span>

              <h3>
                Atendimento com
                <br />
                escuta e cuidado.
              </h3>

              <p>
                Cada experiência começa com uma conversa. Entender expectativas
                e orientar com clareza faz parte do nosso processo.
              </p>
            </div>

            <div className={styles.indicators}>
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Abrir depoimento ${index + 1}`}
                  className={
                    index === current
                      ? styles.activeIndicator
                      : ""
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}