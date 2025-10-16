// MarkdownEditor.jsx
import { OverType } from "overtype";
import { useRef, useEffect, useState } from 'react';

const MarkdownEditor = ({ value, onChange, placeholder = 'Start typing markdown...' }) => {
    const editorRef = useRef();
    const overtypeInstance = useRef();
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Initialize OverType editor
        if (editorRef.current && !overtypeInstance.current) {
            const [instance] = new OverType(editorRef.current, {
                value: value || '',
                placeholder: placeholder,
                onChange: (newValue) => {
                    if (onChange) {
                        onChange(newValue);
                    }
                },
                theme: 'solar', // or 'cave' for dark mode
                toolbar: true,  // Enable formatting toolbar
                showStats: false, // Set to true if you want character/word counts
                autofocus: true,
            });

            overtypeInstance.current = instance;
            setIsInitialized(true);
        }

        // Cleanup function
        return () => {
            if (overtypeInstance.current) {
                overtypeInstance.current.destroy();
                overtypeInstance.current = null;
            }
        };
    }, [onChange, value, placeholder]);

    // Update editor content when value prop changes
    useEffect(() => {
        if (isInitialized && overtypeInstance.current && value !== overtypeInstance.current.getValue()) {
            overtypeInstance.current.setValue(value);
        }
    }, [value, isInitialized]);

    return (
        <div
            ref={editorRef}
            style={{
                height: '400px',
                border: '1px solid #ccc',
                borderRadius: '4px'
            }}
        />
    );
};

export default MarkdownEditor;