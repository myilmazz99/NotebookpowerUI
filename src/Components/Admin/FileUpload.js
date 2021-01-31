import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const FileUpload = ({ isMultiple, handleChange, name, extensions }) => {
  const [uploads, setUploads] = useState([]);
  const wrapper = useRef();
  const fileList = useRef();
  const input = useRef();

  const handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    wrapper.current.classList.add("dragover");
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    wrapper.current.classList.remove("dragover");
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const files = dt.files;

    wrapper.current.classList.remove("dragover");

    handleFiles(undefined, files);
    handleChange(undefined, input);
  };

  const handleFiles = (e, files) => {
    if ((files && files.length > 0) || (e && e.target.files > 0))
      wrapper.current.classList.add("has-files");
    else {
      wrapper.current.classList.remove("has-files");
      return;
    }

    setUploads([...files]);

    if (e) handleChange(e);
  };

  return (
    <label
      className="m-file-upload"
      ref={wrapper}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={input}
        type="file"
        name={name}
        multiple={isMultiple}
        onChange={(e) => handleFiles(e)}
      />
      <ul ref={fileList}>
        {uploads.length > 0 &&
          uploads.map((u, i) => (
            <li key={i} className="file">
              {u.type.includes("image") ? (
                <img src={URL.createObjectURL(u)} alt="..." />
              ) : (
                <FontAwesomeIcon icon="file" />
              )}
              <div>{u.name}</div>
            </li>
          ))}
      </ul>
      {extensions && (
        <div className="extension-notifier">
          Desteklenen uzantılar: {extensions}
        </div>
      )}
      <div className="initial-notifier">
        <FontAwesomeIcon icon="cloud-upload-alt" />
        <div>
          Dosyaları sürükle & bırak veya <span>seç</span>
        </div>
      </div>
    </label>
  );
};

export default FileUpload;
