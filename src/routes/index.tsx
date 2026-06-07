import { createFileRoute } from "@tanstack/react-router";
import { allProjects } from "content-collections";
import { ProfileDesc } from "#/components/profile-desc";
import { RecentProjects } from "#/components/projects/recent-projects";
import { getLocale } from "#/paraglide/runtime";

export const Route = createFileRoute("/")({
	loader() {
		const locale = getLocale();
		return allProjects.filter((p) => p.locale === locale);
	},
	component: App,
});

function App() {
	const projects = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-10 flex-1 max-w-2xl mx-auto w-full py-12">
			<ProfileDesc />
			<RecentProjects projects={projects} />
		</div>
	);
}
