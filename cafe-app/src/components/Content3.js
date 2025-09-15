import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const workingHours = [
  {
    id: 1,
    day: "Sunday",
    hour: "09:00 – 22:00",
  },
  {
    id: 2,
    day: "Monday",
    hour: "09:00 – 22:00",
  },
  {
    id: 3,
    day: "Tuesday",
    hour: "09:00 – 22:00",
  },
  {
    id: 4,
    day: "Wednesday",
    hour: "09:00 – 22:00",
  },
  {
    id: 5,
    day: "Thursday",
    hour: "09:00 – 22:00",
  },
  {
    id: 6,
    day: "Friday",
    hour: "09:00 – 22:00",
  },
  {
    id: 7,
    day: "Saturday",
    hour: "10:00 – 23:00",
  },
];

function Content3() {
  return (
    <Box bgcolor={"#74512D"} paddingTop={"3em"} paddingBottom={"1em"}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 7,
        }}
      >
        <Stack gap={3}>
          <Box>
            <Typography color="#F8F4E1" variant="h3" fontWeight={"600"}>
              Addresss
            </Typography>
            <Typography fontSize={"22px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5477755.863909926!2d29.325158277353474!3d40.32512682684236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2sus!4v1756378168866!5m2!1str!2sus"
              width="400"
              height="350"
              title="location"
              style={{
                border: 0,
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Stack>
        <Box padding={"3em 0px"}>
          <Typography fontWeight={700} color="#F8F4E1" variant="h4">
            Our working hours
          </Typography>
          <Stack>
            {workingHours.map((item) => (
              <Typography fontSize={"1.5em"} fontWeight={600} key={item.id}>
                {item.day} : {item.hour}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Content3;
