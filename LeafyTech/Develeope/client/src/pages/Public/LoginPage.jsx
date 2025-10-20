// page/Public/LoginPage.jsx
import { useAuth } from "../../hooks/useAuth";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { FormRow } from "../../components/Form/";
import Card from "../../components/Utils/Card";
import Button from "../../components/Utils/Button";
import { useEffect } from "react";

function LoginPage() {
    const { loginSuccess } = useAuth();
    const navigation = useNavigation();
    const actionData = useActionData();

    // Handle successfull login from action response
    useEffect(() => {
        if (actionData?.success) {
            loginSuccess(actionData.user, actionData.token);
        }
    }, [actionData, loginSuccess]);

    return (
        <div className="container mx-auto mt-20">
            <Card elevated className="max-w-[450px] mx-auto">
                <Card.Header>
                    <h1 className="text-center">Signin</h1>
                </Card.Header>
                <Card.Body>
                    <Form method="post" className="form-md">
                        <FormRow
                            labelText="Username"
                            name="username"
                            required={true}
                        />
                        <FormRow
                            labelText="Email"
                            name="email"
                            required={true}
                        />
                        <FormRow
                            labelText="Password"
                            name="password"
                            required={true}
                        />
                        <Button primary disabled={navigation.state === "submitting"}>
                            Signin
                        </Button>
                        {actionData?.error && <p>{actionData.error}</p>}
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <p>New member? <a>Signup</a></p>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default LoginPage;