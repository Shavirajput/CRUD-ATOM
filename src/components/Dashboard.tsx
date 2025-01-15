import React from 'react';
import { StatsCard } from './StatsCard';
import { ProjectsTable } from './ProjectsTable';
import { ReviewsCard } from './ReviewsCard';
import { OrdersTimeline } from './OrdersTimeline';
import { Wallet, MousePointer, ShoppingCart, Users } from 'lucide-react';

const stats = [
  {
    title: 'Money',
    value: '$1500',
    change: '+55%',
    icon: Wallet,
    color: 'bg-orange-500',
  },
  {
    title: 'Users',
    value: '357',
    change: '+24%',
    icon: Users,
    color: 'bg-gray-900',
  },
  {
    title: 'Clients',
    value: '2300',
    change: '+5%',
    icon: MousePointer,
    color: 'bg-green-500',
  },
  {
    title: 'Sales',
    value: '940',
    change: '+90%',
    icon: ShoppingCart,
    color: 'bg-blue-500',
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectsTable />
        </div>
        <div>
          <ReviewsCard />
        </div>
      </div>

      <div>
        <OrdersTimeline />
      </div>
    </div>
  );
}