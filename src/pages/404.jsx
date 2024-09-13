import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default NotFoundPage;

