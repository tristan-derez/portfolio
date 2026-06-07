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
	const { appTheme, setTheme } = useTheme();

	const toggleTheme = () => {
		const next = appTheme === "light" ? "dark" : "light";
		if (typeof document !== "undefined" && "startViewTransition" in document) {
			document.startViewTransition(() => setTheme(next));
		} else {
			setTheme(next);
		}
	};

	const isLight = appTheme === "light";
	const tooltipLabel = isLight ? m.switch_to_dark() : m.switch_to_light();

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					render={
						<Button
							variant="ghost"
							size="icon-lg"
							onClick={toggleTheme}
							aria-label={tooltipLabel}
							suppressHydrationWarning
						/>
					}
					suppressHydrationWarning
				>
					<SunIcon
						className="theme-icon theme-icon-light"
						size={32}
						weight="bold"
					/>
					<MoonIcon
						className="theme-icon theme-icon-dark"
						size={32}
						weight="bold"
					/>
				</TooltipTrigger>
				<TooltipContent side="bottom" suppressHydrationWarning>
					{tooltipLabel}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
