import React, { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the coverage rate for your drones?",
    answer:
      "Our drones vary in coverage capacity: the S-H32 covers about 10 hectares per hour, the S-H40 covers approximately 16 hectares, the S-H120 around 23 hectares, and the S-H160 is capable of covering up to 30 hectares per hour efficiently.",
  },
  {
    question: "How far can the spray reach?",
    answer:
      "The drones are equipped with an adjustable pump system that enables a maximum spray reach of approximately 20 meters. The nozzles can be customized to provide either high-pressure atomization or fine misting depending on the crop type.",
  },
  {
    question: "What flight modes do your drones support?",
    answer:
      "Skytech drones support multiple flight modes including fully automated flights, AB point mode, and manual control. Routes can be recorded live, created on a map, or pre-defined using the RC, offering great flexibility in the field.",
  },
  {
    question: "What is the range and flight altitude?",
    answer:
      "Our drones have a standard control range of 1 kilometer, which can be extended up to 5 kilometers. For optimal spraying results, they typically operate at a height of 3 to 4 meters above the crops.",
  },
  {
    question: "Do drones support both spraying and spreading?",
    answer:
      "Yes, they do. The H32X and H40X models come with interchangeable tanks, while the H120 and H160 have a universal tank system that allows switching between spraying and spreading quickly and easily.",
  },
  {
    question: "Can I customize my drone?",
    answer:
      "Absolutely. We offer comprehensive customization options including changes to payload capacity, extended flight duration, and the addition of advanced sensors or application-specific hardware upon request.",
  },
  {
    question: "Is training provided for operation?",
    answer:
      "Yes, we provide extensive training resources. These include video tutorials, detailed manuals, and remote guidance from our technical team to ensure you operate your drone safely and efficiently.",
  },
  {
    question: "How do I order or request a quote?",
    answer:
      "Ordering is simple. You can request a sample or bulk order by sharing your requirements. Once confirmed, we provide an official quote, initiate production, and coordinate secure shipping to your location.",
  },
  {
    question: "What warranty is included?",
    answer:
      "All Skytech UAV products come with a 1-year standard warranty covering manufacturing defects. We also offer lifetime technical support to assist you with any operational or maintenance queries.",
  },
  {
    question: "Are safety systems like radar included?",
    answer:
      "Terrain-following and obstacle-avoidance radar systems are available as optional features. These are highly recommended for ensuring safe navigation, especially in fields with uneven terrain or obstructions.",
  },
  {
    question: "Do you offer custom branding?",
    answer:
      "Yes, we offer complete branding solutions including custom shell colors, logo printing, and ground control station branding. This helps maintain brand identity and professionalism in commercial applications.",
  },
  {
    question: "What are the payload and endurance specs of large drones?",
    answer:
      "Our heavy-lift drones like the S-H200 can carry up to 200 kg. The T-X491 has an endurance of about 120 minutes, while the T-X441 can fly for around 60 minutes depending on load and weather conditions.",
  },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 !== 0);

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#f7f9fc",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center" as const,
      fontSize: "2.5rem",
      color: "#1a237e",
      marginBottom: "30px",
    },
    columns: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap" as const,
    },
    column: {
      flex: 1,
      minWidth: "300px",
    },
    item: {
      marginBottom: "16px",
      padding: "16px",
      borderLeft: "4px solid #3f51b5",
      backgroundColor: "#fff",
      borderRadius: "8px",
      cursor: "pointer",
    },
    question: {
      fontSize: "1.2rem",
      fontWeight: 600,
      color: "#2c387e",
      marginBottom: "6px",
    },
    answerWrapper: {
      maxHeight: 0,
      overflow: "hidden",
      transition: "max-height 0.9s ease",
    },
    answerWrapperExpanded: {
      maxHeight: "500px", // max height to allow expansion
    },
    answer: {
      fontSize: "1rem",
      color: "#333",
      lineHeight: 1.6,
      marginTop: "6px",
    },
  };

  const renderColumn = (data: FAQItem[], startIndex: number) => (
    <div style={styles.column}>
      {data.map((item, idx) => {
        const actualIndex = startIndex + idx * 2;
        const isActive = activeIndex === actualIndex;
        return (
          <div
            key={actualIndex}
            style={styles.item}
            onClick={() => toggleAnswer(actualIndex)}
          >
            <h3 style={styles.question}>{item.question}</h3>
            <div
              style={{
                ...styles.answerWrapper,
                ...(isActive ? styles.answerWrapperExpanded : {}),
              }}
            >
              <p style={styles.answer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Frequently Asked Questions</h1>
      <div style={styles.columns}>
        {renderColumn(leftColumn, 0)}
        {renderColumn(rightColumn, 1)}
      </div>
    </div>
  );
};

export default FAQPage;
