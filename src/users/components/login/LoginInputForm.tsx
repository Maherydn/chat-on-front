import React from 'react';

interface LoginInputFormProps {
    value: string;
    id: string;
    type: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export const LoginInputForm: React.FC<LoginInputFormProps> = ({ value, onChange, placeholder, id, type }) => {
    return (
        <div className="w-full">
            <input
                type={ type }
                id={ id }
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder={ placeholder }
                onChange={ onChange }
                value={ value }
            />
        </div>
    );
};
