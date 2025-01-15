import React from 'react';
import { 
  LayoutDashboard, 
  Table, 
  LineChart, 
  Users, 
  Settings,
  LogIn,
  UserPlus,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Table, label: 'Tables', id: 'tables' },
  { icon: LineChart, label: 'Billing', id: 'billing' },
  { icon: Users, label: 'Projects', id: 'projects' },
  { icon: Users, label: 'Virtual Reality', id: 'virtual-reality' },
  { icon: Settings, label: 'RTL', id: 'rtl' },
];

const accountItems = [
  { icon: Users, label: 'Profile', id: 'profile' },
  { icon: LogIn, label: 'Sign In', id: 'sign-in' },
  { icon: UserPlus, label: 'Sign Up', id: 'sign-up' },
];

export function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg">Soft UI Dashboard</span>
        </div>

        <hr className="my-4" />

        <nav className="space-y-6">
          <div>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${
                  currentPage === item.id
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div>
            <h6 className="text-xs font-bold uppercase text-gray-400 mb-4">
              Account pages
            </h6>
            {accountItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${
                  currentPage === item.id
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="bg-gray-100 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="h-5 w-5 text-gray-600" />
              <h6 className="font-semibold">Need help?</h6>
            </div>
            <p className="text-sm text-gray-600">
              Please check our documentation
            </p>
            <button 
              onClick={() => window.open('https://www.creative-tim.com/learning-lab/react/overview/soft-ui-dashboard/', '_blank')}
              className="mt-3 w-full bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Documentation
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
