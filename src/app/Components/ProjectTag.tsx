import React from "react";

interface ProjectTagProps {
  onClick: (name: string) => void; // onClick expects a function that takes a string argument
  name: string;                    // name should be a string
  isSelected: boolean;             // isSelected should be a boolean
}

const ProjectTag: React.FC<ProjectTagProps> = ({ onClick, name, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`${
        isSelected ? "bg-blue-500" : "bg-gray-500"
      } px-4 py-2 rounded-md`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
