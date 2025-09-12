import imageProfile from "../assets/profile/profile_image.jpg"

const Presentation : React.FC = () => {
    return (
      <section>
         <section className="containerPresentationBar">
            <div className="presentationBar">
               <div className="spacePresentationBar"/>
               <div className="containerPresentationImage">
                  <img
                     src={imageProfile}
                     className="presentationImage"
                  />
               </div>
               <div className="containerPresentationName">
                  <label className="presentationName">
                     Andrew Denilson López Herrera
                  </label>
               </div>
            </div>
         </section>
         <section>
            <h2>Biografía</h2>
            <p>Hola, soy Andrew Denilson López Herrera, un apasionado por la tecnología y el desarrollo de software. Me encanta aprender sobre nuevas herramientas y lenguajes de programación, y siempre estoy buscando mejorar mis habilidades.</p>
         </section>
      </section>
    );
}

export default Presentation;