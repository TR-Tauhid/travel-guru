import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthProvider";
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {

        return (<div className="w-full h-screen flex justify-center items-center">

            <div className="flex justify-end">

                <span className="text-8xl loading loading-ball loading-lg"></span>
                <span className="text-8xl loading loading-ball loading-md"></span>
                <span className="text-8xl loading loading-ball loading-sm"></span>
                <span className="text-8xl loading loading-ball loading-xs"></span>
            </div>
            <h1 className="text-white font-babesNeue-bold text-4xl">Loading</h1>
            <div className="flex justify-end">

                <span className="text-8xl loading loading-ball loading-xs"></span>
                <span className="text-8xl loading loading-ball loading-sm"></span>
                <span className="text-8xl loading loading-ball loading-md"></span>
                <span className="text-8xl loading loading-ball loading-lg"></span>
            </div>
        </div>)
    }
    if (user) {
        return (children);
    }
    if (!user) {

        return <Navigate to="/login"></Navigate>
    }

};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;

