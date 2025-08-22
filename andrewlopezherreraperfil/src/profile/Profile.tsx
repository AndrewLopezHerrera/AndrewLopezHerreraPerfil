import { Avatar, Divider, List } from "antd";
import imageProfile from "../assets/profile/profile_image.jpg"
import "./Profile.css"

const Profile : React.FC = () => {

   const data = [
      {
         title: 'Ant Design Title 1',
      },
      {
         title: 'Ant Design Title 2',
      },
      {
         title: 'Ant Design Title 3',
      },
      {
         title: 'Ant Design Title 4',
      },
   ];

 return (
    <section className="mainContainerProfile">
      <div className="containerPresentationBar">
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
      </div>
      <section>
         <h2>Biografía</h2>
         <p>Hola, soy Andrew Denilson López Herrera, un apasionado por la tecnología y el desarrollo de software. Me encanta aprender sobre nuevas herramientas y lenguajes de programación, y siempre estoy buscando mejorar mis habilidades.</p>
      </section>
      <Divider size="small" />
      <section>
         <h2>Lenguajes de programación</h2>
         <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
               <List.Item>
               <List.Item.Meta
                  avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
               />
               </List.Item>
            )}
         />
      </section>
   </section>
 )
}

export default Profile;