"use client";
import React from "react";

/**
 * Composant de carte utilisant les styles de la maison mère
 * Exemple d'utilisation des couleurs et polices de la maison mère
 */
interface StyledCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function StyledCard({ title, children, className = "" }: StyledCardProps) {
  return (
    <div
      className={`p-5 border border-borders rounded-2xl bg-background-highlight dark:bg-gray-900 ${className}`}
    >
      <h4 className="text-lg font-semibold text-text-primary dark:text-white/90 mb-4 font-heading">
        {title}
      </h4>
      <div className="text-text-primary dark:text-gray-300 font-body">
        {children}
      </div>
    </div>
  );
}

/**
 * Composant de bouton utilisant les styles de la maison mère
 */
interface StyledButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
}

export function StyledButton({
  children,
  variant = "primary",
  onClick,
  className = "",
}: StyledButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-body transition-colors";
  
  const variantClasses = {
    primary: "bg-brand-primary text-brand-white hover:bg-brand-hover",
    secondary: "bg-background-highlight text-text-primary border border-borders hover:bg-gray-100",
    outline: "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-brand-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * Composant de badge utilisant les styles de la maison mère
 */
interface StyledBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "error";
  className?: string;
}

export function StyledBadge({
  children,
  variant = "primary",
  className = "",
}: StyledBadgeProps) {
  const baseClasses = "px-3 py-1 rounded-full text-xs font-medium font-body";
  
  const variantClasses = {
    primary: "bg-brand-primary text-brand-white",
    secondary: "bg-background-highlight text-text-secondary border border-borders",
    success: "bg-green-100 text-green-800",
    error: "bg-error text-brand-white",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

