import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import setReactInputValue from "../Tools/setReactInputValue";

const TextEditor = ({ placeholder, handleChange, name, value, error }) => {
  const textarea = useRef();

  const handleEditorChange = (content) => {
    setReactInputValue(textarea.current, content);
  };

  return (
    <>
      <textarea
        ref={textarea}
        name={name}
        style={{ display: "none" }}
        onChange={handleChange}
        value={value || ""}
      ></textarea>
      <Editor
        apiKey="a30d8bjhw0dy375rxq8s14iq2hw8tzzpgk9psljzt94o52ny"
        initialValue={placeholder}
        value={value || ""}
        init={{
          height: 300,
          plugins: ["paste", "link", "image", "lists", "media"],
          toolbar:
            "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | image media",
        }}
        outputFormat="html"
        onEditorChange={handleEditorChange}
      />
      {error && <div className="text-danger"></div>}
    </>
  );
};

export default TextEditor;
