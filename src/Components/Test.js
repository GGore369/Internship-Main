import React, { useState } from 'react';

function ImageInput() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Image Input</h2>
      <label htmlFor="imageInput" className="custom-file-upload">
        Upload Image
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }} // Hide the default input
        />
      </label>
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}
    </div>
  );
}

export default ImageInput;
