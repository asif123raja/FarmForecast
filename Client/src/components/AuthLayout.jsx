import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("/api/v1/user/getCurrentUser");
                if (response.status === 200) {
                    dispatch(loginSuccess(response.data.data));
                } else {
                    navigate("/login");
                }
            } catch (e) {
                console.error("Error fetching user: ", e);
                navigate("/login"); // Navigate to login on error
            } finally {
                setLoading(false);
            }
        };

        if (!user) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, [user, navigate, dispatch]); // Added dependencies

    if (loading) {
        return <div>Loading...</div>; // Optionally show a loading spinner/message
    }

    return <div>{children}</div>;
}

export default AuthLayout;
