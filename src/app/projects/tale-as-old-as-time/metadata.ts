import { SkillCategory } from "@/constants/skillColours";
import { ProjectMetadata } from "@/types/projects";

export const metadata: ProjectMetadata = {
  title: "Tale As Old As Time",
  slug: "tale-as-old-as-time",
  startDate: new Date("June 2017"),
  role: "Illustrator",
  skills: [
    {
      name: "illustrator",
      category: "creative" as SkillCategory,
    },
  ],
  imageSrc: "/images/projects/tale-as-old-as-time/taleasoldastime.png",
  bannerImage: "/images/projects/tale-as-old-as-time/taleasoldastime.png",
};
