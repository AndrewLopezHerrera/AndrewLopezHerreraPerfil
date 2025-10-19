import React, { useEffect } from "react";

const CommentContent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "AndrewLopezHerrera/Comentarios");
    script.setAttribute("data-repo-id", "TU_REPO_ID");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "TU_CATEGORY_ID");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    document.getElementById("giscus-container")?.appendChild(script);
  }, []);

  return (
    <section>
      <h2>Comentarios</h2>
      <div id="giscus-container" />
    </section>
  );
};

export default CommentContent;