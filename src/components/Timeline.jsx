import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimeineItem";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900">
          TimeLine
        </h1>
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
