import React from 'react';
import { OrdersTimeline } from './OrdersTimeline';

export function Billing() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Billing</h1>
      <OrdersTimeline />
      
    </div>
  );
}