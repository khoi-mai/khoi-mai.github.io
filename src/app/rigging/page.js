"use client";
import ProjectsList from "../components/ProjectsList";

const riggingProjects = [
  {
    title: "Character Rig",
    description: "Full character rig in Maya for animation production",
    tags: ["Maya", "Rigging"],
    videoUrl: "https://player.vimeo.com/video/123456789",
  },
  {
    title: "Mechanical Rig",
    description: "Mechanical rig with IK/FK switching",
    tags: ["Maya", "Rigging", "Automation"],
    videoUrl: "https://player.vimeo.com/video/987654321",
  },
];

export default function RiggingPage() {
  return <ProjectsList projectList={riggingProjects} />;
}