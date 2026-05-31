import { CircleNotchIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import parse, {
	type DOMNode,
	domToReact,
	Element,
	type HTMLReactParserOptions,
} from "html-react-parser";
import { useEffect, useState } from "react";
import { type MarkdownResult, renderMarkdown } from "#/lib/markdown";

type MarkdownProps = {
	content: string;
	className?: string;
};

export function Markdown({ content, className }: MarkdownProps) {
	const [result, setResult] = useState<MarkdownResult | null>(null);

	useEffect(() => {
		renderMarkdown(content).then(setResult);
	}, [content]);

	if (!result) {
		return (
			<div className="flex items-center justify-center min-h-40 text-amber-500">
				<CircleNotchIcon size={32} className="animate-spin" />
			</div>
		);
	}

	const options: HTMLReactParserOptions = {
		replace: (domNode) => {
			if (domNode instanceof Element) {
				if (domNode.name === "a") {
					const href = domNode.attribs.href;
					if (href?.startsWith("/")) {
						return (
							<Link to={href}>
								{domToReact(domNode.children as DOMNode[], options)}
							</Link>
						);
					}
				}

				if (domNode.name === "img") {
					return (
						<img
							{...domNode.attribs}
							loading="lazy"
							className="rounded-lg shadow-md aspect-video"
							alt=""
						/>
					);
				}
			}
		},
	};

	return <div className={className}>{parse(result.markup, options)}</div>;
}
