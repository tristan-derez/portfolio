import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "#/components/header";
import { PageNotFound } from "#/components/not-found/page-not-found";
import { ThemeProvider } from "#/components/theme/theme-provider";
import { getLocale } from "#/paraglide/runtime";
import "../styles.css";
import { TooltipProvider } from "#/components/ui/tooltip";
import { initHighlighter } from "#/lib/markdown";

export const Route = createRootRoute({
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
					title: "Tristan Derez",
				},
			],
		};
	},
	scripts: () => [
		{
			children: `
      (function() {
        try {
          const stored = localStorage.getItem('vite-ui-theme');
          const valid = ['light', 'dark', 'system'].includes(stored) ? stored : 'system';
          if (valid === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.classList.add(systemTheme, 'system');
          } else {
            document.documentElement.classList.add(valid);
          }
        } catch (e) {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          document.documentElement.classList.add(systemTheme, 'system');
        }
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
			<ThemeProvider>
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
