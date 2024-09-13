import { useEffect } from "react";
import Product from "../components/Fragments/Product";
import AppLayout from "../components/Layouts/AppLayout";


const ProductPage = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/login";
        }
    }, [])

    return (
        <AppLayout>
            <Product/>
        </AppLayout>
    )
}

export default ProductPage;