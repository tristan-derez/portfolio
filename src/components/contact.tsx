import "@fontsource/anonymous-pro";

import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Textarea,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const Contact = (props) => {
    const [status, setStatus] = useState("Submit");
    const toast = useToast();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        console.log(response);
        if (response.status === 200) {
            setStatus("Submit");
            let result = await response.json();
            toast({
                title: result.status,
                status: "success",
                duration: 9000,
                isClosable: true,
            });
        } else
            toast({
                title: "Une erreur est survenue",
                status: "warning",
                duration: 9000,
                isClosable: true,
            });
    };
    const background = useColorModeValue("orange.400", "orange.600");
    return (
        <Stack h="100vh" alignItems="center" justifyContent="center" {...props} fontFamily="Anonymous Pro">
            <Heading>Contactez-moi</Heading>
            <form onSubmit={handleSubmit}>
                <Box width={["320px", "450px", "600px", "800px"]} mt="40px">
                    <Box>
                        <FormControl id="first-name" isRequired />
                        <FormLabel>Nom:</FormLabel>
                        <Input placeholder="Nom" name="name" focusBorderColor={background} />
                    </Box>
                    <Box>
                        <FormControl id="email" isRequired />
                        <FormLabel>Email:</FormLabel>
                        <Input placeholder="Email" name="email" type="email" focusBorderColor={background} />
                    </Box>
                    <Box>
                        <FormControl id="message" isRequired />
                        <FormLabel>Votre message:</FormLabel>
                        <Textarea placeholder="Message" name="message" type="message" focusBorderColor={background} />
                    </Box>

                    <Button type="submit" bg={background} mt="15px">
                        Envoyer
                    </Button>
                </Box>
            </form>
        </Stack>
    );
};
