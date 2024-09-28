import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode; // Icône SVG à passer en tant que propriété
  href: string; // Lien de navigation
}

export const NavLink: React.FC<NavLinkProps> = ({  icon, href }) => {
  return (
    <li>
      <a href={href} className="flex items-center">
        <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
          {icon} {/* Affiche l'icône passée en tant que propriété */}
        </span>
      </a>
    </li>
  );
};

