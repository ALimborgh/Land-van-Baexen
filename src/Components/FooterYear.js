import { Box, Text } from '@chakra-ui/react';

const FooterYear = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" color="black" py={4} textAlign="center">
      <Text id="year">Land van Baexen - Samen duurzaam voedsel produceren © {currentYear}</Text>
    </Box>
  );
};

export default FooterYear;
