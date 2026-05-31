import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "#/components/header";
import { PageNotFound } from "#/components/not-found/page-not-found";
import { ThemeProvider } from "#/components/theme/theme-provider";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";
import "../styles.css";
import { TooltipProvider } from "#/components/ui/tooltip";
import { initHighlighter } from "#/lib/markdown";

export const Route = createRootRoute({
	beforeLoad: async () => {
		if (typeof document !== "undefined") {
			document.documentElement.setAttribute("lang", getLocale());
		}
	},
	loader: () => {
		initHighlighter();
	},
	head: () => {
		return {
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "description",
					content: m.seo_desc(),
				},
				{
					title: "Portfolio - Tristan",
				},
			],
		};
	},
	scripts: () => [
		{
			children: `
      (function() {
        const stored = localStorage.getItem('vite-ui-theme');
        const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const resolved = stored === 'dark' || stored === 'light' ? stored
          : stored === 'system' || !stored ? preferred
          : preferred;
	document.documentElement.classList.add(resolved);
      })()
    `,
		},
	],
	notFoundComponent: PageNotFound,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang={getLocale()} suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<TooltipProvider>
					<body className="antialiased flex flex-col min-h-svh max-w-lg mx-auto px-2.5 md:px-0">
						<Header />
						<main className="w-full">{children}</main>
						<Scripts />
					</body>
				</TooltipProvider>
			</ThemeProvider>
		</html>
	);
}
