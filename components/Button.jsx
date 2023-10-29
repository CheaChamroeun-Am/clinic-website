import React from 'react';

const Button = ({ icon: Icon, title, iconPosition = 'before', className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-main text-white rounded-md px-4 py-2 flex gap-3 items-center ${className}`}
    >
      {Icon && iconPosition === 'before' && <Icon size={20} />}
      <span>{title}</span>
      {Icon && iconPosition === 'after' && <Icon size={20} />}
    </button>
  );
};

export default Button;


