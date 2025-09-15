import React, { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./themeSlice";
import SidebarMenu from "./SidebarMenu";
import "./content.css";

function Header() {
  const { darkTheme2 } = useSelector((store) => store.theme);

  const md = useMediaQuery("(max-width : 1020px)");
  const sm = useMediaQuery("(max-width : 700px)");
  const xs = useMediaQuery("(max-width:400px)");

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(changeTheme());
    localStorage.setItem("darkTheme2", !darkTheme2);
  };

  return (
    <Box>
      <Stack
        alignItems={"center"}
        direction={"row"}
        padding={"10px"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{
            color: darkTheme2 ? "#ffffffff " : "#57564F",
          }}
          variant={xs ? "h6" : "h4"}
        >
          user57
        </Typography>

        {sm ? (
          <SidebarMenu />
        ) : (
          <Stack alignItems={"center"} direction={"row"} gap={5}>
            <IconButton
              sx={{ color: darkTheme2 ? "#fff" : "#57564F" }}
              onClick={toggleTheme}
            >
              {darkTheme2 ? <LightModeIcon /> : <NightsStayIcon />}
            </IconButton>

            <Stack direction={"row"} gap={3}>
              <Link
                className={
                  darkTheme2 ? "header-link-dark" : "header-link-light"
                }
                href="#"
                underline="none"
                sx={{
                  color: darkTheme2 ? "#fff" : "#7A7A73",
                  fontWeight: "600",
                  fontSize: "18px",
                  padding: "5px 12px",
                  borderRadius: "3px",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                Contact
              </Link>
              <Link
                className={
                  darkTheme2 ? "header-link-dark" : "header-link-light"
                }
                href="#"
                underline="none"
                sx={{
                  color: darkTheme2 ? "#fff" : "#7A7A73",
                  fontWeight: "600",
                  fontSize: "18px",
                  padding: "5px 12px",
                  borderRadius: "3px",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                About me
              </Link>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

export default Header;
