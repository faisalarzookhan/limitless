import React, { useState } from 'react';
import { HiOutlineCloudUpload, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import FormFieldWrapper from './FormFieldWrapper';

const FileUploadField = ({ 
  id, 
  name, 
  label, 
  onChange, 
  required = false, 
  error, 
  description,
  accept = "*",
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB default
  className = "",
  ...props 
}) => {
  const [fileInfo, setFileInfo] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      const file = files[0]; // For single file upload
      
      // Validate file size
      if (file.size > maxSize) {
        setFileInfo({
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
          status: 'error',
          message: `File size exceeds ${maxSize / 1024 / 1024} MB limit`
        });
        return;
      }

      setFileInfo({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        status: 'success',
        file: file
      });

      // Call the parent onChange with the file
      onChange({ target: { name, value: file } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const removeFile = () => {
    setFileInfo(null);
    onChange({ target: { name, value: null } });
  };

  return (
    <FormFieldWrapper 
      label={label} 
      id={id} 
      required={required} 
      error={error} 
      description={description}
      className={className}
    >
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-300 ${
          isDragging 
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
            : error 
              ? 'border-red-300 dark:border-red-600' 
              : 'border-gray-300 dark:border-dark-600 hover:border-primary-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById(`file-input-${id}`).click()}
      >
        <input
          id={`file-input-${id}`}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          {...props}
        />
        
        <div className="flex flex-col items-center justify-center">
          <HiOutlineCloudUpload className="w-12 h-12 text-gray-400 mb-3" />
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            <span className="font-medium text-primary-600 dark:text-primary-400">Click to upload</span> or drag and drop
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {accept === '*' ? 'Any file type' : accept} (Max: {(maxSize / 1024 / 1024).toFixed(0)}MB)
          </p>
        </div>
      </div>

      {fileInfo && (
        <div className="flex items-center justify-between bg-gray-50 dark:bg-dark-700 rounded-lg p-3 mt-2">
          <div className="flex items-center">
            {fileInfo.status === 'success' ? (
              <HiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
            ) : (
              <HiXCircle className="w-5 h-5 text-red-500 mr-2" />
            )}
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-xs">
                {fileInfo.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {fileInfo.size} {fileInfo.status === 'error' && `- ${fileInfo.message}`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          >
            Remove
          </button>
        </div>
      )}
    </FormFieldWrapper>
  );
};

export default FileUploadField;