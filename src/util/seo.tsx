import type { ReactNode } from "react";

type SeoProps = {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	children?: ReactNode;
};

export const Seo = ({
	title,
	description,
	keywords = [],
	image,
	children,
}: SeoProps) => {
	return (
		<>
			{/* Basic Meta Tags */}
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			{keywords.length > 0 && (
				<meta name="keywords" content={keywords.join(", ")} />
			)}

			{/* Open Graph Tags (Facebook, Instagram, LinkedIn) */}
			{title && <meta property="og:title" content={title} />}
			{description && <meta property="og:description" content={description} />}
			<meta property="og:type" content="website" />
			{image && <meta property="og:image" content={image} />}

			{/* Twitter Cards */}
			<meta name="twitter:card" content="summary_large_image" />
			{title && <meta name="twitter:title" content={title} />}
			{description && <meta name="twitter:description" content={description} />}
			{image && <meta name="twitter:image" content={image} />}

			{/* Any additional custom tags */}
			{children}
		</>
	);
};

