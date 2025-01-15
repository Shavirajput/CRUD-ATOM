import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Tables } from './components/Tables';
import { Billing } from './components/Billing';
import { VirtualReality } from './components/VirtualReality';
import { RTL } from './components/RTL';
import { Profile } from './components/Profile';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { ProjectsTable } from './components/ProjectsTable'; // Import the ProjectsTable component

type Page = 'dashboard' | 'tables' | 'billing' | 'virtual-reality' | 'rtl' | 'profile' | 'sign-in' | 'sign-up' | 'projects'; // Add 'projects' to the Page type

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'tables':
        return <Tables />;
      case 'billing':
        return <Billing />;
      case 'virtual-reality':
        return <VirtualReality />;
      case 'rtl':
        return <RTL />;
      case 'profile':
        return <Profile />;
      case 'sign-in':
        return <SignIn />;
      case 'sign-up':
        return <SignUp />;
      case 'projects': // Add case for rendering ProjectsTable
        return <ProjectsTable />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout onNavigate={(page: string) => setCurrentPage(page as Page)} currentPage={currentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
