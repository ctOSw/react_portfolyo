import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import "./content.css";
import javaIcon from "../img/java.png";
import jsIcon from "../img/js.png";
import cppIcon from "../img/cpp.png";
import { useSelector } from "react-redux";

function Content2() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { darkTheme } = useSelector((store) => store.darkTheme);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imgSx = {
    width: "120px",
    height: "120px",
  };

  const responsiveİmg = {
    width: " 90px",
    height: "90px",
  };

  const mobileImg = {
    width: "70px",
    height: "70px",
  };

  return (
    <Box className="MuiBox-root-content">
      <Typography
        paddingTop={1}
        variant="h4"
        style={{ color: darkTheme ? "#fff" : "#1f4d75" }}
      >
        Öne çıkan kurslar
      </Typography>

      <Grid
        container
        justifyContent={isMobile ? "center" : ""}
        marginTop={5}
        spacing={{ xs: 1, md: 2, lg: 2 }}
      >
        <Grid
          display={matches ? "flex" : ""}
          justifyContent={matches ? "center" : ""}
          size={{ sm: 12, md: 6, lg: 4 }}
        >
          <Card
            sx={{
              width: isMobile ? "300px" : "370px",
              backgroundColor: darkTheme ? "#1f4d75" : "#fff",
            }}
          >
            <CardMedia
              sx={isMobile ? mobileImg : matches ? responsiveİmg : imgSx}
              image={javaIcon}
            />
            <CardContent>
              <Typography
                sx={{
                  color: darkTheme ? "#fff" : "#347bc2",
                  fontWeight: "500",
                }}
                variant="body1"
                component="p"
              >
                Java ile backend kursu
              </Typography>
              <Stack marginTop={2} gap={2}>
                <Rating name="read-only" value={4} readOnly />
                <Divider />
                <Typography
                  style={{ color: darkTheme ? "#fff" : "#28639e" }}
                  variant="body1"
                  component="p"
                >
                  18.654 kullanıcı
                </Typography>
                <Typography
                  style={{ color: darkTheme ? "#fff" : "#28639e" }}
                  variant="body1"
                  component="p"
                >
                  72 saat ders içeriği
                </Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Button variant="contained">Kursa başla</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          display={matches ? "flex" : ""}
          justifyContent={matches ? "center" : ""}
          size={{ sm: 12, md: 6, lg: 4 }}
        >
          <Card
            sx={{
              width: isMobile ? "300px" : "370px",
              backgroundColor: darkTheme ? "#1f4d75" : "#fff",
              color: darkTheme ? "#fff" : "",
            }}
          >
            <CardMedia
              sx={isMobile ? mobileImg : matches ? responsiveİmg : imgSx}
              image={jsIcon}
            />
            <CardContent>
              <Typography
                sx={{
                  color: darkTheme ? "#fff" : "#347bc2",
                  fontWeight: "500",
                }}
                variant="body1"
                component="p"
              >
                JavaScript ile web geliştirme kursu
              </Typography>
              <Stack marginTop={2} gap={2}>
                <Rating name="read-only" value={5} readOnly />
                <Divider />
                <Typography
                  style={{ color: darkTheme ? "#fff" : "#28639e" }}
                  variant="body1"
                  component="p"
                >
                  23.124 kullanıcı
                </Typography>
                <Typography
                  style={{ color: darkTheme ? "#fff" : "#28639e" }}
                  variant="body1"
                  component="p"
                >
                  60 saat ders içeriği
                </Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Button variant="contained">Kursa başla</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          display={matches ? "flex" : ""}
          justifyContent={matches ? "center" : ""}
          size={{ sm: 12, md: 6, lg: 4 }}
        >
          <Card
            sx={{
              width: isMobile ? "300px" : "370px",
              backgroundColor: darkTheme ? "#1f4d75" : "#fff",
              color: darkTheme ? "#fff" : "",
            }}
          >
            <CardMedia
              sx={isMobile ? mobileImg : matches ? responsiveİmg : imgSx}
              image={cppIcon}
            />
            <CardContent>
              <Typography
                sx={{
                  color: darkTheme ? "#fff" : "#347bc2",
                  fontWeight: "500",
                }}
                variant="body1"
                component="p"
              >
                C++ ve unreal engine ile oyun geliştirme kursu
              </Typography>
              <Stack marginTop={2} gap={2}>
                <Rating name="read-only" value={5} readOnly />
                <Divider />
                <Typography
                  style={{ color: darkTheme ? "#fff" : "#28639e" }}
                  variant="body1"
                  component="p"
                >
                  32.502 kullanıcı
                </Typography>
                <Typography
                  style={{ color: darkTheme ? "#fff" : "#28639e" }}
                  variant="body1"
                  component="p"
                >
                  66 saat ders içeriği
                </Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Button variant="contained">Kursa başla</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content2;
