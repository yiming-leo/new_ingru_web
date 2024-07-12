import React, { useState, MouseEvent } from 'react';

interface ButtonLinkProps {
  children: React.ReactNode;
  defaultColor?: string;
  hoverColor?: string;
  activeColor?: string;
  onClick?: () => void;
  disable?:boolean
  className?:string
  type?:string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({  type='link', className='', children, defaultColor, activeColor, onClick,disable }) => {
  const [color, setColor] = useState(defaultColor);

  const handleMouseDown = () => {
    setColor(activeColor);
  };

  const handleMouseUp = () => {
    setColor(defaultColor);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    
    <div
      className={`${className}  ${disable ? 'cursor-not-allowed' :'cursor-pointer'}    hover:border-toblue hover:text-blue-600`}
      // style={{ color:disable? '#B3B3B3':color,userSelect:'none' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setColor(defaultColor)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

ButtonLink.defaultProps = {
  defaultColor: '#1890FF',
  activeColor: '#1278d7',
  disable:false
};

export default ButtonLink;
