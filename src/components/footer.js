import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#1f4d75",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      <Grid container direction={matches ? "column" : ""} spacing={4}>
        {/* Logo & Açıklama */}
        <Grid size={matches ? 12 : 8} item xs={12} md={4}>
          <Typography variant="h5" fontWeight="bold">
            abc Academy
          </Typography>
          <Typography variant="body2" mt={2}>
            Yazılım dünyasına adım atmak isteyenler için modern, güncel ve proje
            odaklı eğitimler sunuyoruz.
          </Typography>
        </Grid>

        {/* Hızlı Menü */}
        <Grid size={matches ? 12 : 4} item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Hızlı Menü
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit" underline="hover">
              Anasayfa
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Eğitimler
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Bootcampler
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Projeler
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Yazılar
            </Link>
            <Link href="#" color="inherit" underline="hover">
              İletişim
            </Link>
          </Stack>
        </Grid>

        {/* Sosyal Medya & Bülten */}
        <Grid size={matches ? 12 : 8} item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Bültenimize Katıl
          </Typography>
          <Stack direction={matches ? "column" : "row"} spacing={1} mb={2}>
            <TextField
              placeholder="E-posta adresiniz"
              size="small"
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
            />
            <Button variant="contained" sx={{ backgroundColor: "#639bd2" }}>
              Abone Ol
            </Button>
          </Stack>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Bizi Takip Et
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <XIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Grid>

        <Grid size={matches ? 12 : 4} item xs={12} md={4}>
          <Stack height={"100%"} justifyContent={"space-evenly"}>
            <Typography>
              E-posta : <b>abcacademyinfo@gmail.com</b>
            </Typography>
            <Typography>Telefon : +90 555 555 55 55</Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* Alt kısım telif hakkı */}
      <Box
        textAlign="center"
        mt={5}
        borderTop="1px solid rgba(255,255,255,0.2)"
        pt={2}
      >
        <Typography variant="body2">
          © 2025 abc Academy. Tüm Hakları Saklıdır.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
