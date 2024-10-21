// Modal.js
import React from 'react';

export const Login = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
      zIndex: 1000 // 确保遮罩层和模态窗口在内容之上
    }}>
      <div style={{
        padding: 20,
        background: 'white',
        borderRadius: 5,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1001 // 确保模态窗口在遮罩层之上
      }}>
        {children}
        <button onClick={onClose}>关闭</button>
      </div>
    </div>
  );
};


