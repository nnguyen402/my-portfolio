import React from "react";
import { Box, Text, useInput } from "ink";

const skills = [
  {
    category: "Languages",
    items: [
      "TypeScript/JavaScript",
      "Python",
      "Java",
      "C/C++",
      "C#",
      "SQL",
      "HTML/CSS",
      "Assembly (MIPS/x86_64)",
    ],
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend & Databases",
    items: [
      "Next.js",
      "Node.js",
      "Django",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    category: "Data Science & AI",
    items: ["PyTorch", "NumPy", "Pandas", "Scikit-learn", "LightRAG"],
  },
  {
    category: "Graphics & Game Dev",
    items: ["OpenGL", "GLSL", "Unity"],
  },
  {
    category: "Low-Level Systems",
    items: ["GDB", "Multithreading", "Memory Management", "Virtual Memory"],
  },
  {
    category: "Tools & Methodologies",
    items: [
      "Git",
      "Docker",
      "Postman",
      "Figma",
      "Agile/Scrum",
      "Microsoft Entra (Azure AD)",
    ],
  },
];

const topSkills = [
  "TypeScript/JavaScript",
  "Java",
  "Python",
  "SQL",
  "React.js",
  "Tailwind CSS",
  "Git",
  "Next.js",
  "C/C++",
  "HTML/CSS",
  "MongoDB",
  "Agile/Scrum",
  "Django",
  "Unity",
  "Figma",
  "GDB",
  "REST APIs",
  "Node.js",
];

interface SkillsProps {
  onBack: () => void;
}

export const Skills = ({ onBack }: SkillsProps) => {
  useInput((input, key) => {
    if (key.escape) onBack();
  });

  return (
    <Box flexDirection="column" padding={1}>
      <Text color="#47D69D" bold>
        Skills
      </Text>
      <Box flexDirection="row" flexWrap="wrap" width="70%">
        {skills.map((group, i) => (
          <Box key={i} flexDirection="column" width="50%" marginBottom={1}>
            <Text color="#FF8DA1" bold>
              {group.category}
            </Text>

            {group.items.map((item, j) => {
              const isTopSkill = topSkills.includes(item);

              return (
                <Box key={j}>
                  <Text
                    color={isTopSkill ? "#b2e6d1" : "#38AB7D"}
                    bold={isTopSkill}
                  >
                    {isTopSkill ? " ★ " : " • "}
                    {item}
                  </Text>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
      <Box marginTop={1}>
        <Text color="#38AB7D" dimColor>
          esc to go back
        </Text>
      </Box>
    </Box>
  );
};
