import React from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: {
    label: string;
    description?: string;
    status?: string;
    progress?: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg border w-80">
      <div className="flex items-center mb-2">
        <span className="text-sm font-bold text-red-500">{data.status}</span>
      </div>
      <h3 className="text-lg font-bold mb-1">{data.label}</h3>
      {data.description && (
        <p className="text-gray-600 text-sm mb-2">{data.description}</p>
      )}
      <div className="relative h-2 w-full bg-gray-200 rounded-full mb-2">
        <div
          className="absolute h-2 bg-yellow-500 rounded-full"
          style={{ width: data.progress || '0%' }}
        />
      </div>
      <span
        className={`px-2 py-1 text-xs font-semibold rounded ${
          data.status === 'Done'
            ? 'bg-green-500 text-white'
            : data.status === 'In progress'
            ? 'bg-blue-500 text-white'
            : data.status === 'Critical'
            ? 'bg-red-500 text-white'
            : 'bg-gray-500 text-white'
        }`}
      >
        {data.status}
      </span>
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
      <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
  );
};

export default CustomNode;
