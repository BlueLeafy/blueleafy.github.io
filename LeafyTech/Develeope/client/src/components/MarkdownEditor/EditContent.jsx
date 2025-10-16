// EditContent.jsx
import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import ReactMarkdown from "react-markdown";

function EditContent() {
    const [markdownContent, setMarkdownContent] = useState('# Welcome\n\nStart writing your content here...');

    const handleContentChange = (newContent) => {
        setMarkdownContent(newContent);
    };

    const handleSave = () => {
        console.log('Content to save:', markdownContent);
        // Add your save logic here
        // Create and download as .md file
        const blob = new Blob([markdownContent], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "document.md";
        a.click();
        URL.revokeObjectURL(url);
        console.log("Downloaded file");
    };

    return (
        <div>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <h1>My Markdown Editor</h1>
                <MarkdownEditor
                    value={markdownContent}
                    onChange={handleContentChange}
                    placeholder="Type your markdown here..."
                />
                <button onClick={handleSave} style={{ marginTop: '20px' }} className="cursor-pointer">
                    Save Content
                </button>
            </div>
            <div>
                <ReactMarkdown>
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>

    );
}
export default EditContent;