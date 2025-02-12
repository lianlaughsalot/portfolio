import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Blind Minervating",
  slug: "blind-minervating",
  startDate: new Date("April 2019"),
  location: "San Francisco",
  skills: [
    {
      name: "Event planning",
      category: "events" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/blind-minervating/blind-minervating.png",
  bannerImage: "/images/projects/blind-minervating/blind-minervating.png",
};
