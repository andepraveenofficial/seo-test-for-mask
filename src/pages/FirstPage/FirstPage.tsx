import { Seo } from "../../util";

export const FirstPage = () => {
  return (
    <div>
      <Seo
        title="First Page - Custom SEO"
        description="This is the first page of the custom SEO application."
        keywords={["first page", "custom seo", "react"]}
      />
      <div>I am First Page</div>
    </div>
  );
};
