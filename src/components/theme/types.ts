import { z } from "zod";

export const UserThemeSchema = z
	.enum(["light", "dark", "system"])
	.catch("system");
export const AppThemeSchema = z.enum(["light", "dark"]).catch("light");

export type UserTheme = z.infer<typeof UserThemeSchema>;
export type AppTheme = z.infer<typeof AppThemeSchema>;

export const themes = ["light", "dark", "system"] as const;

export interface ThemeProviderState {
	userTheme: UserTheme;
	appTheme: AppTheme;
	setTheme: (theme: UserTheme) => void;
}

export interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme?: UserTheme;
	storageKey?: string;
}
