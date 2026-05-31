import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { toString as hastToString } from "hast-util-to-string";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { getSingletonHighlighter } from "shiki";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export type MarkdownHeading = {
	id: string;
	text: string;
	level: number;
};

export type MarkdownResult = {
	markup: string;
	headings: Array<MarkdownHeading>;
};

let highlighterPromise: ReturnType<typeof getSingletonHighlighter> | null =
	null;

function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = getSingletonHighlighter({
			themes: ["tokyo-night"],
			langs: ["typescript", "tsx", "bash", "json"],
		});
	}
	return highlighterPromise;
}

export function initHighlighter(): void {
	getHighlighter();
}

export async function renderMarkdown(content: string): Promise<MarkdownResult> {
	const headings: Array<MarkdownHeading> = [];
	const highlighter = await getHighlighter();

	const result = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, {
			behavior: "wrap",
			properties: { className: ["anchor"] },
		})
		.use(rehypeShikiFromHighlighter, highlighter, { theme: "tokyo-night" })
		.use(() => (tree) => {
			// biome-ignore lint/suspicious/noExplicitAny: node type is dynamic from HAST tree visit
			visit(tree, "element", (node: any) => {
				if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)) {
					headings.push({
						id: node.properties?.id || "",
						text: hastToString(node),
						level: parseInt(node.tagName.charAt(1), 10),
					});
				}
			});
		})
		.use(rehypeStringify)
		.process(content);

	return {
		markup: String(result),
		headings,
	};
}
