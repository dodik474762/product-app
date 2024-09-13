import { register } from "../../services/auth/auth-services";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";


const FormRegister = () => {
    const handleRegister = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const roles = event.target.roles.value;
        if (username === "" || password === "" || roles === "") {
            alert("Please enter your username, roles and password");
            return;
        }

        const registerRequest = await register(username, password, roles);
        if (registerRequest.statusCode === 200) {
            if (registerRequest.is_valid) {
                alert("Register Successful");
                window.location.href = "/login";
            } else {
                alert("Register Failed " + registerRequest.message);
            }
        } else {
            alert("Register Failed " + registerRequest);
        }

    }

    return (
        <form onSubmit={handleRegister}>
            <InputForm type="text" title="Username" name="username" placeholder="example"></InputForm>
            <InputForm type="password" title="Password" name="password" placeholder="*******"></InputForm>
            <select name="roles" id="roles" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="staff">STAFF</option>
                <option value="customer">CUSTOMER</option>
            </select>
            <br />
            <Button className="bg-gray-900 w-full" >Submit</Button>
        </form>
    );
}

export default FormRegister;