// FileUpload.jsx - VISIBLE & STYLED VERSION
import { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";import Button from "../Utils/Button";

function FileUpload({ name, labelText, required = false }) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef();

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        
        const newFiles = files.map(file => ({
            file,
            id: Math.random().toString(36).substring(2, 9),
            name: file.name,
            size: file.size,
            type: file.type
        }));

        setSelectedFiles(prev => [...prev, ...newFiles]);
    };

    const handleRemoveFile = (fileId) => {
        setSelectedFiles(prev => {
            const newFiles = prev.filter(file => file.id !== fileId);
            
            // Update the file input with remaining files
            const dataTransfer = new DataTransfer();
            newFiles.forEach(fileObj => {
                dataTransfer.items.add(fileObj.file);
            });
            fileInputRef.current.files = dataTransfer.files;
            
            return newFiles;
        });
    };

    const handleClearAll = () => {
        setSelectedFiles([]);
        fileInputRef.current.value = ''; // Clear the input
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={name} className="font-medium">{labelText}</label>
            
            {/* VISIBLE STYLED FILE INPUT - Uses your CSS classes */}
            <input
                type="file"
                name={name}
                id={name}
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                className="form-xxl" // Your custom CSS class
                required={required}
            />
            
            {/* Enhanced file preview and management */}
            {selectedFiles.length > 0 && (
                <div className="mt-3 space-y-3">
                    <div className="flex justify-between items-center">
                        <p className="text-sm font-medium text-gray-700">
                            Selected files ({selectedFiles.length})
                        </p>
                        <Button
                            type="button"
                            onClick={handleClearAll}
                            className="!p-1 !text-xs bg-gray-500 text-white hover:bg-gray-600"
                        >
                            Clear All
                        </Button>
                    </div>
                    
                    <div className="space-y-2 max-h-40 w-full">
                        {selectedFiles.map((fileObj) => (
                            <div 
                                key={fileObj.id} 
                                className="flex items-center justify-between bg-white p-3 rounded-sm drop-shadow-xl shadow-gray-900 w-full"
                            >
                                <div className="flex-1 min-w-0">
                                    <span className="text-sm font-medium text-gray-900 block truncate">
                                        {fileObj.name}
                                    </span>
                                    <span className="text-xs text-gray-500 block mt-1">
                                        {formatFileSize(fileObj.size)} • {fileObj.type}
                                    </span>
                                </div>
                                <Button
                                    type="button"
                                    onClick={() => handleRemoveFile(fileObj.id)}
                                    light
                                >
                                    <AiOutlineClose />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Helper text */}
            {selectedFiles.length === 0 && (
                <p className="text-sm text-gray-500 italic mt-1">
                    Click to select files
                </p>
            )}
        </div>
    );
};

export default FileUpload;