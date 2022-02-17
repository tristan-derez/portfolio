import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Contact } from "./components/ContactComponent";
import { Cursor } from "./components/Cursor";
import { NoMatch } from "./components/Error";
import { HomePage } from "./components/HomePage";

const queryClient = new QueryClient();

const theme = extendTheme({ config: { initialColorMode: "light" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="contact" element={<Contact />} />
                            {/* act like a catch-all route for URLs that have no explicit routes*/}
                            <Route path="*" element={<NoMatch />} />
                        </Routes>
                    </BrowserRouter>
                    <Cursor />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
