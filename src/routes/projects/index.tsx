import { createFileRoute, Link } from "@tanstack/react-router";
import { allProjects } from "content-collections";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { getLocale } from "#/paraglide/runtime";

export const Route = createFileRoute("/projects/")({
	loader() {
		const locale = getLocale();
		return allProjects.filter((p) => p.locale === locale);
	},
	component: ProjectsIndex,
});

function ProjectsIndex() {
	const projects = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-2 max-w-2xl mx-auto w-full pt-12">
			{projects.map((project) => (
				<Link
					key={project.title}
					to="/projects/$title"
					params={{ title: project.slug }}
				>
					<Card className="hover:bg-accent">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{project.desc}</CardDescription>
						</CardHeader>
						<CardFooter>
							{new Date(project.date).toLocaleDateString(getLocale(), {
								month: "numeric",
								year: "numeric",
							})}
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}
