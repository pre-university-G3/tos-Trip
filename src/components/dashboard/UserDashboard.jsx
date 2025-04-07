import React from "react";
import { FaUsers, FaUserCheck, FaUserTimes } from "react-icons/fa";

const users = [
  { email: "john.doe123@gmail.com", date: "Apr 23, 2025", role: "admin", status: "active" },
  { email: "jane.smith456@gmail.com", date: "Apr 23, 2025", role: "user", status: "active" },
  { email: "sarah.davis.test@gmail.com", date: "Apr 18, 2025", role: "user", status: "banned" },
  { email: "sophia.martin.mail@gmail.com", date: "Apr 15, 2025", role: "user", status: "banned" },
  { email: "harper.young.ai@gmail.com", date: "Apr 15, 2025", role: "user", status: "active" },
  { email: "chris.taylor.work@gmail.com", date: "Apr 11, 2025", role: "admin", status: "active" },
];

const UserDashboard = () => {
  const stats = [
    {
      label: "ចំនួនអ្នកប្រើសរុប",
      value: users.length,
      growth: "+12%",
      icon: <FaUsers className="w-6 h-6 text-blue-500" />,
    },
    {
      label: "អ្នកប្រើសកម្ម",
      value: users.filter(u => u.status === "active").length,
      growth: "+8%",
      icon: <FaUserCheck className="w-6 h-6 text-green-500" />,
    },
    {
      label: "អ្នកប្រើស្ដី",
      value: users.filter(u => u.status === "banned").length,
      growth: "+15%",
      icon: <FaUserTimes className="w-6 h-6 text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-khmer">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-green-600 text-sm">{stat.growth} កាលពីម្សិលមិញ</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <select className="border border-gray-300 p-2 rounded-md shadow-sm">
            <option>30ថ្ងៃចុងក្រោយ</option>
          </select>
          <input
            type="text"
            placeholder="ស្វែងរក..."
            className="border border-gray-300 p-2 rounded-md shadow-sm w-full sm:w-1/3"
          />
        </div>

        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr className="border-b text-gray-600 text-sm">
              <th className="py-3 px-2">អ៊ីមែល</th>
              <th className="px-2">កាលបរិច្ឆេទ</th>
              <th className="px-2">តួនាទី</th>
              <th className="px-2">ស្ថានភាព</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={idx}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-2 text-sm text-gray-800">{user.email}</td>
                <td className="px-2 text-sm text-gray-700">{user.date}</td>
                <td className="px-2 text-sm capitalize text-gray-700">{user.role}</td>
                <td className="px-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
