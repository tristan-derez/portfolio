import { GlobeIcon } from "@phosphor-icons/react";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "#/components/ui/tooltip";
import { m } from "#/paraglide/messages";
import { getLocale, locales, setLocale } from "#/paraglide/runtime";

const localeLabels: Record<string, string> = {
	en: "English",
	fr: "Français",
};

export default function LocaleSwitcher() {
	const currentLocale = getLocale();

	return (
		<TooltipProvider>
			<Tooltip>
				<DropdownMenu>
					<TooltipTrigger
						render={
							<DropdownMenuTrigger
								render={
									<Button
										variant="ghost"
										size="icon-lg"
										aria-label={m.switch_language()}
										suppressHydrationWarning
									/>
								}
							>
								<GlobeIcon size={32} weight="bold" />
							</DropdownMenuTrigger>
						}
					/>
					<TooltipContent side="left">{m.switch_language()}</TooltipContent>
					<DropdownMenuContent align="end">
						<DropdownMenuRadioGroup
							value={currentLocale}
							onValueChange={(locale) =>
								setLocale(locale as (typeof locales)[number])
							}
						>
							{locales.map((locale) => (
								<DropdownMenuRadioItem key={locale} value={locale}>
									{localeLabels[locale]}
								</DropdownMenuRadioItem>
							))}
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</Tooltip>
		</TooltipProvider>
	);
}
