"use client";
import ProjectsList from "../components/ProjectsList";

const lightingProjects = [
  {
    title: "Interior Lighting",
    description: "Mood lighting and color grading for interiors",
    tags: ["Arnold", "Maya", "Lighting"],
    videoUrl: "https://player.vimeo.com/video/234567890",
  },
  {
    title: "Outdoor Scene",
    description: "HDRI and sunlight lighting setup",
    tags: ["Arnold", "Lighting", "VFX"],
    videoUrl: "https://player.vimeo.com/video/345678901",
  },
];

export default function LightingPage() {
  return <ProjectsList projectList={lightingProjects} />;
}