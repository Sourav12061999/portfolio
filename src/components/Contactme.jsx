import React from "react";
import { Box } from "@mui/system";
import { AiFillLinkedin } from "react-icons/ai";
import { GoDeviceMobile } from "react-icons/go";
import { MdOutgoingMail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "../styles/contact.scss";
function Contactme() {
  return (
    <Box
      className="contact"
      sx={{
        width: "98vw",
        margin: "auto",
        mt: "5%",
        backgroundColor: "#202020",
        height: "300px",
        padding: 2,
        boxSizing: "border-box",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 className="neon-orange">Let's Connect</h1>
      <Box sx={{ mt: 5 }}>
        <a
          href={"https://www.linkedin.com/in/sourav-das-072256218/"}
          target="_blank"
        >
          <button id="button" className="fill">
            <AiFillLinkedin /> Linkdin
          </button>
        </a>
        <a href={"https://github.com/Sourav12061999"} target="_blank">
          <button id="button" className="pulse">
            <AiFillGithub /> Github
          </button>
        </a>
        <a href={"sd12062020@gmail.com"} target="_blank"></a>
        <button id="button" className="close">
          <GoDeviceMobile /> Call
        </button>
        <a href={"https://sd12062020@gmail.com"} target="_blank">
          <button id="button" className="raise">
            <MdOutgoingMail /> Mail
          </button>
        </a>
      </Box>
    </Box>
  );
}

export default Contactme;
