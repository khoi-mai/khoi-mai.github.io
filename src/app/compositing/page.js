"use client";
import ProjectsList from "../components/ProjectsList";

const compositingProjects = [
  {
    title: "Various projects",
    description: "2D, 3D, Live action",
    tags: ["Nuke", "After Effects", "Fusion", "Harmony"],
    videoUrl: "https://player.vimeo.com/video/697168217",
  },
  {
    title: "Little Demon",
    description: "2D",
    tags: ["Harmony"],
    videoUrl: "https://player.vimeo.com/video/1084766763",
  },
];

export default function CompositingPage() {
  return <ProjectsList projectList={CompositingProjects || []} />;
}