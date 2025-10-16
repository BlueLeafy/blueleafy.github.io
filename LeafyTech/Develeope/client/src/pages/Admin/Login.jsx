// Login.jsx
import Card from "../../components/Utils/Card";
import { Form } from "react-router-dom";
import FormRow from "../../components/Form/FormRow";
import Button from "../../components/Utils/Button";

function Login() {
    return (
        <div className="h-full flex-1 w-full py-6">
            <Card filled className="max-w-[400px] mx-auto shadow">
                <Card.Header>
                    <h2 className="text-center">Login Admin</h2>
                </Card.Header>
                <Form method="post" className="form-md">
                    <div className="flex flex-col space-y-6">
                        <FormRow
                            type="text"
                            id="username"
                            name="username"
                            labelText="Username"
                            defaultValue="rika"
                        />
                        <FormRow
                            type="email"
                            id="email"
                            name="email"
                            labelText="Email"
                            defaultValue="memo.erika@yahoo.co.uk"
                        />
                        <FormRow
                            type="password"
                            id="password"
                            name="password"
                            labelText="Password"
                            defaultValue="123456"
                        />
                        <Button
                            type="submit"
                            primary
                        >
                            Login
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default Login;