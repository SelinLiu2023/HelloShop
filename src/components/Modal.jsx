import React from 'react';
import styles from "../styles/Modal.module.scss"; // 引入模态窗口的样式


export const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={close}>
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
      {children}
      <button onClick={close} className={styles.close_button} >&times;</button>
      </div>
    </div>
  );
};
