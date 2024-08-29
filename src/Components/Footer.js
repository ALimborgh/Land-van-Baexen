import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Text, Link, VStack, HStack} from '@chakra-ui/react';
import FooterYear from './FooterYear';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  return (
    <Box as="footer" bg="green.300" color="black" py={10} px={5}>
      <VStack spacing={10} align="stretch" maxW="1200px" mx="auto">
        <HStack justify="space-between" align="start" flexWrap="wrap" spacing={8}>
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
        </HStack>
        <Box textAlign="center" borderTop="1px" borderColor="gray.700" pt={4}>
          <FooterYear />
          <Text mt={2}>Alle rechten voorbehouden.</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Footer;
