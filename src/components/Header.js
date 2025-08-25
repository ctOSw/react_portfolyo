import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./header.css";

import {
  Box,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SunnyIcon from "@mui/icons-material/Sunny";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { changeTheme } from "./themeSlice";
import SidebarMenu from "./sidebarMenu";

// autocomplate bilgileri
const courses = [
  {
    id: 1,
    title: "React ile Frontend Geliştirme",
    category: "Frontend",
    level: "Başlangıç",
    description:
      "Temel React konseptlerini öğrenin ve interaktif web uygulamaları geliştirin.",
  },
  {
    id: 2,
    title: "Node.js ile Backend Geliştirme",
    category: "Backend",
    level: "Orta",
    description:
      "Node.js ile sunucu tarafı geliştirmeyi öğrenin, API ve veritabanı bağlantıları kurun.",
  },
  {
    id: 3,
    title: "Fullstack Web Bootcamp",
    category: "Fullstack",
    level: "İleri",
    description:
      "Frontend ve Backend becerilerini birleştirerek tam teşekküllü web uygulamaları geliştirin.",
  },
  {
    id: 4,
    title: "Python ile Veri Bilimi",
    category: "Veri Bilimi",
    level: "Orta",
    description:
      "Python kullanarak veri analizi, görselleştirme ve temel makine öğrenimi tekniklerini öğrenin.",
  },
  {
    id: 5,
    title: "DevOps Temelleri",
    category: "DevOps",
    level: "Başlangıç",
    description:
      "Sürekli entegrasyon, deployment ve bulut ortamlarıyla tanışın.",
  },
  {
    id: 6,
    title: "React Native ile Mobil Uygulama Geliştirme",
    category: "Frontend",
    level: "Orta",
    description:
      "Tek kod tabanıyla Android ve iOS uygulamaları geliştirmeyi öğrenin.",
  },
  {
    id: 7,
    title: "AI ve Makine Öğrenimine Giriş",
    category: "Veri Bilimi",
    level: "Başlangıç",
    description:
      "Temel yapay zeka kavramları ve makine öğrenimi algoritmalarına giriş yapın.",
  },
];
// autocomplate bilgileri

function Header() {
  // state ve değişken  tanımlamaları

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl); // Menü açık mı?
  const [isShowMenu, setIsShowMenu] = useState({
    Eğitimler: false,
    Bootcampler: false,
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { darkTheme } = useSelector((store) => store.darkTheme);

  const dispatch = useDispatch();
  // state ve değişken  tanımlamaları

  // fonksiyonlar

  const filterOptions = createFilterOptions({
    stringify: (option) => `${option.title} ${option.description}`,
  });

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null); // Menü kapanır
  };

  const handleMouseEnter = (menuName) => {
    setIsShowMenu({ ...isShowMenu, [menuName]: true });
  };

  const handleMouseLeave = (menuName) => {
    setIsShowMenu({ ...isShowMenu, [menuName]: false });
  };

  const closeDropdown = (menuName) => {
    handleMouseLeave(menuName);
  };

  const toggleTheme = () => {
    dispatch(changeTheme());
    localStorage.setItem("darkTheme", !darkTheme);
  };

  // fonksiyonlar

  //  css özellikleri

  //  css özellikleri

  return (
    <header className={darkTheme && "header-theme"} id="app-header">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={isMobile ? "space-around" : "space-around"}
        sx={isMobile ? { padding: "15px 0px" } : { height: "70px" }}
      >
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <Typography variant="h4">Logo</Typography>
          <Box
            className={matches && "mobile-display"}
            position={"relative"}
            display={"flex"}
            gap={3}
          >
            <a
              href="#"
              style={{ color: darkTheme && "#fff" }}
              target="blank"
              className="header-link"
            >
              Anasayfa
            </a>

            <a
              href="#"
              style={{ color: darkTheme && "#fff" }}
              target="blank"
              className="header-link"
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget.innerText)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget.innerText)}
            >
              Eğitimler
            </a>
            <Box
              onMouseEnter={() => handleMouseEnter("Eğitimler")}
              onMouseLeave={() => handleMouseLeave("Eğitimler")}
              className={`drop-down-box ${isShowMenu.Eğitimler ? "show" : ""}`}
            >
              <MenuItem onClick={() => closeDropdown("Eğitimler")}>
                Başlangıç seviye frontend eğitimi
              </MenuItem>
              <MenuItem onClick={() => closeDropdown("Eğitimler")}>
                İleri python
              </MenuItem>
              <MenuItem onClick={() => closeDropdown("Eğitimler")}>
                Sıfırdan ileri seviye oyun geliştirme
              </MenuItem>
              <MenuItem onClick={() => closeDropdown("Eğitimler")}>
                Başlangıç seviye derin öğrenme ve veri bilimi
              </MenuItem>
              <MenuItem onClick={() => closeDropdown("Eğitimler")}>
                Temel java
              </MenuItem>
              <MenuItem onClick={() => closeDropdown("Eğitimler")}>
                Orta seviye flutter ile mobil uygulama geliştirme
              </MenuItem>
            </Box>
            <a
              href="#"
              style={{ color: darkTheme && "#fff" }}
              target="blank"
              className="header-link"
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget.innerText)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget.innerText)}
            >
              Bootcampler
            </a>
            <Box
              onMouseEnter={() => handleMouseEnter("Bootcampler")}
              onMouseLeave={() => handleMouseLeave("Bootcampler")}
              className={`drop-down-box bootcamps-dropdown ${
                isShowMenu.Bootcampler ? "show-bootcamps " : ""
              }`}
            >
              <MenuItem onClick={() => closeDropdown("Bootcampler")}>
                Sıfırdan ileri seviye siber güvenlik programı
              </MenuItem>

              <MenuItem onClick={() => closeDropdown("Bootcampler")}>
                Yapay zeka ve derin öğrenme programı
              </MenuItem>

              <MenuItem onClick={() => closeDropdown("Bootcampler")}>
                Full-stack web geliltirme programı
              </MenuItem>
            </Box>

            <a
              href="#"
              style={{ color: darkTheme && "#fff" }}
              target="blank"
              className="header-link"
            >
              Yazılar
            </a>
            <a
              href="#"
              style={{ color: darkTheme && "#fff" }}
              target="blank"
              className="header-link"
            >
              Projeler
            </a>
          </Box>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ display: matches ? "none" : "", width: "40%" }}
        >
          <Box sx={{ width: "70%" }}>
            <Autocomplete
              options={courses}
              getOptionLabel={(option) => option.label || option.title}
              filterOptions={(options, params) => {
                const filtered = filterOptions(options, params); // MUI default filtreleme
                const inputLower = params.inputValue.toLowerCase();

                // label'ı belirle
                return filtered.map((option) => {
                  if (option.title.toLowerCase().includes(inputLower)) {
                    return { ...option, label: option.title };
                  } else if (
                    option.description.toLowerCase().includes(inputLower)
                  ) {
                    return { ...option, label: option.description };
                  }
                  return option;
                });
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    backgroundColor: darkTheme
                      ? "#639bd2"
                      : "rgba(130, 130, 130, 0.1)",
                    borderRadius: "3px",
                    padding: "3px 6px ",
                  }}
                  {...params}
                  placeholder="Ara..."
                  fullWidth
                  variant="standard"
                  slotProps={{
                    input: {
                      sx: { color: darkTheme && "#fff" },
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment>
                          <IconButton sx={{ color: darkTheme && "#fff" }}>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
          </Box>

          <IconButton
            onClick={toggleTheme}
            sx={{ color: darkTheme ? "#fff" : "#347bc2" }}
          >
            {darkTheme ? <SunnyIcon /> : <NightlightRoundIcon />}
          </IconButton>

          <Box>
            <IconButton
              onClick={handleClick}
              sx={{ color: darkTheme ? "#fff" : "#347bc2 " }}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: "#639bd2",
                    color: "#fff",
                  },
                },
              }}
              className="menu-bg-color"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profilim</MenuItem>
              <MenuItem onClick={handleClose}>Ayarlar</MenuItem>
              <MenuItem onClick={handleClose}>Kurslarım</MenuItem>
              <MenuItem onClick={handleClose}>Notlarım</MenuItem>
              <MenuItem onClick={handleClose}>Bildirimler</MenuItem>
              <MenuItem onClick={handleClose}>Çıkış yap</MenuItem>
            </Menu>
          </Box>
        </Stack>

        {matches && <SidebarMenu />}
      </Stack>
    </header>
  );
}

export default Header;
