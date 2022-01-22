import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3, FaAws } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact, FaDocker } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiMongodb, DiRedis } from "react-icons/di";
import {
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
  SiMaterialui,
} from "react-icons/si";
import { AiTwotoneFire } from "react-icons/ai";
import SkillCards from "./SkillCards";
function Skills() {
  return (
    <div className="skills">
      <Typography
        textAlign={"center"}
        variant="h3"
        sx={{ marginBottom: "10%", color: "white" }}
      >
        Skills
      </Typography>
      <Grid container spacing="10px" sx={{ perspective: "100vh" }}>
        <SkillCards Icon={FaHtml5} hover={"red"} tooltip={"HTML5"} />
        <SkillCards Icon={FaCss3} hover="blue" tooltip={"CSS3"} />
        <SkillCards Icon={FaJsSquare} hover={"yellow"} tooltip={"JAVASCRIPT"} />
        <SkillCards Icon={FaReact} hover="#4ba3c7" tooltip={"REACT 18+"} />
        <SkillCards
          Icon={SiMaterialui}
          hover="#4ba3c7"
          tooltip={"Material UI"}
        />
        <SkillCards Icon={SiNextdotjs} hover="#76ffff" tooltip={"Next JS"} />
        <SkillCards Icon={DiNodejs} hover={"green"} tooltip={"NODE JS"} />
        <SkillCards Icon={DiMongodb} hover={"green"} tooltip={"MONGODB"} />
        <SkillCards Icon={DiRedis} hover={"red"} tooltip={"REDIS"} />
        <SkillCards Icon={SiExpress} hover={"yellow"} tooltip={"EXPRESS"} />
        <SkillCards Icon={FaAws} hover={"orange"} tooltip={"AWS"} />
        <SkillCards Icon={FaDocker} hover="#0077c2" tooltip={"DOCKER"} />
        <SkillCards
          Icon={SiSocketdotio}
          hover={"yellow"}
          tooltip={"SOCKET.IO"}
        />
        <SkillCards
          Icon={AiTwotoneFire}
          hover={"orange"}
          tooltip={"Firebase"}
        />
      </Grid>
    </div>
  );
}

export default Skills;
