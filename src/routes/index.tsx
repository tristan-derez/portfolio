import { createFileRoute } from "@tanstack/react-router";
import { ProfileDesc } from "#/components/profile-desc";
import { RecentProjects } from "#/components/projects/recent-projects";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex flex-col gap-10 flex-1 max-w-2xl mx-auto w-full py-12">
			<ProfileDesc />
			<RecentProjects />
		</div>
	);
}
