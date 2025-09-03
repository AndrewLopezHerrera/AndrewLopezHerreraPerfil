import "../../GeneralStyles.css"
import { Button, Card, Carousel, Divider, Image } from 'antd';
import loginSRLGestock from '../../assets/srlgestock/login.png';
import billSRLGestock from '../../assets/srlgestock/bill.png';
import myUserSRLGestock from '../../assets/srlgestock/my_user.png';
import mainMenuSRLGestock from '../../assets/srlgestock/main_menu.png';
import { useState } from "react";
import { GithubOutlined } from '@ant-design/icons';

const SRLGestock : React.FC = () => {

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
        <h1>SRL Gestock</h1>
      </div>
      <div>
        <p>
          El propósito de crear esta aplicación es para automatizar los procesos de guardado de 
          inventario y facturación. Actualmente, el cliente, SRL Technologies, deben manejar el 
          inventario con una hoja de cálculo, por lo que, toma más tiempo realizar una compra en 
          el local, ya que se debe verificar el stock desde la hoja de cálculo.
        </p>
        <p>
          Se desea realizar una aplicación que automatice estos procesos y las compras se hagan 
          de manera rápida. Además, se puede tener un mejor control del inventario, ya que es el
          sistema quien maneja estos datos, por lo que se hace sencilla la tarea. Esta aplicación 
          es importante para la empresa, ya que, esta espera crecer con el tiempo y una hoja de 
          cálculo no va a ser la mejor herramienta para trabajar con varios empleados. En caso de 
          que la empresa decida tener más sucursales la hoja de cálculo tampoco va a ser de gran 
          ayuda, debido a que no se puede tener un control central de los productos que entran y 
          salen de las sucursales.
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
                src={loginSRLGestock}
                alt="Imagen de pantalla de inicio de sesión de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={mainMenuSRLGestock}
                alt="Imagen de pantalla de menú principal de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={myUserSRLGestock}
                alt="Imagen de pantalla del usuario actual de SRL Gestock"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={billSRLGestock}
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
              <source src="/SRL_Gestock.mp4" type="video/mp4" />
            </video>
          </Card> 
        </div>
      </div>
      <Divider size="large"/>
      <div className="container_aux_carousel">
        <Button
          type="link"
          href="https://github.com/AndrewLopezHerrera/SRLGestock"
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

export default SRLGestock;