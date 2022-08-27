import {
  Button,
  Container,
  Input,
  Spinner,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, mobile, email, password, rePassword } = user;
    if (name && mobile && email && password && rePassword === password) {
      // console.log(user.name)
      // console.log(user.email)
      navigate("/signIn");
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: "Times" }}>
        <Container maxW="md" marginLeft="6%">
          <Stack direction="column" textAlign="justify" gap="0.5rem">
            <Heading>Sign up</Heading>
            <Text style={{ textAlign: "left" }}>Name</Text>
            <Input placeholder="Enter Name" onChange={handleChange} />
            <Text style={{ textAlign: "left" }}>Mobile Number</Text>
            <Input placeholder="Enter Mobile Number" onChange={handleChange} />
            <Text style={{ textAlign: "left" }}>Email</Text>
            <Input placeholder="Enter email" onChange={handleChange} />
            <Text style={{ textAlign: "left" }}>
              Password
              <span style={{ fontStyle: "italic", fontSize: "16px" }}>
                (6 characters minimum)
              </span>
            </Text>
            <Input placeholder="Enter password" type="password" />

            <Text style={{ textAlign: "left" }}>Password confirmation</Text>
            <Input placeholder="Enter password" type="password" />

            <Button bgColor="green" width="20%">
              Sign up
              {isLoading && <Spinner color="red.500" />}
            </Button>
            <Button
              style={{
                color: "blue",
                width: "20%",
                marginLeft: "1%",
                cursor: "pointer",
                backgroundColor: "white",
              }}
              className="button log"
              onClick={() => navigate("/signIn")}
            >
              Login
            </Button>
          </Stack>
        </Container>
      </div>
      <Footer />
    </>
  );
};
