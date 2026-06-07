import { Link } from "@tanstack/react-router";
import parse, {
	type DOMNode,
	domToReact,
	Element,
	type HTMLReactParserOptions,
} from "html-react-parser";

type MarkdownProps = {
	markup: string;
	className?: string;
};

export function Markdown({ markup, className }: MarkdownProps) {
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

	return <div className={className}>{parse(markup, options)}</div>;
}
