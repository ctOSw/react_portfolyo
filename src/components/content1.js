import React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./content.css";
import codingSkill from "../img/coding-skill.png";
import { useSelector } from "react-redux";

function Content1() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { darkTheme } = useSelector((store) => store.darkTheme);

  // css özellikleri
  // css özellikleri

  return (
    <Box
      display={"flex"}
      flexDirection={matches ? "column-reverse" : "row"}
      gap={3}
      className="MuiBox-root-content"
    >
      <Stack gap={3}>
        <Typography
          sx={{ color: darkTheme ? "#fff" : "#639bd2 " }}
          className="content-title"
          variant="h3"
        >
          Yazılım dünyasına hoş geldiniz!
        </Typography>
        <Typography
          sx={{ color: darkTheme ? "#fff" : "#1f4d75 ", fontWeight: "500" }}
          variant="body1"
          component="p"
        >
          Frontend, Backend, AI ve daha fazlasını öğrenin!
        </Typography>

        <ul id="list-container">
          <Typography
            sx={{
              color: darkTheme ? "#d6e7f7" : "#1f4d75 ",
              fontWeight: "500",
            }}
            variant="h4"
          >
            Neden Bizi Tercih Etmelisiniz?
          </Typography>
          <li style={{ color: darkTheme && "#fff" }}>
            Alanında Uzman Eğitmenler → Gerçek sektörde deneyim kazanmış
            yazılımcılardan eğitim.
          </li>
          <li style={{ color: darkTheme && "#fff" }}>
            Güncel İçerik → Teknoloji trendlerini takip eden, sürekli
            güncellenen dersler.
          </li>
          <li style={{ color: darkTheme && "#fff" }}>
            Uygulamalı Eğitim → Teoriden çok pratiğe odaklanma, proje bazlı
            öğrenme.
          </li>
          <li style={{ color: darkTheme && "#fff" }}>
            Mentorluk ve Destek → Kurs süresince birebir mentorluk, topluluk
            desteği.{" "}
          </li>
          <li style={{ color: darkTheme && "#fff" }}>
            Kariyer Desteği → CV hazırlama, mock interview, iş başvurularında
            destek.
          </li>
          <li style={{ color: darkTheme && "#fff" }}>
            Esnek Öğrenme → Kendi hızında ilerleyebilme, tekrar izleme imkânı.
          </li>
          <li style={{ color: darkTheme && "#fff" }}>
            Topluluk ve Networking → Yazılım topluluğu, Discord/Slack grupları,
            birlikte proje yapma fırsatı.
          </li>
          <li style={{ color: darkTheme && "#fff" }}>
            Başarı Hikâyeleri → Eğitimden sonra işe giren ya da proje geliştiren
            öğrencilerin örnekleri.
          </li>
        </ul>
        <div style={{ textAlign: "center" }}>
          <button className="join-btn">Bize katıl</button>
        </div>
      </Stack>
      <Box>
        <img
          width={matches ? 200 : 400}
          src={codingSkill}
          alt="kodlama becerisi"
        />
      </Box>
    </Box>
  );
}

export default Content1;
