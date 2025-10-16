// component/Products/Admin/ProductBasicInfo.jsx
import Card from "../../../Utils/Card";
import Button from "../../../Utils/Button";
import { useOutletContext } from "react-router-dom";
import { Form, FormRow, FormTextarea, } from "../../../Form";


function ProductBasicInfo() {
    const { product } = useOutletContext();

    return (
        <>
            <Form className="form-xxl" submitText="Save">
                    {/* each input is inactive up to onClick */}
                    <FormRow
                        labelText="Nome"
                        defaultValue={product.name}
                        editable={true}
                    />
                    <FormRow
                        labelText="Brand"
                        defaultValue={product.brand}
                        editable={true}
                    />
                    <FormRow
                        labelText="Company"
                        defaultValue={product.company}
                        editable={true}
                    />
                    <FormRow
                        labelText="Applicazioni"
                        defaultValue={product.applications}
                        editable={true}
                    />
                    <FormRow
                        labelText="Paramteri"
                        defaultValue={product.parameters}
                        editable={true}
                    />

                    <FormTextarea labelText="Descrizione completa" defaultValue={product.description} />
                    <FormTextarea labelText="Descrizione breve" defaultValue={product.shortDescription} />
               
            </Form>
        </>
    );
};
export default ProductBasicInfo;