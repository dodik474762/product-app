import { useEffect } from "react";
import Dashboard from "../components/Fragments/Dashboard";
import AppLayout from "../components/Layouts/AppLayout";


const DashboardPage = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/login";
        }
    }, [])
    return (
        <AppLayout>
            <Dashboard/>
        </AppLayout>
    )
}

export default DashboardPage;