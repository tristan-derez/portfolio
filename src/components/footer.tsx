import { Flex, HStack, Heading, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const FooterComponent = () => {
    return (
        <Flex direction="column" alignItems="center" justifyContent="flex-end" mt="150px" mb="5px">
            <HStack spacing="40px">
                <Link href="https://github.com/dreyzu" isExternal>
                    <FaGithub size="50px" />
                </Link>
                <Link href="https://linkedin.com/in/tristan-derez" isExternal>
                    <FaLinkedin size="50px" />
                </Link>
                <Link href="https://Twitter.com/doreizu" isExternal>
                    <FaTwitter size="50px" />
                </Link>
            </HStack>
        </Flex>
    );
};
