// pages/AddProduct.jsx
import Card from "../../components/Utils/Card";
import AddProductForm from "../../components/Form/AddProductForm";

function AddProduct() {
    return (
        <div className="py-5 px-5 w-full h-full">
            <div className="flex justify-center">
                <Card elevated>
                    <Card.Header>
                        <h1 className="text-center">Insert new product data</h1>
                    </Card.Header>
                    <Card.Body>
                        <AddProductForm />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default AddProduct;