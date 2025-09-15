import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Rating,
  CardActions,
  Button,
  Avatar,
} from "@mui/material";
import popularCard1 from "../imgs/popular-card1.jpg";

const popularItems = [
  {
    id: 1,
    title: "Tiramisu",
    description:
      "Italian classic dessert with layers of mascarpone and espresso-soaked ladyfingers.",
    price: 55,
    rating: 4.8,
    imgSrc: popularCard1,
    reviews: [
      {
        id: 1,
        author: "Alice",
        text: "Absolutely loved it! Perfect sweetness.",
      },
      { id: 2, author: "John", text: "Best tiramisu I've had in town." },
    ],
  },
  {
    id: 2,
    title: "Avocado Toast",
    description:
      "Crispy sourdough topped with smashed avocado, cherry tomatoes, and olive oil.",
    price: 40,
    rating: 4.2,
    imgSrc: popularCard1,
    reviews: [
      { id: 1, author: "Maria", text: "Fresh and tasty, a perfect breakfast." },
      { id: 2, author: "Tom", text: "Simple yet delicious!" },
    ],
  },
  {
    id: 3,
    title: "Caramel Frappé",
    description:
      "Iced blended coffee with caramel syrup and whipped cream topping.",
    price: 38,
    rating: 4.5,
    imgSrc: popularCard1,
    reviews: [
      {
        id: 1,
        author: "Emma",
        text: "Loved the caramel flavor, super refreshing.",
      },
      { id: 2, author: "Liam", text: "Perfect iced coffee for a hot day." },
    ],
  },
];

function MostPopulerContent() {
  return (
    <Box bgcolor={"#AF8F6F"} paddingTop={"50px"}>
      <Container>
        <Typography
          color="#F8F4E1"
          textAlign={"center"}
          display={"block"}
          component={"i"}
          variant="h3"
        >
          The most popular
        </Typography>
        <Stack
          marginTop={"20px"}
          direction={"row"}
          justifyContent={"center"}
          padding={"1em"}
          gap={5}
        >
          {popularItems.map((item) => (
            <Card
              sx={{
                width: "100%",
                backgroundColor: "#74512D",
              }}
              key={item.id}
            >
              <CardMedia image={item.imgSrc} component="img" height="180" />
              <CardContent>
                <Typography fontSize={"3em"} variant="h4">
                  {item.title}
                </Typography>
                <Typography fontWeight={"600"}>{item.description}</Typography>
                <Typography fontWeight={"600"} fontSize={"2.3em"}>
                  {item.price}$
                </Typography>

                <Stack direction="column" spacing={2} mt={2}>
                  {item.reviews.map((review) => (
                    <Stack
                      key={review.id}
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Avatar sx={{ width: 30, height: 30 }} />
                      <Typography
                        fontSize={"17px"}
                        fontWeight={"600"}
                        variant="body2"
                        width={"100%"}
                      >
                        <strong
                          style={{
                            fontSize: "22px",
                          }}
                        >
                          {review.author}:
                        </strong>{" "}
                        {review.text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Rating
                  sx={{
                    marginTop: "20px",
                  }}
                  readOnly
                  value={item.rating}
                  precision={0.5}
                />
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    backgroundColor: "#543310",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                  variant="contained"
                >
                  EAT NOW
                </Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default MostPopulerContent;
