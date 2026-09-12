import { Seo } from "../../util";

export const SecondPage = () => {
  return (
    <div>
      <Seo
        title="Second Page - Custom SEO"
        description="This is the second page of the custom SEO application."
        keywords={["second page", "custom seo", "react"]}
      />
      <div>I am Second Page</div>
    </div>
  );
};
