import "../../GeneralStyles.css"
import { Button, Card, Carousel, Divider, Image } from 'antd';
import mainMenu from '../../assets/wideworldimporters/main_menu.png';
import screenBuys from '../../assets/wideworldimporters/screen_buys.png';
import screenCustomers from '../../assets/wideworldimporters/screen_customers.png';
import screenSales from '../../assets/wideworldimporters/screen_sales.png';
import screenStock from '../../assets/wideworldimporters/screen_stock.png';
import screenSuppliers from '../../assets/wideworldimporters/screen_supplier.png';
import { useState } from "react";
import { GithubOutlined } from '@ant-design/icons';

const WideWorldImporters : React.FC = () => {

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
        <h1>Wide World Importers</h1>
      </div>
      <div>
        <p>
          Esta aplicación tiene como propósito mostrar a los usuarios la información de los clientes,
          proveedores, stock, compras y ventas de la base de datos Wide World Importers. En ella
          se pueden realizar las siguientes acciones: buscar clientes, proveedores, stock, compras y ventas;
          por nombres y tipo (en caso de que lo tenga), además se puede observar la información 
          completada de cada uno de ellos.
        </p>
        <p>
          El propósito de este proyecto es demostrar el uso de la base de datos Wide World Importers,
          la cual es una base de datos de ejemplo que contiene información sobre clientes, proveedores,
          stock, compras y ventas. La aplicación permite a los usuarios interactuar con esta base de datos
          de manera sencilla, proporcionando una interfaz amigable para la visualización y
          gestión de la información. Además, con este proyecto se busca desarrollar la capacidad de 
          los estudiantes de crear una API RESTful que permita la interacción con bases de datos
          utilizando tecnologías modernas y buenas prácticas de desarrollo.
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
                src={mainMenu}
                alt="Imagen de pantalla del menú principal de Wide World Importers"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={screenCustomers}
                alt="Imagen de pantalla de la sección de clientes de Wide World Importers"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={screenBuys}
                alt="Imagen de pantalla de la sección de compras de Wide World Importers"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={screenSales}
                alt="Imagen de pantalla de la sección de ventas de Wide World Importers"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={screenStock}
                alt="Imagen de pantalla de la sección de stock de Wide World Importers"
                className="image_carrousel"
              />
            </div>
            <div className="container_images">
              <Image
                src={screenSuppliers}
                alt="Imagen de pantalla de la sección de proveedores de Wide World Importers"
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
              <source src="/Wide_World_Importers.mp4" type="video/mp4" />
            </video>
          </Card> 
        </div>
      </div>
      <Divider size="large"/>
      <div className="container_aux_carousel">
        <Button
          type="link"
          href="https://github.com/AndrewLopezHerrera/IProyectoBaseDeDatosII"
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

export default WideWorldImporters;