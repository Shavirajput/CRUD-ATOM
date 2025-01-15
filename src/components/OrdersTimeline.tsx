import React from 'react';
import { Clock } from 'lucide-react';

const orders = [
  {
    id: '#BS-242',
    title: 'Design changes',
    amount: '$2,400',
    time: '22 DEC 7:20 PM',
  },
  {
    id: '#FB-242',
    title: 'New order #4219423',
    amount: '$1,800',
    time: '21 DEC 11:21 PM',
  },
  {
    id: '#QW-103',
    title: 'Server payments for April',
    amount: '$4,500',
    time: '21 DEC 9:28 PM',
  },
  {
    id: '#MS-415',
    title: 'New card added for order #3210145',
    amount: '$3,000',
    time: '20 DEC 3:52 PM',
  },
  {
    id: '#RV-126',
    title: 'Unlock packages for development',
    amount: '$2,000',
    time: '19 DEC 11:35 PM',
  },
];

export function OrdersTimeline() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Orders overview</h2>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-medium">+30%</span> this month
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-900">
                  {order.title}
                </h3>
                <p className="text-sm text-gray-500">{order.amount}</p>
              </div>
              <p className="text-sm text-gray-500">{order.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}