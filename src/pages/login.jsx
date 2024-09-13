import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "/dashboard";
    }
  }, [])

  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="my-5 text-sm text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-gray-600">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
