import { createContext } from "react";
import type { ThemeProviderState } from "./types";

const initialState: ThemeProviderState = {
	userTheme: "system",
	appTheme: "light",
	setTheme: () => undefined,
};

export const ThemeProviderContext =
	createContext<ThemeProviderState>(initialState);
