
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const LabelPassword = ({text, placeholderText, isDisable, password, setPassword})=>{
    const [showPassword, setShowPassword] = useState(false);
    const handleInputChange = (e)=>{
        setPassword(e.currentTarget.value);
    };
    const togglePasswordVisibility = (e)=>{
        setShowPassword(showPassword=>!showPassword);
    };
    return (
        <label htmlFor="password">{text}
            <input name="password" 
            type={showPassword?"text":"password"}
            value={password} 
            disabled={isDisable}
            placeholder={placeholderText}
            required
            minLength="8"
            onChange={handleInputChange}/>
            <button type="button" 
                    onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
            </button>
        </label>
    );
};