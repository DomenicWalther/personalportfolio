"use client";
import React from "react";
import styles from "./style.module.css";

interface IndexProps {
  index: number;
  title: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
  description: string;
  link: string;
}

const Index: React.FC<IndexProps> = ({
  index,
  title,
  setModal,
  description,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
};

export default Index;
