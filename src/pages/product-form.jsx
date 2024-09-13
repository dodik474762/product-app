import { useEffect } from "react";
import ProductForm from "../components/Fragments/ProductForm";
import AppLayout from "../components/Layouts/AppLayout";


const ProductFormPage = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/login";
        }
    }, [])
    return (
        <AppLayout>
            <ProductForm/>
        </AppLayout>
    )
}

export default ProductFormPage;