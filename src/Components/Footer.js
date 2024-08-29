import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Text, Link, VStack, HStack, Image, Grid} from '@chakra-ui/react';
import FooterYear from './FooterYear';
import facebook from '../Assets/Images/Logo FB.jpg';
import instagram from '../Assets/Images/1685374745-5301-Instagram-Logo-scaled.jpg';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <Box as="footer" bg="#a1c33e" color="black" py={10} px={5}>
      <VStack spacing={10} align="stretch" maxW="1200px" mx="auto">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={80}>
          <Box>
            <Heading as="h3" size="md" mb={4}>Over ons</Heading>
            <Text mb={4}></Text>
            <Link 
              as={RouterLink} 
              to="About" 
              onClick={scrollToTop} 
            >
              Lees meer
            </Link>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Direct naar</Heading>
            <VStack align="start" spacing={2}>
              <Link as={RouterLink} to="/" onClick={scrollToTop}>Home</Link>
              <Link as={RouterLink} to="About" onClick={scrollToTop}>About</Link>
              <Link as={RouterLink} to="News" onClick={scrollToTop}>News</Link>
              <Link as={RouterLink} to="What" onClick={scrollToTop}>What</Link>
              <Link as={RouterLink} to="Q&A" onClick={scrollToTop}>Q&A</Link>
              <Link as={RouterLink} to="Contact" onClick={scrollToTop}>Contact</Link>
            </VStack>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Volg Ons</Heading>
            <HStack spacing={4}>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <Image src={facebook} alt="Facebook" boxSize="24px" _hover={{ opacity: 0.8 }} />
              </Link>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="Instagram" boxSize="24px" _hover={{ opacity: 0.8 }} />
              </Link>
            </HStack>
          </Box>
        </Grid>
        <Box textAlign="center" borderTop="1px" borderColor="gray.700" pt={4}>
          <FooterYear />
          <Text mt={2}>Alle rechten voorbehouden.</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Footer;
