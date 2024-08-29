import React from 'react';
import { Box, Container, Heading, Text, Link } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box>
      <Container as="main" maxW="container.xl" py={8}>
        <Box as="section" mb={8}>
          <Heading as="h2" size="md">Contact</Heading>
          <Text>
            Er is een lokatie gevonden en vanaf nu kan je ons bereiken op <Link href="mailto:info@landvanbaexen.nl" color="blue.500">info@landvanbaexen.nl</Link>. 
            De website wordt zo snel mogelijk aangepast, neem gerust contact met ons op bij vragen!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;