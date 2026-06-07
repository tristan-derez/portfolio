import { createFileRoute, notFound } from "@tanstack/react-router";
import { allProjects } from "content-collections";
import { Markdown } from "#/components/markdown";
import { ProjectNotFound } from "#/components/not-found/project-not-found";
import { getLocale } from "#/paraglide/runtime";

export const Route = createFileRoute("/projects/$title")({
	loader({ params }) {
		const locale = getLocale();
		const project = allProjects.find(
			(p) => p.slug === params.title && p.locale === locale,
		);
		if (!project) throw notFound();
		return project;
	},
	component: ProjectDetail,
	notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
	const project = Route.useLoaderData();

	return (
		<article className="pb-12 max-w-2xl mx-auto w-full pt-12">
			<header>
				<p>{project.title}</p>
				<p>
					{new Date(project.date).toLocaleDateString(getLocale(), {
						month: "long",
						year: "numeric",
					})}
				</p>
			</header>
			<Markdown markup={project.markup} className="prose prose-compact" />
		</article>
	);
}
