import React from "react";
import { Heading1 } from "../components/Typography/Headlines/Headings";
import Box from "../components/Box/Box";
import theme from "../theme/AdminTheme";

const Courses = () => {
  return (
    <section>
      <Heading1 as="h1" text="Courses" />
      <Box p="10px">Box test</Box>
      <Box mb="100px">Box test222</Box>
      <Box m="20px" p="20px">
        Box test margin
      </Box>
      <Box color="red" bgColor="navy" border="red 2px solid">
        Box test222
      </Box>
      <Box boxShadow={theme.boxShadows[1]}>testing shadow depths</Box>
    </section>
  );
};

export default Courses;
