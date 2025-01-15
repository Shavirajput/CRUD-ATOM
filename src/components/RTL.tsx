import React from 'react';
import { StatsCard } from './StatsCard';
import { HomeIcon } from 'lucide-react'; // Use a valid icon import

export function RTL() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">RTL</h1>
      <StatsCard 
        title="Example Title" 
        value="100" 
        change="+10" 
        icon={HomeIcon} // Use the HomeIcon
        color="bg-blue-500" 
      />
      <p>RTL page content goes here</p>
    </div>
  );
}
