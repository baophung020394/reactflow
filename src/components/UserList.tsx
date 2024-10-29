import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
];

const UserList: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-4">
              <Link
                to={`/user/${user.id}`}
                className="block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
              >
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
