import { Seo } from "../../util";

export const ThirdPage = () => {
  return (
    <div>
      <Seo
        title="Third Page - Custom SEO"
        description="This is the third page of the custom SEO application."
        keywords={["third page", "custom seo", "react"]}
      />
      <div>I am Third Page</div>
    </div>
  );
};
