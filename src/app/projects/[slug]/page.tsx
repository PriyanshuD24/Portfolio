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

import { 
  Code2, 
  Layers, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowLeft,
  Briefcase
} from "lucide-react";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Find the project or return 404
  const param = use(params);
  const project = Projects.find(
    (p) => p.label.toLowerCase().replace(/\s+/g, "-") === param.slug
  );

  if (!project) {
    notFound();
  }

  // Feature icons mapping helper
  const featureIcons = [Zap, Cpu, Layers, CheckCircle2];

  return (
    <HeadingWrapper heading={project.label}>
      <div className="space-y-6">
        {/* Back Link */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-xs md:text-sm text-cyan-400 hover:text-cyan-300 transition-colors group font-medium"
        >
          <ArrowLeft className="size-3.5 md:size-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Info (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Description Block */}
            <div className="border-l-4 border-cyan-500/80 pl-4 py-2 bg-cyan-500/5 rounded-r-xl">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                {project.shortDescription}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-100 flex items-center gap-2">
                <Briefcase className="size-5 text-cyan-400" />
                Key Features & Contribution
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {project.longDescription.map((point, idx) => {
                  const IconComponent = featureIcons[idx % featureIcons.length];
                  return (
                    <div 
                      key={idx} 
                      className="group bg-gray-400/5 hover:bg-gray-400/10 border border-gray-400/10 hover:border-cyan-500/30 transition-all duration-300 rounded-xl p-4 md:p-5 flex items-start gap-4 shadow-xs"
                    >
                      <div className="bg-cyan-500/10 text-cyan-400 rounded-lg p-2 size-10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                        <IconComponent className="size-5" />
                      </div>
                      <ParaText className="text-gray-300 leading-relaxed pt-1">
                        {point}
                      </ParaText>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons (Visible for Mobile/Tablet) */}
            <div className="flex flex-wrap gap-4 pt-4 lg:hidden">
              {project.deployedLink && (
                <Link href={project.deployedLink} target="_blank" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all cursor-pointer">
                    <CiGlobe className="text-xl" />
                    View Live Demo
                  </Button>
                </Link>
              )}
              {project.githubLink && (
                <Link href={project.githubLink} target="_blank" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full gap-2 border-gray-400/20 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-gray-300 hover:text-cyan-400 font-medium transition-all cursor-pointer">
                    <FaGithub className="text-lg" />
                    View Source Code
                  </Button>
                </Link>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Browser Frame & Tech Stack (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* macOS Browser Mockup Container */}
            <div className="w-full rounded-xl overflow-hidden bg-[#1E1E1F] border border-gray-400/10 shadow-lg group hover:border-cyan-500/20 transition-all duration-300">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-400/10 border-b border-gray-400/10 select-none">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="bg-[#121212]/50 text-[10px] text-gray-400 px-4 py-1 rounded-md max-w-[220px] w-full text-center truncate border border-gray-400/5 font-mono">
                  {project.deployedLink ? project.deployedLink.replace("https://", "") : `${project.label.toLowerCase().replace(/\s+/g, "-")}.dev`}
                </div>
                <div className="w-12 shrink-0"></div> {/* spacer */}
              </div>

              {/* Swiper Carousel */}
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[260px] xl:h-[300px] w-full relative overflow-hidden bg-[#121212]">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={project.images.length > 1}
                  speed={800}
                  allowTouchMove={true}
                  effect="slide"
                  className="w-full h-full"
                >
                  {project.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          priority={idx === 0}
                          className="object-cover object-top hover:scale-102 transition-transform duration-700"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>

            {/* Desktop Action Buttons (Inside Sidebar on large screens) */}
            <div className="hidden lg:flex flex-col gap-3">
              {project.deployedLink && (
                <Link href={project.deployedLink} target="_blank" className="w-full">
                  <Button size="lg" className="w-full gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer">
                    <CiGlobe className="text-xl" />
                    View Live Demo
                  </Button>
                </Link>
              )}
              {project.githubLink && (
                <Link href={project.githubLink} target="_blank" className="w-full">
                  <Button size="lg" variant="outline" className="w-full gap-2 border-gray-400/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 text-gray-300 hover:text-cyan-400 font-medium transition-all cursor-pointer">
                    <FaGithub className="text-lg" />
                    View Source Code
                  </Button>
                </Link>
              )}
            </div>

            {/* Technologies Used Card */}
            <div className="bg-gray-400/5 border border-gray-400/10 rounded-xl p-5 space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-100 flex items-center gap-2 border-b border-gray-400/10 pb-2">
                <Code2 className="size-5 text-cyan-400" />
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
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-400/5 hover:bg-gray-400/10 border border-gray-400/10 hover:border-cyan-500/20`}
                    >
                      {skillInfo?.icon && (
                        <skillInfo.icon className={`text-base ${skillInfo.color || "text-gray-400"}`} />
                      )}
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </HeadingWrapper>
  );
}
