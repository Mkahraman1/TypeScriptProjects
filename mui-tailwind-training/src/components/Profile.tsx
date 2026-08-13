import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {

    const context = useContext(UserContext);
    if (!context) return null;
    const { username } = context;

    return (
        <div>
            Profil Temasi {username}
        </div>
    );
}

export default Profile;