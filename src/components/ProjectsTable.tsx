import React, { useState } from 'react';
import { 
  createColumnHelper, 
  flexRender, 
  getCoreRowModel, 
  useReactTable 
} from '@tanstack/react-table';
import { Pencil, Trash2, Plus } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  members: string[];
  budget: string;
  completion: number;
}

const initialProjects: Project[] = [
  {
    id: '1',
    name: 'Soft UI XD Version',
    members: ['https://i.pravatar.cc/40?img=1', 'https://i.pravatar.cc/40?img=2'],
    budget: '$14,000',
    completion: 60,
  },
  {
    id: '2',
    name: 'Add Progress Track',
    members: ['https://i.pravatar.cc/40?img=3'],
    budget: '$3,000',
    completion: 10,
  },
  {
    id: '3',
    name: 'Fix Platform Errors',
    members: ['https://i.pravatar.cc/40?img=4', 'https://i.pravatar.cc/40?img=5'],
    budget: 'Not set',
    completion: 100,
  },
  {
    id: '4',
    name: 'Launch our Mobile App',
    members: ['https://i.pravatar.cc/40?img=6', 'https://i.pravatar.cc/40?img=7'],
    budget: '$32,000',
    completion: 100,
  },
  {
    id: '5',
    name: 'Add the New Pricing Page',
    members: ['https://i.pravatar.cc/40?img=8'],
    budget: '$400',
    completion: 25,
  },
];

interface EditModalProps {
  project: Project | null;
  onClose: () => void;
  onSave: (project: Project) => void;
}

function EditModal({ project, onClose, onSave }: EditModalProps) {
  const [formData, setFormData] = useState<Project>(
    project || {
      id: String(Date.now()),
      name: '',
      members: [],
      budget: '',
      completion: 0,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {project ? 'Edit Project' : 'Add New Project'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Budget
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Completion (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={formData.completion}
                onChange={(e) => setFormData({ ...formData, completion: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function ProjectsTable() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const handleDelete = (projectId: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((p) => p.id !== projectId));
    }
  };

  const handleSave = (project: Project) => {
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === project.id ? project : p)));
    } else {
      setProjects([...projects, project]);
    }
  };

  const columnHelper = createColumnHelper<Project>();

  const columns = [
    columnHelper.accessor('name', {
      header: 'Project',
      cell: (info) => (
        <div className="font-semibold">{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor('members', {
      header: 'Members',
      cell: (info) => (
        <div className="flex -space-x-2">
          {info.getValue().map((avatar, index) => (
            <img
              key={index}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={avatar}
              alt=""
            />
          ))}
        </div>
      ),
    }),
    columnHelper.accessor('budget', {
      header: 'Budget',
    }),
    columnHelper.accessor('completion', {
      header: 'Completion',
      cell: (info) => (
        <div>
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium">{info.getValue()}%</span>
            <div className="relative w-full">
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary-500 rounded-full"
                  style={{ width: `${info.getValue()}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEdit(info.row.original)}
            className="p-1 text-blue-600 hover:text-blue-800"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleDelete(info.row.original.id)}
            className="p-1 text-red-600 hover:text-red-800"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Projects</h2>
          <p className="text-sm text-gray-500">30 done this month</p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <EditModal
          project={editingProject}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}