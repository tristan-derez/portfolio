import { m } from "#/paraglide/messages";

export function ProfileDesc() {
	return (
		<div className="flex flex-col gap-3">
			<h1 className="font-heading font-bold text-xl">{m.profile_title()}</h1>
			<div className="flex flex-col gap-2 text-sm text-pretty">
				<p>{m.profile_description()}</p>
				<p>{m.profile_description_2()}</p>
				<p>
					{m.contact_section_p()}
					<a
						href="https://x.com/doreizu"
						target="_blank"
						rel="noopener"
						className="text-link underline"
					>
						<strong>X</strong>
					</a>
					, {m.contact_section_n()}
					<a href="mailto:hello@dreyz.me" className="text-link underline">
						<strong>{m.contact_mail()}</strong>
					</a>
					.
				</p>
			</div>
		</div>
	);
}
