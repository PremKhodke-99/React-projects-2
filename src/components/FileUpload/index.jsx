import React, { useRef, useState } from 'react'
import './fileupload.css'

const FileUpload = () => {
    const [file, setFile] = useState();
    const uploadRef = useRef();
    const progressRef = useRef();
    const statusRef = useRef();
    const loadRef = useRef();

    function handleUploadFile() {
        const file = uploadRef.current.files[0];
        setFile(URL.createObjectURL(file));

        let formData = new FormData();
        formData.append('image', file);

        let xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', handleProgress, false);
        xhr.addEventListener('load', handlSuccess, false);
        xhr.addEventListener('error', handleError, false);
        xhr.addEventListener('abort', handleAbort, false);

        xhr.open('POST', 'https://v2.convertapi.com/upload');
        xhr.send(formData);
    }

    function handleProgress(e) {
        loadRef.current.innerHTML = `Uploaded ${e.loaded} bytes of ${e.total}`;
        const percent = (e.loaded / e.total) * 100;
        progressRef.current.value = Math.round(percent);
        statusRef.current.innerHTML = `${Math.round(percent)}% uploaded`;
    }

    function handlSuccess(e) {
        statusRef.current.innerHTML = e.targegt.responseText;
        progressRef.current.value = 0;
    }

    function handleError() {
        statusRef.current.innerHTML = 'Upload Failed! Please try again';
    }

    function handleAbort() {
        statusRef.current.innerHTML = 'Upload Aborted!';
    }

    return (
        <div className='file-upload-container'>
            <h1>File Upload</h1>
            <input onChange={handleUploadFile} type="file" name='file' ref={uploadRef} />
            <label htmlFor="">File Progress: {' '}
                <progress ref={progressRef} value={'0'} max={'100'} />
            </label>
            <p className='status' ref={statusRef}></p>
            <p className='load' ref={loadRef}></p>
            <img src={file} alt="File-upload" style={{ width: '100px', height: '100px' }} />
        </div>
    )
}

export default FileUpload