import { Box, Center, Heading, Image, Link, Spacer, Wrap, WrapItem } from "@chakra-ui/react";

import { data } from "../data/data.js";

export const ProjectContainer = () => {
    return (
        <Spacer
            minHeight="100vh"
            w="100%"
            fontFamily="Zen Kaku Gothic Antique"
            mt={["100px", "100px", 0]}
            id="projects"
        >
            <Heading as="h2" fontFamily="Kirang Haerang" fontSize="100px">
                <Center>Projets</Center>
            </Heading>
            <Wrap spacing="40px" justify="center" mt="40px" ml="20px">
                {data.map((data, index) => (
                    <ProjectItem key={index} data={data} />
                ))}
            </Wrap>
        </Spacer>
    );
};

const ProjectItem = ({ data }) => {
    return (
        <Link href={data.adress}>
            <WrapItem borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Center flexDirection="column" width={["300px", "500px", "600px"]}>
                    <Image src={data.imageUrl} alt={data.imageAlt} />
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            m="2"
                        >
                            <Center>{data.title}</Center>
                            <Center>&bull;</Center>
                            <Center>{data.stackUsed}</Center>
                        </Box>
                    </Box>
                </Center>
            </WrapItem>
        </Link>
    );
};
