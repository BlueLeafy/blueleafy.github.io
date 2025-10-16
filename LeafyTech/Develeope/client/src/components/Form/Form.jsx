// Form.jsx
import { useState, useRef } from "react";
import Button from "../Utils/Button";

function Form({
    children,
    onSubmit,
    onCancel,
    submitText = "Submit",
    cancelText = "Cancel",
    showCancel = true,
    action,
    method,
    encType,
    className = "",
    ...formProps
}) {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            if (onSubmit) {
                // Pass both the data AND the event to the onSubmit callback
                await onSubmit(data, e);
            } else {
                // Native form submission fallback
                const form = e.target;
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData
                });

                if(!response.ok) {
                    throw new Error("Form submission failed!")
                }
            }
        } catch (error) {
            console.error(error);

        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle cancel/reset
    const handleCancel = (e) => {
        e.preventDefault();

        // Reset from to initial state
        if (formRef.current) {
            formRef.current.reset();
        }

        // Call onCancel callback if provided
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            action={action}
            method={method}
            encType={encType}
            className={`${className}`}
            {...formProps}
        >
            {children}
            <div className="flex flex-row gap-x-3.5 pt-5 mt-5 border-t border-t-neutral-200">
                {showCancel && (
                    <Button
                        type="button"
                        onClick={handleCancel}
                        disabled={isSubmitting}
                        outlined
                    >
                        {cancelText}
                    </Button>
                )}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    primary
                >
                    {isSubmitting ? "Submitting..." : submitText}
                </Button>
            </div>
        </form>
    );
};

export default Form;