import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import bootcamp from "../img/coding-bootcamp.png";
import hacker from "../img/etik-hacker.png";
import ai from "../img/ai.png";
import { useSelector } from "react-redux";

function Content3() {
  const imgSx = { height: "170px", width: "170px" };
  const { darkTheme } = useSelector((store) => store.darkTheme);

  const responsiveİmg = {
    width: " 90px",
    height: "90px",
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box className="MuiBox-root-content">
      <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
        <Typography
          variant="h3"
          style={{
            color: darkTheme ? "#fff" : "#1f4d75",
            fontSize: isMobile ? "28px" : "",
            fontWeight: isMobile && "700",
          }}
        >
          Bootcamplerimize katılın
        </Typography>
        <img
          style={matches ? { display: "none" } : { display: "block" }}
          src={bootcamp}
          width={110}
        />
      </Stack>

      <Stack marginTop={3} direction={matches ? "column" : "row"} gap={2}>
        <Card
          sx={{
            width: matches ? "100%" : "50%",
            backgroundColor: darkTheme ? "#1f4d75" : "#fff",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <CardMedia sx={imgSx} image={hacker} />
          </Box>
          <CardContent>
            <Typography
              style={{ fontWeight: "600", color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="h5"
            >
              Siber Güvenlik Bootcamp
            </Typography>
            <Typography
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="body1"
              component="p"
            >
              Süre: 10 Hafta
            </Typography>
            <Typography
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="body1"
              component="p"
            >
              İçerik: Ağ güvenliği, etik hacking, penetration test
            </Typography>
            <Typography
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="body1"
              component="p"
            >
              Kazanımlar :
            </Typography>
            <li
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
            >
              Gerçek saldırı senaryoları
            </li>
            <li
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
            >
              Güvenlik araçları kullanımı
            </li>
            <li
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
            >
              Sertifika hazırlığı
            </li>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="contained">
              Katıl
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: matches ? "100%" : "50%",
            backgroundColor: darkTheme ? "#1f4d75" : "#fff",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <CardMedia sx={imgSx} image={ai} />
          </Box>
          <CardContent>
            <Typography
              style={{ fontWeight: "600", color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="h5"
            >
              YZ ve Makine Öğrenimi Bootcamp
            </Typography>
            <Typography
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="body1"
              component="p"
            >
              Süre: 8 Hafta
            </Typography>
            <Typography
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="body1"
              component="p"
            >
              İçerik: Python, ML algoritmaları, TensorFlow
            </Typography>
            <Typography
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
              variant="body1"
              component="p"
            >
              Kazanımlar :
            </Typography>
            <li
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
            >
              Veri setleriyle uygulama
            </li>
            <li
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
            >
              Proje geliştirme
            </li>
            <li
              style={{ color: darkTheme ? "#fff" : "" }}
              className="card-content-text"
            >
              AI kariyerine hazırlık
            </li>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="contained">
              Katıl
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
}

export default Content3;
