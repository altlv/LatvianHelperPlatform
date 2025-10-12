import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBack = true }) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center py-2 mb-4 px-4 bg-white rounded-lg shadow-md">
      {showBack && (
        <button
          aria-label="Atpakaļ"
          onClick={() => navigate(-1)}
          className="mr-2 text-lg bg-transparent border-none"
          type="button"
        >
          ←
        </button>
      )}
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;