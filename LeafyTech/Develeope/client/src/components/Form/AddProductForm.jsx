// AddProductForm.jsx
import { useState } from "react";
import Card from "../../components/Utils/Card";
import { useNavigate } from "react-router-dom";
import { Form, FormRow, FormTextarea, FileUpload } from "./";
import { useFormClear } from "../../hooks/useFormClear";

function AddProductForm() {
    const navigate = useNavigate();
    const [formKey, setFormKey] = useState(0);
    const { formRef, clearForm } = useFormClear();

    const handleSubmit = async (formData, e) => {
        const form = e.target;
        const submitFormData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: submitFormData,
        });

        if (response.ok) {
            // clear the form inputs
            clearForm();
            // clear the file inputs and the preview
            setFormKey(prev => prev + 1);
            // redirect to success page
            navigate("/admin/dashboard/crea-prodotto");
        }
    };

    // Clear all data
    const handleCancel = () => {
        clearForm();
        // clear the file inputs and the preview
        setFormKey(prev => prev + 1);
    };

    return (
        <Form
            action="/api/admin/dashboard/crea-prodotto"
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            submitText="Submit new product"
            cancelText="Clear all"
            className="p-1 form-xxl"
            ref={formRef}
            key={formKey}
        >
            <div>
                <h2>General Infos</h2>
                <div className="flex flex-row gap-x-5">
                    <div className="flex flex-col w-1/3 justify-between">
                        <FormRow
                            type="text"
                            name="name"
                            id="name"
                            labelText="Nome prodotto"
                            required={true}
                        />
                        <FormRow
                            type="text"
                            id="brand"
                            name="brand"
                            labelText="Brand"
                            required={true}
                        />
                        <FormRow
                            type="text"
                            id="company"
                            name="company"
                            labelText="Company"
                            required={true}
                        />
                        <FormRow
                            type="text"
                            id="applications"
                            name="applications"
                            labelText="Applicazioni"
                            required={true}
                            placeholder="Tag;"
                        />
                        <FormRow
                            type="text"
                            id="parameters"
                            name="parameters"
                            labelText="Parametri"
                            required={true}
                            placeholder="Tag;"
                        />

                    </div>
                    <div className="flex flex-col w-2/3 justify-between gap-y-5">
                        <FormTextarea
                            type="text"
                            name="shortDescription"
                            id="shortDescription"
                            labelText="Descrizone breve"
                            placeholder="Max (?) characters"
                        />
                        <FormTextarea
                            type="text"
                            name="description"
                            id="description"
                            labelText="Descrizione completa"
                            placeholder="Max (?) characters"
                        />
                    </div>
                </div>
            </div>
            <div>
                {/* input type="file" coomponents */}
                <h2>Media</h2>
                <div className="flex flex-col w-full justify-between gap-y-2">
                    <FileUpload name="images" id="images" labelText="Images" required={false} placeholder=".mp3" key={`images-${formKey}`} />
                    <FileUpload name="videos" id="videos" labelText="Videos" required={false} placeholder=".mpeg4" />
                </div>
            </div>
            <div>
                <h2>Documents</h2>
                <div className="flex flex-row gap-y-3.5 gap-x-2.5">
                    <div className="flex flex-col w-full">
                        <FileUpload name="docs" id="docs" labelText="Documents" required={false} placeholder=".pdf .doc" />
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default AddProductForm;