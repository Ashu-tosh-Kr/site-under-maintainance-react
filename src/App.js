import React from 'react';
import { Center, ChakraProvider, Heading, Text, theme } from '@chakra-ui/react';
import Cogs from './assets/Cogs';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center bg="teal.900" h="100vh" color="white">
        <Heading size="4xl">
          Oops! <Text fontSize="4xl">Site under maintainance.</Text>
        </Heading>

        <Cogs />
      </Center>
    </ChakraProvider>
  );
}

export default App;
