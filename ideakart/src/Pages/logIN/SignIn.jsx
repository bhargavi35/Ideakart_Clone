import {
  Button,
  Container,
  Input,
  Spinner,
  Stack,
  Heading,
  Text,
  Checkbox,
  Link,
  Box,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/Navbar";

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };
  return (
    <>
      <Navbar />
      <Container maxW="md" marginLeft="6%">
        <Stack direction="column" textAlign="justify" gap="0.5rem">
          <Heading>Log in</Heading>
          <Text style={{ textAlign: "left" }}>Email</Text>
          <Input
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text style={{ textAlign: "left" }}>Password</Text>
          <Input placeholder="Enter password" type="password" />
          <Checkbox>Remember me </Checkbox>
          <Button bgColor="green" width="20%" onClick={handleSubmit}>
            Login
            {isLoading && <Spinner color="red.500" />}
          </Button>
          <Button
            style={{ color: "blue" ,width:"20%",backgroundColor:"white" }}
            className="button registerr"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
          <Button style={{ color: "blue",paddingLeft:"1%" ,width:"50%" ,backgroundColor:"white"}} className="button registerr">
            Forgot your Password?
          </Button>
        </Stack>
      </Container>

      <Footer />
    </>
  );
};
