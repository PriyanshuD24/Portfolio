"use client";
import { Button } from "@/components/ui/button";
import { Projects } from "@/utils/constants";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import { Skills } from "@/utils/constants";
import ParaText from "@/components/ParaText";

import HeadingWrapper from "@/layouts/HeadingWrapper";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Find the project or return 404
  const param= use(params);
  const project = Projects.find(
    (p) => p.label.toLowerCase().replace(/\s+/g, "-") === param.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <HeadingWrapper heading={project.label}>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <ParaText className="text-lg">{project.shortDescription}</ParaText>
          </div>

          {/* Long Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-200">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.longDescription.map((point, idx) => (
                <li key={idx} className="flex gap-2 text-gray-300">
                  <span className="text-cyan-500 mt-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-200">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIdx) => {
                const skillInfo = Skills.find(
                  (skill) =>
                    skill.skillName.toLowerCase() === tech.toLowerCase()
                );
                return (
                  <div
                    key={techIdx}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${
                      skillInfo?.color || "text-gray-400"
                    } bg-gray-400/10 hover:bg-gray-400/20 transition-colors`}
                  >
                    {skillInfo?.icon && <skillInfo.icon className="text-lg" />}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {project.deployedLink && (
              <Link href={project.deployedLink} target="_blank">
                <Button size="lg" variant="secondary" className="gap-2">
                  <CiGlobe className="text-xl" />
                  View Live Demo
                </Button>
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink} target="_blank">
                <Button size="lg" variant="outline" className="gap-2">
                  <FaGithub className="text-lg" />
                  View Source Code
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Right Carousel */}
        <div className="lg:w-[600px] w-full bg-gray-400/5 rounded-xl p-4 border border-gray-400/10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            allowTouchMove={true}
            effect="slide"
            className="w-full h-full rounded-lg overflow-hidden"
          >
            {project.images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HeadingWrapper>
  );
}
