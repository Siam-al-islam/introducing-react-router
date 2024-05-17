import { Link } from "react-router-dom";

const User = ({ user }) => {
    // const { name, company, email, phone, username, address } = user;
    const userStyle = {
        "border": "2px solid yellow",
        "padding": "20px",
        "border-radius": "15px"
    }

    return (
        <div style={userStyle}>
            <h3>Name: {user.name}</h3>
            <span>Number: {user.phone}</span>
            <p>Email: {user.email}</p>
            <Link to={`/user/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;