import type React from "react";
import type { InputProps } from "../types/RegisterInput";

const UserData: React.FC<InputProps> = ({ regUser }) => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Suggested Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {regUser.length === 0 ? (
          <p className="text-gray-400">No users registered yet.</p>
        ) : (
          regUser.map((user, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{user.fullname}</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserData;
