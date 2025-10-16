import { useState } from "react";
import Button from "../Utils/Button";
import { FaEdit } from "react-icons/fa";

// FormRow.jsx
function FormRow({
    // Editable props
    editable = false,
    disabled = false,
    onSave,
    readOnly = false,

    // Standard form props
    labelText,
    type,
    name,
    defaultValue,
    value,
    onChange,
    placeholder = '',
    required = false,
    id,
    ...props
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [originalValue, setOriginalValue] = useState(defaultValue || ''); // Original value

    const inputId = id || name;
    const currentValue = value !== undefined ? value : internalValue;

    // HandleClick for editable mode
    const handleClick = () => {
        if (editable && !isEditing && !readOnly) {
            setOriginalValue(currentValue)
            setIsEditing(true);
        }
    };

    // Handle Save button click
    const handleSave = () => {
        if (editable && isEditing) {
            // Call onSave if value changed
            if (onSave && internalValue !== defaultValue) {
                onSave(internalValue);
            }
            // update orignal value to the new saved one
            setOriginalValue(currentValue);
            // Exit edit mode
            setIsEditing(false);
        }
    };

    // Handle Cancel button click
    const handleCancel = () => {
        if (editable && isEditing) {
            // Reset to roginal value
            setInternalValue(originalValue);
            // Exit edit mode
            setIsEditing(false);
        }
    };

    // Handle blur for editable mode
    const handleBlur = (e) => {
        if (editable) {
            if (disabled) {
                setIsEditing(false);
            }

            // Call onSave if value changes
            if (onSave && e.target.value !== currentValue) {
                onSave(e.target.value);
            }
        }

        // Call original onoBlur if provided
        props.onBlur?.(e);
    }

    // Handle value changes
    const handleChanges = (e) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        onChange?.(e);
    };

    const isReadOnly = readOnly || (editable && !isEditing);

    const inputElement = (
        <input
            type={type}
            name={name}
            id={inputId}
            value={currentValue}
            onChange={handleChanges}
            onBlur={handleBlur}
            required={required}
            placeholder={placeholder}
            disabled={disabled || isReadOnly}
            readOnly={isReadOnly}
            {...props}
        />
    );

    // wrap in editable container if editable mode
    if (editable) {
        return (
            <div
                className={`flex flex-col gap-y-0.5 form-row editable-form-row ${isEditing ? "editing" : ''}`}
            >
                <label htmlFor={name}>
                    {labelText}
                </label>
                <div className="flex flex-row justify-between">
                    {inputElement}
                    {!isEditing ? (
                        <Button
                            type="button"
                            onClick={handleClick}
                            text
                        >
                            <FaEdit />
                        </Button>
                    ) : (
                        <>
                            <Button
                                type="button"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                            <Button
                                type="button"
                                onClick={handleCancel}
                            >
                                x
                            </Button>
                        </>
                    )}
                </div>
            </div>
        )
    };

    return (
        <div className="flex flex-col gap-y-0.5 form-row">
            <label htmlFor={name}>
                {labelText}
            </label>
            {inputElement}
        </div>
    );
};

export default FormRow;