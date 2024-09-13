import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";
import { useEffect } from "react";

const RegisterPage = () => {

  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="my-5 text-sm text-center">
        have an account?{" "}
        <Link to="/login" className="font-bold text-gray-600">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
