import React from 'react';
import { Box, Container, Heading, Text, Link, Image } from '@chakra-ui/react';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';

const Contact = () => {
  return (
    <Box>
      <Image src={headerimg} alt="Land van Beaxen Header" w="100%" />
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Contact</Heading>
          <Text>
            Je kunt ons bereiken via <Link href="mailto:info@landvanbaexen.nl" color="blue.500">info@landvanbaexen.nl</Link>. 
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;