import React from "react";
import { Stack, Box } from "@mui/material";

const agents = [
  {
    name: "Martin",
    role: "AGENT",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Justin",
    role: "AGENT",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Shawn",
    role: "AGENT",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Annie",
    role: "AGENT",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "John",
    role: "AGENT",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sofia",
    role: "AGENT",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David",
    role: "AGENT",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

const TopAgentCard = ({ index = 0 }: { index?: number }) => {
  const agent = agents[index % agents.length];
  return (
    <Stack className={"top-agent-card"}>
      <img src={agent.img} alt={agent.name} />
      <Box className={"agent-info"}>
        <strong>{agent.name}</strong>
        <span>{agent.role}</span>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;