import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Container,
  Drawer,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { changeTheme } from "./themeSlice";
import profile from "../imgs/coding-bg.jpg";

function SidebarMenu() {
  const { darkTheme2 } = useSelector((store) => store.theme);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(changeTheme());
    localStorage.setItem("darkTheme2", !darkTheme2);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{ color: darkTheme2 ? "#fff" : "#212121" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <Container
          sx={{
            backgroundColor: darkTheme2 ? "#1c1c1cff" : "#DDDAD0 ",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            gap: 4,
          }}
        >
          <Avatar src={profile} sx={{ width: 80, height: 80 }} />

          <Stack alignItems={"center"} gap={1}>
            <Typography sx={{ color: darkTheme2 ? "#E0E0E0 " : "#616161  " }}>
              Follow me 👇
            </Typography>
            <Link
              href="#"
              underline="none"
              sx={{ color: darkTheme2 ? "#E0E0E0  " : "#2C2C2C  " }}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ color: darkTheme2 ? "#E0E0E0  " : "#2C2C2C  " }}
            >
              <YouTubeIcon />
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ color: darkTheme2 ? "#E0E0E0  " : "#2C2C2C  " }}
            >
              <GitHubIcon />
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ color: darkTheme2 ? "#E0E0E0  " : "#2C2C2C  " }}
            >
              <XIcon />
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ color: darkTheme2 ? "#E0E0E0  " : "#2C2C2C  " }}
            >
              <LinkedInIcon />
            </Link>
          </Stack>
          <Stack alignItems={"center"} gap={1}>
            <Link
              sx={{
                color: darkTheme2 ? "#fff" : "#7A7A73",
                fontWeight: "600",
                fontSize: "18px",
                padding: "5px 12px",
                borderRadius: "3px",
                transition: "all 0.4s ease-in-out",
                border: darkTheme2 ? "1px solid #fff" : "1px solid #7A7A73",
              }}
              href="#"
              underline="none"
            >
              Contact
            </Link>
            <Link
              sx={{
                color: darkTheme2 ? "#fff" : "#7A7A73",
                fontWeight: "600",
                fontSize: "18px",
                padding: "5px 12px",
                borderRadius: "3px",
                transition: "all 0.4s ease-in-out",
                border: darkTheme2 ? "1px solid #fff" : "1px solid #7A7A73",
              }}
              href="#"
              underline="none"
            >
              About me
            </Link>
          </Stack>

          <IconButton
            sx={{ color: darkTheme2 ? "#fff" : "#2C2C2C" }}
            onClick={toggleTheme}
          >
            {darkTheme2 ? <LightModeIcon /> : <NightsStayIcon />}
          </IconButton>
        </Container>
      </Drawer>
    </>
  );
}

export default SidebarMenu;
