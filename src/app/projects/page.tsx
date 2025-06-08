"use client";
import HeadingWrapper from "@/layouts/HeadingWrapper";
import React, { useState } from "react";
import { Projects, Skills } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ParaText from "@/components/ParaText";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const ProjectPage = () => {
  const [menu, setMenu] = useState("All");
  return (
    <HeadingWrapper heading={"Projects"}>
      <div className="space-y-8">
        {/* Filter Menu */}
        <div className="flex gap-2">
          {["All", "Personal", "Professional"].map((item) => (
            <Button
              key={item}
              variant={menu === item ? "secondary" : "ghost"}
              className=""
              onClick={() => setMenu(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.filter((v) =>
            menu == "Personal"
              ? v.isPersonal
              : menu == "Professional"
              ? !v.isPersonal
              : true
          ).map((project) => (
            <Link
              href={`/projects/${project.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={project.label}
            >
              <div
                key={project.label}
                className="group bg-gray-400/5 hover:bg-gray-400/10 rounded-lg border border-gray-400/10 hover:border-cyan-500/20 overflow-hidden transition-all cursor-pointer h-full "
              >
                {/* Project Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.bannerImg.src}
                    alt={project.bannerImg.alt}
                    className="object-top group-hover:scale-105 transition-all duration-500"
                    fill
                    // loading="lazy"
                  />
                </div>

                {/* Project Info */}
                <div className="p-4 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-200">
                    {project.label}
                  </h3>
                  <div>
                    <ParaText>{project.shortDescription}</ParaText>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIdx) => {
                      const skillInfo = Skills.find(
                        (skill) =>
                          skill.skillName.toLowerCase() === tech.toLowerCase()
                      );
                      return (
                        <div
                          key={techIdx}
                          className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-sm ${
                            skillInfo?.color || "text-gray-400"
                          } bg-gray-400/10`}
                        >
                          {skillInfo?.icon && (
                            <skillInfo.icon className="text-base" />
                          )}
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2 z-20">
                    {project.deployedLink && (
                      <Button
                        variant="secondary"
                        className="gap-2 z-20"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.deployedLink, "_blank");
                        }}
                      >
                        <CiGlobe className="text-lg" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.githubLink, "_blank");
                        }}
                      >
                        <FaGithub />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </HeadingWrapper>
  );
};

export default ProjectPage;
