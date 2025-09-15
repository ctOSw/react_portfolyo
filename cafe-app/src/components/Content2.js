import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import cafeInterior from "../imgs/cafe-interior.jpg";
import cafeInterior2 from "../imgs/cafe-interior2.jpg";
import cafeInterior3 from "../imgs/cafe-interior3.jpg";
import MenuContent from "./MenuContent";

function Content2() {
  return (
    <Grid size={{ lg: 12 }} bgcolor={"#74512D"} padding={"1em"}>
      <Container>
        <Box>
          <Typography textAlign={"center"} color="#F8F4E1" variant="h3">
            WHO ARE WE ?
          </Typography>
          <Typography fontWeight={600} fontSize={"24px"} textAlign={"center"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur perspiciatis, explicabo ratione expedita quisquam quam
            sequi aut corrupti ipsam non suscipit iure fugiat nemo soluta magni
            voluptatem officia et amet!
          </Typography>
        </Box>

        <Grid container marginTop={"20px"} spacing={{ lg: 5 }}>
          <Grid size={{ lg: 12 }} justifyItems={"center"}>
            <Typography variant="h4" color="#F8F4E1">
              Inside footage
            </Typography>
          </Grid>
          <Grid size={{ lg: 6 }}>
            <img width={"100%"} height={"100%"} src={cafeInterior} alt="" />
          </Grid>
          <Grid size={{ lg: 3 }}>
            <img width={"100%"} height={"100%"} src={cafeInterior2} alt="" />
          </Grid>
          <Grid size={{ lg: 3 }}>
            <img width={"100%"} height={"100%"} src={cafeInterior3} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Content2;
