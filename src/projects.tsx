import React from "react";
import { Box, Text, useInput } from "ink";

const projects = [
  {
    name: "LongWriter (demo only)",
    url: "https://youtu.be/PK_qZgY2UJ0",
  },
  {
    name: "BuzzFinder",
    url: "https://github.com/itsevelync/buzz-finder",
  },
  {
    name: "Mechatronics & Motivation",
    url: "https://vip.gatech.edu/teams-all-in-one/entry/1286/",
  },
  {
    name: "Animal Training App",
    url: "https://github.com/BoG-Dev-Bootcamp-F25/project2-f25-RJNA",
  },
  {
    name: "MARTA Interface",
    url: "https://github.com/BoG-Dev-Bootcamp-F25/project1-f25-NathanN",
  },
  {
    name: "PathFinder (HackGT 12)",
    url: "https://github.com/nnguyen402/HackGT2025",
  },
  {
    name: "Video Game in C using GBA (demo only)",
    url: "https://youtu.be/XQ0P_xhTYpM",
  },
  {
    name: "Spotify Roaster",
    url: "https://github.com/gumpshroom/spotifyRoasted",
  },
  {
    name: "Atlanta Food Finder",
    url: "https://github.com/gumpshroom/FoodReview2340",
  },
];

const link = (text: string, url: string) =>
  `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`;

interface ProjectsProps {
  onBack: () => void;
}

export const Projects = ({ onBack }: ProjectsProps) => {
  useInput((input, key) => {
    if (key.escape) onBack();
  });
  return (
    <Box flexDirection="column" padding={3}>
      <Text color="#47D69D" bold>
        Projects
      </Text>
      <Text color="#38AB7D">(ctrl+click)</Text>
      <Box flexDirection="column" marginTop={1}>
        {projects.map((project, i) => (
          <Box key={i}>
            <Text color="#38AB7D">• </Text>
            <Text color="#FF8DA1">{link(project.name, project.url)}</Text>
          </Box>
        ))}
      </Box>
      <Box marginTop={2}>
        <Text color="#38AB7D" dimColor>
          esc to go back
        </Text>
      </Box>
    </Box>
  );
};
