import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route } from "react-router-dom";

import { AboutMeContainer } from "./components/aboutme";
import { HeaderComponent } from "./components/header";
import { ProjectContainer } from "./components/projects";

const queryClient = new QueryClient();

const theme = extendTheme({ config: { initialColorMode: "light" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column">
                    <HeaderComponent />
                    <AboutMeContainer />
                    <ProjectContainer />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
