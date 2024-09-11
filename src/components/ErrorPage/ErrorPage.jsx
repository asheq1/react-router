import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)

    return (
        <div>
            <h1>Oops!!</h1>
            {
                error.status === 404 && <div>
                    <h1>Page Not found</h1>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
            <p>
                <i>{error.statusText} || {error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;