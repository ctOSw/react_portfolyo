import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import menuCard1 from "../imgs/menu-card1.jpg";
import cafeBg from "../imgs/cafe-bg.jpg";

const menuItems = [
  {
    id: 1,
    title: "Espresso",
    description: "Strong and rich Italian-style coffee shot.",
    price: 25,
    imgSrc: menuCard1,
  },
  {
    id: 2,
    title: "Cappuccino",
    description: "Espresso with steamed milk and a creamy foam top.",
    price: 35,
    imgSrc: menuCard1,
  },
  {
    id: 3,
    title: "Latte",
    description: "Smooth blend of espresso and steamed milk.",
    price: 30,
    imgSrc: menuCard1,
  },
  {
    id: 4,
    title: "Mocha",
    description: "Espresso mixed with chocolate and steamed milk.",
    price: 40,
    imgSrc: menuCard1,
  },
  {
    id: 5,
    title: "Cheesecake",
    description: "Classic New York style creamy cheesecake.",
    price: 45,
    imgSrc: menuCard1,
  },
  {
    id: 6,
    title: "Chocolate Cake",
    description: "Moist chocolate sponge with rich ganache.",
    price: 50,
    imgSrc: menuCard1,
  },
  {
    id: 7,
    title: "Margherita Pizza",
    description: "Thin crust pizza topped with tomato, mozzarella, and basil.",
    price: 70,
    imgSrc: menuCard1,
  },
  {
    id: 8,
    title: "Pasta Carbonara",
    description: "Creamy pasta with pancetta, egg, and parmesan cheese.",
    price: 85,
    imgSrc: menuCard1,
  },
  {
    id: 9,
    title: "Turkish Salad",
    description: "Fresh vegetables with feta cheese and olives.",
    price: 55,
    imgSrc: menuCard1,
  },
];

function MenuContent() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cafeBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pb: 6,
        pt: 8,
      }}
    >
      <Container
        sx={{
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          color="#F8F4E1"
          textAlign={"center"}
          marginBottom={"30px"}
          variant="h3"
          fontSize={"4em"}
          fontWeight={"800"}
          display={"block"}
          component={"i"}
        >
          MENU
        </Typography>
        <Grid container spacing={2} paddingBottom={"1em"}>
          {menuItems.map((item) => (
            <Grid
              key={item.id}
              size={{
                lg: 4,
              }}
              x
            >
              <Card
                className="menu-card"
                sx={{
                  backgroundColor: "#6F4E37",
                  borderRadius: "8px 0px 8px 0px",
                  height: "100%",
                  opacity: "0.9",
                  transition: "all 0.5s ease",
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={item.imgSrc}
                  alt={item.title}
                />
                <CardContent>
                  <Typography fontSize={"3em"} variant="h4">
                    {item.title}
                  </Typography>
                  <Typography fontWeight={"600"}>{item.description}</Typography>
                  <Typography fontWeight={"600"} fontSize={"2.3em"}>
                    {item.price}$
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MenuContent;
