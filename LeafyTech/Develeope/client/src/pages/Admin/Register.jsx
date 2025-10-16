// Admin/Register.jsx
// create admin role; will not accept any other registration after that
import { Form, useNavigation, useActionData } from "react-router-dom";
import Card from "../../components/Utils/Card";
import FormRow from "../../components/Form/FormRow";
import Button from "../../components/Utils/Button";


function Register() {
    const actionData = useActionData();
    const navigation = useNavigation(); // submit state
    const isSubmitting = navigation.state === "submitting";

    return (
        <div className="container mx-auto h-full py-6">
            <Card className="max-w-[400px] mx-auto">
                {/* Display "user already exists" error */}
                {actionData?.error && (
                    <div><p>{actionData.message}</p></div>

                )}
                <Form method="post">
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <h2>Login Admin</h2>
                        </div>
                        <FormRow
                            type="text"
                            id="username"
                            name="username"
                            labelText="Username"
                            defaultValue="rika"
                            required={true}
                        />
                        <FormRow
                            type="email"
                            id="email"
                            name="email"
                            labelText="Email"
                            defaultValue="memo.erika@yahoo.co.uk"
                            required={true}
                        />
                        <FormRow
                            type="password"
                            id="password"
                            name="password"
                            labelText="Password"
                            defaultValue="123456"
                            required={true}
                        />
                        <FormRow
                            type="text"
                            id="firstName"
                            name="firstName"
                            labelText="Nome"
                            defaultValue="erika"
                            required={true}
                        />
                        <FormRow
                            type="text"
                            id="lastName"
                            name="lastName"
                            labelText="Cognome"
                            defaultValue="memo"
                            required={true}
                        />
                        <Button
                            type="submit"
                            primary
                        >
                            {isSubmitting ? "Submitting.." : "Submit"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default Register;