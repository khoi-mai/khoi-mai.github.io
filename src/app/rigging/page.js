"use client";
import ProjectsList from "../components/ProjectsList";

const riggingProjects = [
  {
    title: "Personal project",
    description: "Character design, model, rig for thesis film",
    tags: ["Maya", "Rigging"],
    videoUrl: "https://player.vimeo.com/video/61555383",
  },
];

export default function RiggingPage() {
  return <ProjectsList projectList={RiggingProjects} />;
}