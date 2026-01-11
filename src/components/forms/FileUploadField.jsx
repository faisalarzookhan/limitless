import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UploadCloud, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Zap, 
  ShieldCheck,
  AlertCircle,
  X
} from 'lucide-react';

const FileUploadField = ({
  id,
  name,
  label,
  onChange,
  required = false,
  error,
  description,
  accept = '*',
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB default
  className = '',
  ...props
}) => {
  const [fileInfo, setFileInfo] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = e => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = files => {
    if (files.length > 0) {
      const file = files[0]; // For single file upload

      // Validate file size
      if (file.size > maxSize) {
        setFileInfo({
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
          status: 'error',
          message: `Buffer Overflow: Max ${maxSize / 1024 / 1024}MB limit`,
        });
        return;
      }

      setFileInfo({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        status: 'success',
        file: file,
      });

      // Call the parent onChange with the file
      onChange({ target: { name, value: file } });
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFileInfo(null);
    onChange({ target: { name, value: null } });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-2 tracking-widest">
          <FileText className="w-3 h-3 text-[#1ba6d6]" /> {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById(`file-input-${id}`).click()}
        whileHover={{ scale: 0.995 }}
        whileTap={{ scale: 0.98 }}
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all overflow-hidden ${
          isDragging
            ? 'border-[#1ba6d6] bg-[#1ba6d6]/10'
            : error
              ? 'border-red-500/50 bg-red-500/5'
              : 'border-white/10 bg-white/5 hover:border-[#1ba6d6]/50'
        }`}
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

        <AnimatePresence mode="wait">
          {!fileInfo ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className={`p-4 rounded-full transition-colors ${isDragging ? 'bg-[#1ba6d6] text-white' : 'bg-white/5 text-gray-400'}`}>
                <UploadCloud className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Inject Data Stream
                </p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter font-black">
                  Click or drag protocol files here
                </p>
              </div>
              <div className="flex gap-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                <span>{accept === '*' ? 'ALL_PROTOCOLS' : accept}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full my-auto" />
                <span>MAX_{ (maxSize / 1024 / 1024).toFixed(0) }MB</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="fileinfo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className={`p-4 rounded-full ${fileInfo.status === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                {fileInfo.status === 'success' ? <ShieldCheck className="w-10 h-10" /> : <AlertCircle className="w-10 h-10" />}
              </div>
              <div className="max-w-xs truncate">
                <p className="text-sm font-bold text-white truncate">{fileInfo.name}</p>
                <p className="text-xs font-black text-gray-500 uppercase tracking-tighter mt-1">{fileInfo.size}</p>
              </div>
              
              {fileInfo.status === 'error' && (
                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">
                  {fileInfo.message}
                </p>
              )}

              <button
                type="button"
                onClick={removeFile}
                className="flex items-center gap-2 text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
              >
                <X className="w-3 h-3" /> Purge Cache
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {description && <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter mt-1">{description}</p>}
      {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter mt-1">{error}</p>}
    </div>
  );
};

export default FileUploadField;

