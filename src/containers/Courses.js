import React from "react";
import { Heading1 } from "../components/Typography/Headlines/Headings";
import Box from "../components/Box/Box";

const Courses = () => {
  return (
    <section>
      <Heading1 as="h1" text="Courses" />
      <Box p="10px">Box test</Box>
      <Box pb="100px">Box test222</Box>

      <Box m="20px" p="20px">
        Box test margin
      </Box>
      <Box color="red" bgColor="navy">
        Box test222
      </Box>
    </section>
  );
};

export default Courses;
