import React from 'react';

interface ChatInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Correction ici
}

export const ChatInput: React.FC<ChatInputProps> = ({ value, onChange }) => {
    return (
        <div className="w-full">
            <input
                type="text"
                className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                placeholder="Type your message...."
                onChange={onChange} // Correction ici
                value={value}
            />
        </div>
    );
};

