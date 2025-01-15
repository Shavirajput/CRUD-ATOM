import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Layout({ children, onNavigate, currentPage }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar onNavigate={onNavigate} currentPage={currentPage} />
      <div className="ml-64">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}