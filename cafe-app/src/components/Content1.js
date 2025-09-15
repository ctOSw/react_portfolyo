import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import "./main.css";
import coffeeGif from "../imgs/coffee-break.gif";

function Content1() {
  return (
    <Box className="cafe-bg">
      <Container sx={{ paddingTop: "2em" }}>
        <Grid
          container
          justifyContent={"space-evenly"}
          sx={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(230, 221, 198, 0.2)",
            padding: "1em",
            borderRadius: "5px",
          }}
          gap={3}
        >
          <Grid size={{ lg: 6 }}>
            <Box>
              <Typography margin={"10px 0px"} variant="h3" color="#F8F4E1">
                WELCOME TO x-CAFE !
              </Typography>
              <Typography fontWeight={600} fontSize={"19px"}>
                Enjoy your self,free internet is here
              </Typography>
              <Typography fontWeight={600} fontSize={"19px"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, maiores dolorem officia omnis provident sit
                necessitatibus, debitis nemo culpa eos nisi laborum dicta atque
                rem excepturi veniam explicabo magnam.
              </Typography>
            </Box>
            <Button className="order-btn">ORDER NOW</Button>
          </Grid>

          <Grid>
            <img
              width={145}
              height={145}
              style={{
                borderRadius: "100%",
              }}
              src={coffeeGif}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Content1;
