import type React from "react";
import Base from "../base/Base";
import "../i18n/i18n";
import HomeContent from "./HomeContent";

const Home : React.FC = () => {
    
    return (
        <Base frame={<HomeContent />}/>
    );
}

export default Home;