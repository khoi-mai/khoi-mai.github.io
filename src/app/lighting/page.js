"use client";
import ProjectsList from "../components/ProjectsList";

const lightingProjects = [
  {
    title: "Various Barbie projects",
    description: "Lighting, Rendering, and Compositing in Katana and Nuke",
    tags: ["Maya", "Arnold", "Lighting"],
    videoUrl: "https://player.vimeo.com/video/875762647",
  },
];

export default function LightingPage() {
  return <ProjectsList projectList={lightingProjects || []} />;
}