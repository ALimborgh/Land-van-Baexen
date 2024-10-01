import React from 'react';
import { Box, Heading, Text, VStack, HStack, Image, Grid, Link } from '@chakra-ui/react';
import FooterYear from './FooterYear';
import facebook from '../Assets/Images/Logo FB.jpg';
import instagram from '../Assets/Images/1685374745-5301-Instagram-Logo-scaled.jpg';

const Footer = () => {
  return (
    <Box as="footer" bg="#a1c33e" color="black" py={10} px={5}>
      <VStack spacing={10} align="stretch" maxW="1200px" mx="auto">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          <Box>
            <FooterYear />
            <Text mt={2}>Alle rechten voorbehouden.</Text>
          </Box>
          <Box>
            <Text>
              Wil je meer weten: mail aan{' '}
              <Link href="mailto:info@landvanbaexen.nl" color="blue.500">
                info@landvanbaexen.nl
              </Link>
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Volg Ons</Heading>
            <HStack spacing={4}>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src={facebook} alt="Facebook" boxSize="24px" _hover={{ opacity: 0.8 }} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="Instagram" boxSize="24px" _hover={{ opacity: 0.8 }} />
              </Link>
            </HStack>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Footer;