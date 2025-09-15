import React from "react";
import {
  Avatar,
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import "./content.css";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import img from "../imgs/coding-bg.jpg";

function Content() {
  const { darkTheme2 } = useSelector((store) => store.theme);
  const md = useMediaQuery("(max-width : 1020px)");
  const sm = useMediaQuery("(max-width : 700px)");

  return (
    <Box display={"flex"} justifyContent={"space-around"} marginTop={"10%"}>
      <Stack
        gap={3}
        sx={{
          backgroundColor: darkTheme2
            ? "rgba(132, 131, 131, 0.03)"
            : "rgba(255, 248, 248, 0.15)",
          borderRadius: "5px",
          padding: "8px",
          width: sm ? "100%" : "50%",
        }}
      >
        <Stack gap={1}>
          <Typography
            sx={{ color: darkTheme2 ? "#fff" : "#57564F", fontWeight: 600 }}
            variant="h3"
            display={"inline-block"}
          >
            WHO AM I ?
          </Typography>
          <Typography
            sx={{
              color: darkTheme2 ? "#fff" : "#7A7A73",
            }}
            display={"inline-block"}
          >
            I'm user57
          </Typography>
          <Typography
            sx={{ color: darkTheme2 ? "#fff" : "#7A7A73", fontSize: "17px" }}
            display={"inline-block"}
          >
            I'm a web front-end developer
          </Typography>
          <Typography
            sx={{ color: darkTheme2 ? "#fff" : "#7A7A73", fontSize: "17px" }}
            display={"inline-block"}
          >
            The technologies I use : React,muı,redux-toolkit,formik-yup
          </Typography>
          <Typography
            sx={{ color: darkTheme2 ? "#fff" : "#7A7A73", fontSize: "17px" }}
            display={"inline-block"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            dolores, ullam molestias, necessitatibus libero porro tempore
            dignissimos incidunt consectetur est facere ab et laboriosam rerum
            dolore aut. Libero, impedit ea?
          </Typography>
        </Stack>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: darkTheme2 ? "#fff" : "#57564F" }}
            marginBottom={1}
          >
            Foolow me 👇{" "}
          </Typography>
          <Link sx={{ color: "#fff" }}>
            <GitHubIcon />
          </Link>
          <Link
            sx={{ color: "#fff" }}
            margin={"0px 10px"}
            href="#"
            underline="none"
          >
            <InstagramIcon />
          </Link>
          <Link
            sx={{ color: "#fff" }}
            margin={"0px 10px"}
            href="#"
            underline="none"
          >
            <YouTubeIcon />
          </Link>
          <Link
            sx={{ color: "#fff" }}
            margin={"0px 10px"}
            href="#"
            underline="none"
          >
            <XIcon />
          </Link>
          <Link
            sx={{ color: "#fff" }}
            margin={"0px 10px"}
            href="#"
            underline="none"
          >
            <LinkedInIcon />
          </Link>
        </Box>
        <Link
          href="#"
          underline="none"
          className={`btn ${darkTheme2 ? "btn-dark" : "btn-light"}`}
        >
          My projects
        </Link>
      </Stack>

      <Avatar
        src={img}
        sx={{
          width: 140,
          height: 140,
        }}
        style={{ display: sm && "none" }}
      />
    </Box>
  );
}

export default Content;
