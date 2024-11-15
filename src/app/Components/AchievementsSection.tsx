"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import AnimatedNumbers and disable SSR
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

// Define a TypeScript interface for achievements
interface Achievement {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
}

// Achievements list with types
const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100000", // Removing the comma here for easier parsing as a number
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma={true}
                animateToNumber={Number(achievement.value)} 
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(idx) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (idx + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
