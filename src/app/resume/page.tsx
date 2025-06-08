import CvBtn from "@/components/CvBtn";
import ParaText from "@/components/ParaText";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import HeadingWrapper from "@/layouts/HeadingWrapper";
import { ResumeSections } from "@/utils/constants";

import React from "react";
import { LiaHandPointRight } from "react-icons/lia";
import { PiBookOpenText } from "react-icons/pi";

type ResumeItem = {
  heading: string;
  subHeading: string;
  date: string;
  description?: string[];
};

type ResumeSection = {
  mainHeading: string;
  info: ResumeItem[];
};

const Resume = () => {
  return (
    <HeadingWrapper heading={"Resume"}>
      <div className="space-y-8">
        {ResumeSections.map((section: ResumeSection, idx: number) => (
          <div key={idx} className="space-y-6">
            <div className="flex items-center gap-3">
              <Button
                variant={"secondary"}
                size={"icon"}
                className="text-xl text-cyan-500"
              >
                <PiBookOpenText />
              </Button>
              <SubHeading className="font-bold">
                {section.mainHeading}
              </SubHeading>
            </div>

            <div className="pl-12">
              {section.info.map((item: ResumeItem, index: number) => (
                <div key={index} className="relative pb-8 last:pb-0">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-400/20 -translate-x-6"></div>

                  {/* Timeline dot */}
                  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-7 top-2"></div>

                  {/* Content */}
                  <div className="group bg-gray-400/5 hover:bg-gray-400/10 transition-all p-4 rounded-lg border border-gray-400/10 hover:border-cyan-500/20 space-y-2">
                    <h3 className="font-semibold text-lg text-gray-200">
                      {item.heading}
                    </h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{item.subHeading}</span>
                      <span className="text-cyan-500 font-medium bg-cyan-500/10 px-3 py-1 rounded-full text-sm">
                        {item.date}
                      </span>
                    </div>

                    {/* Description Points */}
                    {item.description && (
                      <ul className="space-y-2 pt-3 border-t border-gray-400/10 ">
                        {item.description.map(
                          (point: string, pointIdx: number) => (
                            <li
                              key={pointIdx}
                              className="flex gap-2 text-sm text-gray-300 group-hover:text-gray-200"
                            >
                              <span className="text-cyan-500 mt-1.5">
                                {/* <div className="t"> */}
                                    <LiaHandPointRight/>
                                {/* </div> */}
                              </span>
                              <ParaText className="flex-1">{point}</ParaText>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-end">

        <CvBtn/>
        </div>
      </div>
    </HeadingWrapper>
  );
};

export default Resume;
