// useFormClear.js
import { useRef, useCallback } from "react";

export function useFormClear() {
    const formRef = useRef(null);

    const clearForm = useCallback(() => {
        if (!formRef.current) return;

        // Reset form (clears most inputs)
        formRef.current.reset();

        // Manually clear file inputs
        const fileInputs = formRef.current.querySelectorAll("input[type='file']");
        fileInputs.forEach(input => {
            input.value = '';
        });

        // Clear any custom state for checkboxes/radios if needed

        // Clear any textarea and selects
        const textarea = formRef.current.querySelectorAll("textarea");
        textarea.forEach(textarea => {
            textarea.value = '';
        });

        const selects = formRef.current.querySelectorAll("select");
        selects.forEach(select => {
            select.selectedIndex = 0;
        })

    }, []);

    const setFormRef = useCallback((node) => {
        formRef.current = node;
    }, []);

    return {
        formRef: setFormRef,
        clearForm
    };
};
