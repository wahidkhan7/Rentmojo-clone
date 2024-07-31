import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.svg';
import Login from './Login';
import Signup from './Signup';
import './Navbar.css';
import './LoginSignup.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();

  const [scrollY, setScrollY] = React.useState(0);
  const logoSrc = useBreakpointValue({
    base: logo2, // Small devices
    md: logo, // Medium and up devices
  });

  const buttonSize = useBreakpointValue({
    base: 'sm', // Small devices
    md: 'md', // Medium devices and up
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openSignupModal = () => {
    onLoginClose(); // Close login modal if open
    onSignupOpen(); // Open signup modal
  };

  const openLoginModal = () => {
    onSignupClose(); // Close signup modal if open
    onLoginOpen(); // Open login modal
  };

  return (
    <Box>
      <Box
        position="fixed"
        width="100%"
        top={0}
        zIndex={1000}
        textAlign={'center'}
        bg={useColorModeValue('white', 'gray.800')}
        transition="box-shadow 0.2s"
        boxShadow={scrollY > 0 ? 'md' : 'none'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mx="auto" maxW="1200px" px={4}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <img src={logoSrc} alt="Logo" style={{ height: '40px' }} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
            >
              <Menu>
                <HStack spacing={2}>
                  <span>Bangalore</span>
                  <MenuButton as={IconButton} icon={<AiOutlineDown />} />
                </HStack>
                <MenuList>
                  <MenuItem>Delhi</MenuItem>
                  <MenuItem>Mumbai</MenuItem>
                  <MenuItem>Kolkata</MenuItem>
                  <MenuItem>Chennai</MenuItem>
                </MenuList>
              </Menu>
              <InputGroup width={{ base: '200px', md: '600px' }}>
                <Input type="text" placeholder="Search for products" />
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button variant="ghost" leftIcon={<FiShoppingCart />}>
              Cart
            </Button>
            <Button
              onClick={onLoginOpen}
              colorScheme="red"
              size={buttonSize}
              ml={4}
              className="login"
              display={{ base: 'none', md: 'inline-flex' }}
              sx={{
                ':hover': {
                  bg: 'white',
                  color: 'red.500',
                  border: '1px solid',
                  borderColor: 'red.500',
                },
              }}
            >
              LOGIN / SIGNUP
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  width="100%"
                  display="flex"
                  alignItems="center"
                >
                  <span className="loc">Bangalore</span>
                  <IconButton colorScheme="#E2E8F0" icon={<AiOutlineDown />} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Delhi</MenuItem>
                  <MenuItem>Mumbai</MenuItem>
                  <MenuItem>Kolkata</MenuItem>
                  <MenuItem>Chennai</MenuItem>
                </MenuList>
              </Menu>
              <InputGroup width="100%">
                <Input type="text" placeholder="Search for products" />
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputRightElement>
              </InputGroup>
              <Box>
                <Button
                  onClick={onLoginOpen}
                  colorScheme="red"
                  size={buttonSize}
                  sx={{
                    ':hover': {
                      bg: 'white',
                      color: 'red.500',
                    },
                  }}
                >
                  LOGIN / SIGNUP
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent id='modalFk' className="login-modal-content">
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            <Login onClose={onLoginClose} /> {/* Pass onClose as a prop */}
            <p>Don't have an account? 
              <Button colorScheme='blue' variant={'link'} onClick={openSignupModal}>Create one</Button></p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onLoginClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={isSignupOpen} onClose={onSignupClose}>
        <ModalOverlay />
        <ModalContent id='modalFk' className="login-modal-content">
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            <Signup 
              onClose={() => {
                onSignupClose(); // Close the signup modal
                openLoginModal(); // Open the login modal
              }} 
            /> {/* Pass a function to handle the modal transition */}
            <p>Already have an account?
              <Button colorScheme='blue' variant={'link'} onClick={openLoginModal}>Login</Button></p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onSignupClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
