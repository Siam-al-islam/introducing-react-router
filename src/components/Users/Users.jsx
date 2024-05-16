import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {

    const users = useLoaderData();
    const usersStyle = {
        'display': 'grid',
        'grid-template-columns': 'repeat(3, 1fr)',
        'gap': '12px'
    }

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam eligendi, animi nostrum vero recusandae facilis.</p>
            <div style={usersStyle}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div >
    );
};

export default Users;