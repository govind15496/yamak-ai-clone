import React from "react";
import Content from "./Content";
import "./Templates.css";

function Templates() {
  return (
    <div className="templates">
      <h1 className="templates__header">Popular Content Templates</h1>
      <div className="templates__div1">
        <Content
          img="./images/blog.png"
          title=" Best Blog for your Content"
          para="Generate crisp into your blogs eye catching headline for your"
        />
        <Content
          img="./images/logotype.png"
          title="Google Ad’s Headline"
          para="Generates an optimised and eye catching headline for your"
        />
        <Content
          img="./images/youtube.png"
          title="Youtube Description"
          para="Generate creative youtube description to be used on youtube"
        />
      </div>

      <div className="templates__div2">
        <Content
          img="./images/email.png"
          title="Welcome Email Blog Section"
          para="Write compelling welcome email that get readers to engage"
        />
        <Content
          img="./images/copywriting.png"
          title=" Blog Section Blog Section"
          para="Generate blog sections for your blog Blog Section Blog Section"
        />
        <Content
          img="./images/youtube.png"
          title="Youtube Description "
          para="Generate creative youtube description to be used on youtube "
        />
      </div>
    </div>
  );
}

export default Templates;
