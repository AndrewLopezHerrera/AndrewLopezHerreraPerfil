import Base from "../base/Base";
import ProfileContent from "./ProfileContent";

const Profile : React.FC = () => {
    return (
        <Base frame={<ProfileContent />}></Base>
    );
}

export default Profile;