import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oppss!!</h2>
            <h1>{error.status}</h1>
            <h2>{error.statusText}</h2>
        </div>
    );
};

export default Error;