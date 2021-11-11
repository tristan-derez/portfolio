import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { HeaderComponent } from "./components/header";
import { ProjectContainer } from "./components/projects";

const queryClient = new QueryClient();

const theme = extendTheme({ config: { initialColorMode: "light" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column" boxSize="100%">
                    <HeaderComponent />
                    <ProjectContainer />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
