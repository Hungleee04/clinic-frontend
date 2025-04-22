import { useEffect, useState } from "react";
import {Outlet, useNavigate} from "react-router-dom";

export const AdminPage = ({ user }) => {
    const navigate = useNavigate();
    const [isUnauthorized, setIsUnauthorized] = useState(false);

    useEffect(() => {
        if (user.role !== "admin") {
            setIsUnauthorized(true);
            // Chờ 2 giây rồi redirect
            const timer = setTimeout(() => {
                navigate("/");
            }, 2000);

            return () => clearTimeout(timer); // Xoá timer nếu component unmount
        }
    }, [user, navigate]);

    if (isUnauthorized) {
        return (
            <p>Bạn không có quyền truy cập trang này. Đang chuyển hướng về trang chủ...</p>
        );
    }

    return (
        <>
            <h1>Chào mừng bạn đến trang Admin</h1>
            <Outlet/>
        </>
    );
};
