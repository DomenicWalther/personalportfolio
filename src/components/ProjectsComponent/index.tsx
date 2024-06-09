"use client";

import styles from "./style.module.css";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";

const projects = [
  {
    title: "Foto-Studio Schwab",
    description: "Design & Development",
    src: "https://placehold.co/500x300",
    link: "https://www.fotoschwab.de",
    color: "#455CE9",
  },
  {
    title: "PhotoFlow",
    description: "Design & Development",
    src: "https://placehold.co/500x400",
    link: "https://photoflow.domenicwalther.de",
    color: "#455CE9",
  },
  {
    title: "DomenicWalther",
    description: "Design & Development",
    src: "https://placehold.co/500x500",
    link: "https://domenicwalther.de",
    color: "#455CE9",
  },
];

interface ModalState {
  active: boolean;
  index: number;
}

export default function ProjectsComponent() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              index={index}
              setModal={setModal}
              link={project.link}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
