import { login } from "../../services/auth/auth-services";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";


const FormLogin = () => {
    const handleLogin = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        if (username === "" || password === "") {
            alert("Please enter your username and password");
            return;
        }


        // window.location.href = "/";      

        const loginRequest = await login(username, password);
        if (loginRequest.statusCode === 200) {
            if (loginRequest.is_valid) {
                localStorage.setItem("username", username);
                localStorage.setItem("token", loginRequest.token);
                alert("Login Successful");
                window.location.href = "/dashboard";
            } else {
                alert("Login Failed " + loginRequest.message);
            }
        } else {
            alert("Login Failed " + loginRequest);
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm type="text" title="Username" name="username" placeholder="example@example.com"></InputForm>
            <InputForm type="password" title="Password" name="password" placeholder="*******"></InputForm>
            <Button type="submit" className="bg-gray-900 w-full">Login</Button>
        </form>
    );
}

export default FormLogin;