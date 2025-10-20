import React, { useEffect } from "react";

const CommentContent: React.FC = () => {
  useEffect(() => {
    // Elimina cualquier instancia previa del script (por si React lo vuelve a montar)
    const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
    if (existingScript) existingScript.remove();

    // Crea el script de Giscus
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "AndrewLopezHerrera/Comentarios");
    script.setAttribute("data-repo-id", "R_kgDOQFe4QA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOQFe4QM4Cw1sU");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", "AndrewLopezHerrera/Comentarios");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "es");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    // Inserta el script en el contenedor
    const giscusContainer = document.getElementById("giscus-container");
    if (giscusContainer) {
      giscusContainer.innerHTML = ""; // Limpia el contenedor antes de insertar
      giscusContainer.appendChild(script);
    }
  }, []);

  return (
    <section>
      <h2>Comentarios</h2>
      <div id="giscus-container" />
    </section>
  );
};

export default CommentContent;