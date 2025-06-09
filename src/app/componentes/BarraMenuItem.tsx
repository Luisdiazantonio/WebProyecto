'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  path: string;
  icon: ReactNode;
  title: string;
}

export const BarraMenuItem = ({ path, icon, title }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === path;

  return (
    <Link
      href={path}
      className={`
        w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 
        hover:bg-white/5 transition ease-linear duration-150
        ${isActive ? 'bg-blue-800 text-white' : 'text-slate-300'}
      `}
    >
      <div>{icon}</div>
      <div className="flex flex-row">
        <span className="text-lg font-bold leading-5">{title}</span>
      </div>
    </Link>
  );
};