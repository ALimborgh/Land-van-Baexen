import React from 'react';
import { Box, Heading, Text, Link, Image } from '@chakra-ui/react';
import headerimg from '../Assets/Images/herenboeren_kopafbeelding.jpg';

const Contact = () => {
  return (
    <Box>
      <Image src={headerimg} alt="Land van Baexen Header" w="100%" />
      <Box as="main" maxW="container.xl" py={8} mx="auto">
        <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb={4}>Contact</Heading>
          <Text>
            Je kunt ons bereiken via <Link href="mailto:info@landvanbaexen.nl" color="blue.500" _hover={{ textDecoration: 'underline' }}>info@landvanbaexen.nl</Link>. 
          </Text>
        </Box>

        <Box as="section" mb={8} p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="md" mb={4}>Waar is de boerderij?</Heading>
            <Text textAlign="center" mb={4}>
              Land van Baexen, Beeselseweg, 6071 PM Swalmen
            </Text>
            <Box
              as="iframe"
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3109.06418211671!2d6.03113537716706!3d51.24378847175446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDE0JzM3LjYiTiA2wrAwMicwMS40IkU!5e1!3m2!1sen!2snl!4v1725012810049!5m2!1sen!2snl"
              width="100%"
              height="400px"
              border="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;