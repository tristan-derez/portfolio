import { createClientOnlyFn, createIsomorphicFn } from "@tanstack/react-start";
import { useCallback, useEffect, useState } from "react";
import { ThemeProviderContext } from "./theme-context";
import { type AppTheme, type UserTheme, UserThemeSchema } from "./types";

const themeStorageKey = "vite-ui-theme";

const getStoredUserTheme = createIsomorphicFn()
	.server((): UserTheme => "system")
	.client((): UserTheme => {
		const stored = localStorage.getItem(themeStorageKey);
		return UserThemeSchema.parse(stored);
	});

const setStoredTheme = createClientOnlyFn((theme: UserTheme) => {
	const validated = UserThemeSchema.parse(theme);
	localStorage.setItem(themeStorageKey, validated);
});

function getSystemTheme(): AppTheme {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function applyThemeToDOM(userTheme: UserTheme) {
	const root = document.documentElement;
	root.classList.remove("light", "dark", "system");
	const appTheme = userTheme === "system" ? getSystemTheme() : userTheme;
	root.classList.add(appTheme);
	if (userTheme === "system") {
		root.classList.add("system");
	}
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [userTheme, setUserTheme] = useState<UserTheme>(getStoredUserTheme);

	useEffect(() => {
		if (userTheme !== "system") return;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = () => applyThemeToDOM("system");
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [userTheme]);

	const appTheme: AppTheme =
		userTheme === "system" ? getSystemTheme() : userTheme;

	useEffect(() => {
		applyThemeToDOM(userTheme);
	}, [userTheme]);

	const setTheme = useCallback((newUserTheme: UserTheme) => {
		setUserTheme(newUserTheme);
		setStoredTheme(newUserTheme);
		applyThemeToDOM(newUserTheme);
	}, []);

	return (
		<ThemeProviderContext.Provider value={{ userTheme, appTheme, setTheme }}>
			{children}
		</ThemeProviderContext.Provider>
	);
}
