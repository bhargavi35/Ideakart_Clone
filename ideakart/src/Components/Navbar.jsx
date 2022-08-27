import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
// import getBooks from "http://localhost:8080/api/products";

export const Navbar = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onToggle } = useDisclosure();

  const getBooks = async () => {
    setLoading(true);
    const data = await axios.get(
      "https://6300c49f290d71b581e28acd.mockapi.io/products"
    );
    setState(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Box backgroundColor={"rgb(40,116,240)"} width="100%">
      <Box width={{ lg: "85%", md: "95%" }} margin="auto">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Flex>
            <Box>
              <Link to={"/"}>
                <Text
                  fontFamily={"Georgia, serif"}
                  color={"yellow"}
                  paddingRight={{ lg: "3rem", md: "2rem", sm: "1rem" }}
                  margin="0.8rem"
                  fontSize="1.2rem"
                  letterSpacing={"1px"}
                >
                  IDEAKART
                </Text>
              </Link>
            </Box>
            <Box display={"flex"} alignItems="center">
              <Box>
                <Input
                  display={["none", "none", "block", "block", "block"]}
                  backgroundColor="white"
                  placeholder="Search"
                  w={{ lg: "22rem", md: "15rem" }}
                  h="2.2rem"
                  borderTopRightRadius="0"
                  borderBottomRightRadius="0"
                  onChange={(e) => setState(e.target.value)}
                />
              </Box>
              <Box>
                <Button
                  display={["none", "none", "block", "block", "block"]}
                  borderTopLeftRadius="0"
                  borderBottomLeftRadius="0"
                  padding="0.2rem 0.8rem"
                  h="2.2rem"
                  fontWeight={"200"}
                  textColor="#000000"
                  backgroundColor={"white"}
                  onClick={getBooks}
                >
                  <Link to="/search">Search</Link>
                </Button>
              </Box>
            </Box>
          </Flex>
          <Flex
            display={["none", "none", "flex", "flex", "flex"]}
            alignItems={"center"}
            gap="1rem"
            color={"white"}
            fontSize="1.0rem"
          >
            <Box>
              <Link to={"/about"}>About</Link>
            </Box>
            <Box>
              <Link to={"/contact"}>Contact</Link>
            </Box>
            <Box>
              <Link to={"/signin"}>Sign In</Link>
            </Box>
            <Box>
              <Link to={"/signup"}>Sign Up</Link>
            </Box>
          </Flex>

          <IconButton
            display={{ sm: "block", md: "none" }}
            color={"white"}
            onClick={onToggle}
            _hover={{ bg: "rgb(40,116,240)" }}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Box>
      {isOpen && (
        <Box>
          <Flex justifyContent="center">
            <Input
              width={"70%"}
              backgroundColor="white"
              placeholder="Search"
              h="2.2rem"
              borderTopRightRadius="0"
              borderBottomRightRadius="0"
            />
            <Button
              borderTopLeftRadius="0"
              borderBottomLeftRadius="0"
              padding="0.2rem 0.8rem"
              h="2.2rem"
              fontWeight={"300"}
              textColor="#000000"
              color={"black"}
              backgroundColor={"white"}
            >
              Search
            </Button>
          </Flex>
          <Box
            color={"white"}
            textAlign="center"
            width="fit-content"
            margin={"1rem auto"}
            paddingBottom="1rem"
          >
            <Box>
              <Link to={"/about"}>About</Link>
            </Box>
            <Box>
              <Link to={"/contact"}>Contact</Link>
            </Box>
            <Box>
              <Link to={"/signin"}>Sign In</Link>
            </Box>
            <Box>
              <Link to={"/signup"}>Sign Up</Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={0}
        >
          <Avatar
            name="Banu"
            src="https://avatars.dicebear.com/api/male/username.svg"
          />
        </MenuButton>
        <MenuList zIndex={"1000"}>
          <br />
          <Center>
            <Avatar
              size={"2xl"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
