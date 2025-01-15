import React from 'react';
import { ProjectsTable } from './ProjectsTable';

export function Tables() {
  const caseType = 'projects'; // This should be dynamically set based on your application logic

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Tables</h1>
      {caseType === 'projects' && <ProjectsTable />}
      
    </div>
  );
}
