import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "#/components/ui/tooltip";
import { m } from "#/paraglide/messages";
import { useTheme } from "./use-theme";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	const effectiveTheme: "light" | "dark" =
		theme === "system"
			? typeof window !== "undefined" &&
				window.matchMedia("(prefers-color-scheme: light)").matches
				? "light"
				: "dark"
			: theme;

	const toggleTheme = () => {
		if (typeof window === "undefined") return;

		const apply = () => setTheme(effectiveTheme === "light" ? "dark" : "light");

		if (!document.startViewTransition) {
			apply();
			return;
		}

		document.startViewTransition(apply);
	};

	const isLight = effectiveTheme === "light";
	const tooltipLabel = isLight ? m.switch_to_dark() : m.switch_to_light();

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					render={
						<Button
							variant="ghost"
							size="icon-lg"
							aria-label={tooltipLabel}
							onClick={toggleTheme}
							suppressHydrationWarning
						/>
					}
					suppressHydrationWarning
				>
					{isLight ? (
						<SunIcon size={32} weight="bold" suppressHydrationWarning />
					) : (
						<MoonIcon size={32} weight="bold" suppressHydrationWarning />
					)}
				</TooltipTrigger>
				<TooltipContent side="bottom" suppressHydrationWarning>
					{tooltipLabel}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
