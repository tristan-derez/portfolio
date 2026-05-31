import { Link } from "@tanstack/react-router";
import { ThemeSwitcher } from "#/components/theme/theme-switcher";
import { Separator } from "@/components/ui/separator";
import { m } from "@/paraglide/messages";
import LocaleSwitcher from "./locale-switcher";

export default function Header() {
	return (
		<header>
			<nav className="flex justify-between w-full pt-10 items-center h-16 max-w-2xl mx-auto">
				<div className="flex gap-2">
					<Link to="/">{m.nav_link_home()}</Link>
					<Separator orientation="vertical" className="w-0.5 my-0.5" />
					<Link to="/projects">{m.nav_link_projects()}</Link>
				</div>
				<div className="flex gap-2">
					<LocaleSwitcher />
					<ThemeSwitcher />
				</div>
			</nav>
		</header>
	);
}
