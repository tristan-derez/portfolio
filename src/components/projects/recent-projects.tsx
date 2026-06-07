import { Link } from "@tanstack/react-router";
import { allProjects } from "content-collections";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function RecentProjects() {
	const locale = getLocale();

	const recentProjects = allProjects
		.filter((p) => p.locale === locale)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);

	return (
		<section className="flex flex-col w-full gap-3">
			<h2 className="font-heading font-bold text-xl">
				{m.projects_title()}
				<span className="from-neutral-700"> ({recentProjects.length})</span>
			</h2>
			{recentProjects.map((project) => (
				<Link
					to="/projects/$title"
					params={{ title: project.slug }}
					key={project.slug}
				>
					<Card className="hover:bg-accent">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{project.desc}</CardDescription>
						</CardHeader>
					</Card>
				</Link>
			))}
		</section>
	);
}
