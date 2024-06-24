"use client";

import "@/app/projects/styles.css"; // Import the stylesheet
import React from "react";
import { metadata } from "./metadata";

import { useRouter } from "next/navigation";

import ProjectHeader from "@/components/ProjectHeader";

const ProjectContent = () => {
  const router = useRouter();

  return (
    <div>
      <ProjectHeader metadata={metadata} />
      <section className="project-section">
        <p>
          This piece came out of the intersection of my love for whale sharks
          and Seoul city lights, and my fascination with networks. Presented on
          a starry night at ArtCon 2019 as a projection.
        </p>
      </section>
    </div>
  );
};

export default ProjectContent;
