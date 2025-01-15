import React from 'react';
import { ReviewsCard } from './ReviewsCard';

export function VirtualReality() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Virtual Reality</h1>
      <ReviewsCard />
      <p>Virtual Reality page content goes here</p>
    </div>
  );
}