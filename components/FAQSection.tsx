"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

import styles from "./FAQSection.module.css";

const questions = [
  {
    question: "Os procedimentos doem?",
    answer:
      "A sensibilidade varia de pessoa para pessoa e também depende do procedimento. Sempre buscamos tornar a experiência o mais confortável possível e explicamos previamente cada etapa.",
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer:
      "A duração varia conforme o procedimento, características individuais e rotina de cuidados. Na avaliação, explicamos o tempo médio esperado para cada caso.",
  },
  {
    question: "Existe tempo de recuperação?",
    answer:
      "Alguns procedimentos permitem retorno rápido à rotina, enquanto outros podem apresentar inchaço, vermelhidão ou sensibilidade temporária. As orientações são passadas individualmente.",
  },
  {
    question: "Como saber qual tratamento é indicado para mim?",
    answer:
      "A indicação é feita após uma avaliação individual. Consideramos seus objetivos, características faciais, histórico e expectativas antes de sugerir qualquer tratamento.",
  },
  {
    question: "Preciso fazer uma avaliação antes?",
    answer:
      "Sim. A avaliação é uma etapa importante para entender o que você busca e construir um planejamento seguro, personalizado e coerente com suas características.",
  },
  {
    question: "Os resultados são imediatos?",
    answer:
      "Depende do procedimento. Alguns resultados podem ser percebidos logo após o atendimento, enquanto outros evoluem progressivamente ao longo de dias ou semanas.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleQuestion(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className={styles.section} id="duvidas">
      <div className={styles.decorativeText}>DÚVIDAS</div>

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
              Dúvidas frequentes
            </div>

            <h2>
              Informação também
              <br />
              faz parte do <em>cuidado.</em>
            </h2>
          </div>

          <div className={styles.headerText}>
            <span>08</span>

            <p>
              Reunimos algumas das dúvidas mais comuns para deixar sua decisão
              mais tranquila e segura.
            </p>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.sideMessage}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>ESSENZA</span>

            <h3>
              Clareza antes de
              <br />
              qualquer decisão.
            </h3>

            <p>
              Nenhum procedimento deve começar sem orientação. Nosso papel é
              explicar possibilidades, limites e cuidados de forma transparente.
            </p>

            <div className={styles.smallLine} />
          </motion.div>

          <div className={styles.questions}>
            {questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  className={styles.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                >
                  <button
                    type="button"
                    className={styles.questionButton}
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.questionTitle}>
                      <span>0{index + 1}</span>
                      <h4>{item.question}</h4>
                    </div>

                    <motion.span
                      className={styles.icon}
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <Plus size={19} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className={styles.answerWrapper}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className={styles.answer}>
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}