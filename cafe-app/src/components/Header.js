import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import cafe from "../imgs/cafe.png";

const menuItems = [
  "Tea",
  "Iced Tea",
  "Coffee",
  "Iced Coffee",
  "Milkshake",
  "Dessert",
  "Cake",
  "Pizza",
  "Pasta",
  "Salad",
  "Toast",
  "Fried Potatoes",
];

function Header() {
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };

  const closeDropdown = () => {
    setShow(false);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        left: 0,
        top: 0,
        width: "100%",
        backgroundColor: "#543310ff",
        padding: "10px 0px",
        zIndex: "999",
      }}
    >
      <Container
        sx={{
          display: "flex",
          height: "70px",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <img src={cafe} alt="cafe image" />
          <Typography variant="h4" color="#D3DAD9">
            x-Cafe
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={3}>
          <Box position={"relative"}>
            <Link
              color="#fff"
              fontWeight={600}
              fontSize={"20px"}
              href="#"
              underline="none"
              onMouseEnter={showDropdown}
              onMouseLeave={closeDropdown}
            >
              Menu
            </Link>
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#74512D",
                color: "#fff",
                minWidth: "150px",
                borderRadius: "4px",
                boxShadow: 3,
                transition: "all 0.5s ease",
                opacity: show ? 1 : 0,
                height: show ? "432px" : 0,
                pointerEvents: !show && "none",
              }}
              onMouseEnter={showDropdown}
              onMouseLeave={closeDropdown}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={closeDropdown}>
                  {item}
                </MenuItem>
              ))}
            </Box>
          </Box>
          <Box>
            <Link
              color="#fff"
              fontWeight={600}
              fontSize={"20px"}
              href="#"
              underline="none"
            >
              Order
            </Link>
          </Box>
          <Box>
            <Link
              color="#fff"
              fontWeight={600}
              fontSize={"20px"}
              href="#"
              underline="none"
            >
              About
            </Link>
          </Box>
          <Box>
            <Link
              color="#fff"
              fontWeight={600}
              fontSize={"20px"}
              href="#"
              underline="none"
            >
              Contact
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
