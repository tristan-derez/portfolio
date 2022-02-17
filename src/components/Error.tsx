import { Button, Flex, Image, Link } from "@chakra-ui/react";

const orange = "#F98227";

export const NoMatch = () => (
    <Flex direction="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Image src="/images/undraw_page_not_found.svg" />
        <Button color={orange} mt="50px" bg="none">
            <Link href="/">Go back to Home Page</Link>
        </Button>
    </Flex>
);
