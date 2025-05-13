import React, { useCallback } from 'react';
import styles from './Dropzone.module.css';
import { assets } from '../../assets/assets';

type DropzoneProps = {
  onFileSelect: (file: File) => void;
};

const Dropzone: React.FC<DropzoneProps> = ({ onFileSelect }) => {
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  }, [onFileSelect]);

  return (

    <div className={styles.wrapper}>

      <div className={styles.avatarlabel}>Upload Avatar</div>
      <div className={styles.dropzone}>

        <input type="file" id="fileUpload" className={styles.input} onChange={handleFileChange} />


        <label htmlFor="fileUpload" className={styles.label}>
          <img src={assets.upload} alt="" />
          <div>Drag and drop or click to upload</div>
        </label>
      </div>
      <div className={styles.infoRow}>
        <img src={assets.icon_info} width="20" alt="Info Icon" className={styles.icon} />
        <p className={styles.infoText}>Upload your photo (JPG or PNG, max size: 500KB)</p>
      </div>
    </div>

  );
};

export default Dropzone;