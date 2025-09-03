import "../../GeneralStyles.css"
import { Button, Card, Carousel, Divider, Image } from 'antd';
import image1 from '../../assets/mipscompiler/Image1.png'
import image2 from '../../assets/mipscompiler/Image2.png'
import image3 from '../../assets/mipscompiler/Image3.png'
import image4 from '../../assets/mipscompiler/Image4.png'
import image5 from '../../assets/mipscompiler/Image5.png'
import image6 from '../../assets/mipscompiler/Image6.png'
import { useState } from "react";
import { GithubOutlined } from '@ant-design/icons';

const MIPSCompiler : React.FC = () => {

  const [isMobile] = useState<boolean>(window.innerWidth <= 1080);

  const selectClassSizeCarousel = () : string => {
    if (isMobile) {
      return "container_carousel_mobile";
    }
    return "container_carousel";
  }

  return (
    <>
      <div className="container_title_project">
        <h1>Compilador MIPS</h1>
      </div>
      <div>
        <p>
          Este proyecto de curso de Compiladores e Intérpretes consiste en el diseño y construcción
          de un lenguaje de programación imperativo, ligero y de tipado fuerte, orientado a la
          configuración de chips y sistemas empotrados. El objetivo principal es definir una 
          gramática BNF que permita describir la sintaxis y estructura de dicho lenguaje, 
          incluyendo la creación de funciones, bloques de código, estructuras de control, 
          expresiones aritméticas, lógicas y relacionales, así como el manejo de tipos primitivos. 
          El lenguaje también incluye mecanismos para entrada/salida, retorno de funciones, uso de 
          operadores con precedencia estándar y soporte para comentarios.
        </p>
        <p>
          Una vez definida la gramática, se desarrolló un compilador capaz de analizar, interpretar
          y traducir programas escritos en este lenguaje hacia una representación en código
          intermedio, para luego generar código ensamblador en MIPS. Esto implicó la implementación
          de un parser, reglas semánticas para validación de tipos y estructuras, y la posterior
          generación de instrucciones MIPS que respeten el comportamiento imperativo del lenguaje
          diseñado. El compilador permite ejecutar programas funcionales y estructurados sobre una
          arquitectura MIPS simulada.
        </p>
      </div>
      <Divider size="large"/>
      <div className="container_title_images">
        <div className="title_images">Imágenes del proyecto</div>
      </div>
      <Divider size="small" />
      <div className="container_aux_carousel">
        <div className={selectClassSizeCarousel()}>
          <Carousel autoplay={{dotDuration: true}} arrows autoplaySpeed={5000} className="carousel">
            <div className="container_images">
              <Image
                src={image1}
                alt="Imagen de pantalla de inicio de sesión de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={image2}
                alt="Imagen de pantalla de menú principal de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={image3}
                alt="Imagen de pantalla del usuario actual de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={image4}
                alt="Imagen de pantalla de la factura de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={image5}
                alt="Imagen de pantalla de la factura de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={image6}
                alt="Imagen de pantalla de la factura de SRL Gestock"
                className="image_carrousel"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <Divider size="large"/>
      <div className="container_title_images">
        <div className="title_images">Video del proyecto</div>
      </div>
      <Divider size="small" />
      <div className="container_aux_carousel">
        <div className={selectClassSizeCarousel()}>
          <Card title="Uso del software">
            <video width="100%" controls>
              <source src="/MIPS_Compiler.mp4" type="video/mp4" />
            </video>
          </Card> 
        </div>
      </div>
      <Divider size="large"/>
      <div className="container_aux_carousel">
        <Button
          type="link"
          href="https://github.com/AndrewLopezHerrera/IProyectoCompiladoresEInterpretes"
          target="_blank"
          icon={<GithubOutlined />}
          className={selectClassSizeCarousel()}
          size="large"
        >
          Ver repositorio
        </Button>
      </div>
    </>
  );
}

export default MIPSCompiler;