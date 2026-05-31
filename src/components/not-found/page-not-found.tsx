import { Link } from "@tanstack/react-router";
import { m } from "#/paraglide/messages";

export function PageNotFound() {
	return (
		<div className="fixed inset-0 flex items-center justify-center pointer-events-none">
			<div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto w-full pointer-events-auto">
				<h1 className="text-2xl font-bold">{m.page_not_found_title()}</h1>
				<p className="text-center">{m.page_not_found_desc()}</p>
				<Link to="/" className="text-link hover:underline">
					{m.page_not_found_btn()}
				</Link>
			</div>
		</div>
	);
}
