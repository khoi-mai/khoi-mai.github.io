"use client";
import ProjectsList from "../components/ProjectsList";

const compositingProjects = [
  {
    title: "Various projects",
    description: "Composited in Nuke, After Effects, Fusion, and Harmony",
    tags: ["Nuke", "VFX"],
    videoUrl: "https://player.vimeo.com/video/697168217",
  },
  {
    title: "Little Demon",
    description: "Composited in Harmony",
    tags: ["Harmony", "Color", "VFX"],
    videoUrl: "https://player.vimeo.com/video/1084766763",
  },
];

export default function CompositingPage() {
  return <ProjectsList projectList={compositingProjects} />;
}