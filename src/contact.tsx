import React from "react";
import { Box, Text, useInput } from "ink";

const link = (text: string, url: string) =>
  `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`;

const contacts = [
  {
    label: "Email",
    display: "nnguyen402@gatech.edu",
    url: "mailto:nnguyen402@gatech.edu",
  },
  {
    label: "GitHub",
    display: "github.com/nnguyen402",
    url: "https://github.com/nnguyen402",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/nguyen402",
    url: "https://www.linkedin.com/in/nguyen402/",
  },
];

interface ContactProps {
  onBack: () => void;
}

export const Contact = ({ onBack }: ContactProps) => {
  useInput((input, key) => {
    if (key.escape) onBack();
  });

  return (
    <Box flexDirection="column" padding={3}>
      <Text color="#47D69D" bold>
        Contact
      </Text>
      <Text color="#38AB7D">(ctrl+click)</Text>
      <Box flexDirection="column" marginTop={1}>
        {contacts.map((c, i) => (
          <Box key={i}>
            <Text color="#47D69D">{c.label.padEnd(10)}</Text>
            <Text color="#FF8DA1">{link(c.display, c.url)}</Text>
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
