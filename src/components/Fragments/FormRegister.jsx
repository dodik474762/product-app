import { register } from "../../services/auth/auth-services";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import Selects from "../Elements/Input/Select";


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
            <Selects data={[{ key: 'staff', value: 'STAFF' }, { key: 'customer', value: 'CUSTOMER' }]} id="roles" />
            <br />
            <Button className="bg-gray-900 w-full" >Submit</Button>
        </form>
    );
}

export default FormRegister;