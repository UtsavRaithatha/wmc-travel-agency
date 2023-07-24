import { useState, useEffect } from "react";

const useAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/auth/check", {
                    method: "GET",
                    credentials: "include"
                });

                const data = await response.json();

                console.log(data);

                setLoggedIn(data.isLoggedIn);
            }
            catch (err) {
                console.log(err);
                setLoggedIn(false);
            }
        }

        checkLoginStatus();
    }, []);

    return loggedIn;
}

export default useAuth;