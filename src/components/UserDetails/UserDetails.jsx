import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, company, email, phone, username, address } = user;
    return (
        <div>
            <h2>User name: {name}</h2>
            <p>Company: {company.name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>City: {address.city}</p>
            <p>Username: {username}</p>
        </div>
    );
};

export default UserDetails;