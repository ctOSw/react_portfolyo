import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./themeSlice";

function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [searchMenu, setSearhMenu] = useState(false);

  const dispatch = useDispatch();

  const { darkTheme } = useSelector((store) => store.darkTheme);

  const closeDrawer = () => {
    setOpen(false);
  };

  const toggleTheme = () => {
    dispatch(changeTheme());
    localStorage.setItem("darkTheme", !darkTheme);
  };

  const toggleSearchMenu = () => {
    setSearhMenu(!searchMenu);
    setOpen(false);

    // console.log(searchMenu ? "menü açık" : "menü kapalı");
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        size="large"
        sx={{ cursor: "pointer", color: darkTheme ? "#fff" : "#347bc2" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <Container
          sx={{
            backgroundColor: darkTheme ? "#1f4d75" : "#fff",
            height: "100%",
          }}
        >
          <Stack padding={"5px"} direction={"row"} gap={5}>
            <Typography sx={{ color: darkTheme ? "#fff" : "" }} variant="h4">
              abcAcademy
            </Typography>
            <IconButton
              sx={{ color: darkTheme ? "#fff" : "#347bc2" }}
              onClick={closeDrawer}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider
            style={{
              backgroundColor: darkTheme ? "#fff" : "#685da9ff",
            }}
          />
          <Stack paddingTop={"15px"}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: darkTheme ? "#fff" : "#347bc2",
                fontWeight: "600",
                padding: "5px 0px",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                Anasayfa
                <ArrowForwardIosIcon />
              </Stack>
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: darkTheme ? "#fff" : "#347bc2",
                fontWeight: "600",
                padding: "5px 0px",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                Eğitimler
                <ArrowForwardIosIcon />
              </Stack>
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: darkTheme ? "#fff" : "#347bc2",
                fontWeight: "600",
                padding: "5px 0px",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                Bootcampler
                <ArrowForwardIosIcon />
              </Stack>
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: darkTheme ? "#fff" : "#347bc2",
                fontWeight: "600",
                padding: "5px 0px",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                Yazılar
                <ArrowForwardIosIcon />
              </Stack>
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: darkTheme ? "#fff" : "#347bc2",
                fontWeight: "600",
                padding: "5px 0px",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                Projeler
                <ArrowForwardIosIcon />
              </Stack>
            </Link>
          </Stack>
          <Divider
            style={{
              backgroundColor: darkTheme ? "#fff" : "#685da9ff",
            }}
          />
          <Stack paddingTop={"15px"} gap={3}>
            <Stack onClick={toggleSearchMenu} direction={"row"} gap={3}>
              <SearchIcon
                sx={{
                  color: darkTheme ? "#fff" : "#347bc2",
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  color: darkTheme ? "#fff" : "#1f4d75",
                  fontWeight: "600",
                }}
              >
                Ara
              </Typography>
            </Stack>
            <Stack
              onClick={toggleTheme}
              sx={{ cursor: "pointer" }}
              direction={"row"}
              gap={3}
            >
              <NightlightRoundIcon
                sx={{
                  color: darkTheme ? "#fff" : "#347bc2",
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  color: darkTheme ? "#fff" : "#1f4d75",
                  fontWeight: "600",
                }}
              >
                Tema değiştir
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={3}>
              <AccountCircleIcon
                sx={{
                  color: darkTheme ? "#fff" : "#347bc2",
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  color: darkTheme ? "#fff" : "#1f4d75",
                  fontWeight: "600",
                }}
              >
                Profil
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Drawer>
      <Box
        display={searchMenu ? "flex" : "none"}
        left={0}
        top={0}
        sx={{
          backgroundColor: darkTheme ? "#08131cb9" : "#66666687",
          width: "100%",
          height: "100vh",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
      >
        <IconButton
          onClick={() => setSearhMenu(false)}
          sx={{
            position: "absolute",
            right: "0",
            top: "37%",
            color: darkTheme ? "#fff" : "#347bc2",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          alignContent={"center"}
          sx={{
            backgroundColor: darkTheme ? "#1f4d75" : "#ffffffff",
            width: "100%",
            height: "20%",
            padding: "20px",
          }}
        >
          <TextField
            slotProps={{
              input: {
                sx: { color: darkTheme && "#fff" },
              },
            }}
            fullWidth
            placeholder="Arama yap..."
          />
        </Box>
      </Box>
    </>
  );
}

export default SidebarMenu;
