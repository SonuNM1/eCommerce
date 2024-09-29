import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation() ; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => {
                // Check if the countdown has reached 0, and if so, navigate to '/login'.
                if (prevValue <= 1) {
                    navigate("/login", {
                        state: location.pathname
                    });
                    clearInterval(interval); // Stop the interval after navigation.
                }
                return prevValue - 1;
            });
        }, [count, navigate, location]);

        // Cleanup the interval when the component is unmounted.
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <>
            <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <h1 className="text-center">
                    Redirecting you in {count} seconds{count === 1 ? '' : 's'}
                </h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default Spinner;

// 17.54