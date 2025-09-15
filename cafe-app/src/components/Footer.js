import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <Box bgcolor={"#543310ff"} padding={"2em"}>
      <Container>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Box>
            <Typography color="#1A120B" fontWeight={600} variant="h3">
              x-Cafe
            </Typography>
            <Typography fontSize={"17px"} fontWeight={600} component={"i"}>
              Good coffee, good vibes.
            </Typography>
          </Box>
          <Box>
            <Link
              display={"block"}
              fontSize={"1.6em"}
              color="#1A120B"
              fontWeight={600}
              href="#"
              underline="none"
            >
              Menu
            </Link>
            <Link
              display={"block"}
              fontSize={"1.6em"}
              color="#1A120B"
              fontWeight={600}
              href="#"
              underline="none"
            >
              Order
            </Link>
            <Link
              display={"block"}
              fontSize={"1.6em"}
              color="#1A120B"
              fontWeight={600}
              href="#"
              underline="none"
            >
              Contact
            </Link>
            <Link
              display={"block"}
              fontSize={"1.6em"}
              color="#1A120B"
              fontWeight={600}
              href="#"
              underline="none"
            >
              About
            </Link>
          </Box>
          <Box>
            <Typography color="#1A120B" variant="h4">
              Social Links
            </Typography>
            <Box marginTop={"10px"} textAlign={"center"}>
              <Link color="#D5CEA3" href="#" underline="none">
                <InstagramIcon />
              </Link>
              <Link color="#D5CEA3" href="#" underline="none">
                <FacebookIcon />
              </Link>
            </Box>
          </Box>
        </Stack>
        <Box>
          <Divider
            sx={{
              width: "100%",
              height: "1.5px",
              backgroundColor: "#FFF8EA",
              margin: "1em 0px",
            }}
          />
          <Typography
            fontSize={"1.2em"}
            color="#1A120B"
            fontWeight={600}
            textAlign={"center"}
          >
            © 2025 x-Cafe. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
