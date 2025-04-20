import React, { useEffect, useState } from "react";
import { FaUsers, FaUserCheck, FaUserTimes } from "react-icons/fa";
import { Link } from "react-router";
import getData from "../../services/get/getData"; 

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getData("users");
        if (data && data.length > 0) {
          setUsers(data);
        } else {
          setUsers([
            {
              email: "ghost1@example.com",
              date: "2025-04-01",
              role: "ghost",
              status: "active",
            },
            {
              email: "ghost2@example.com",
              date: "2025-04-02",
              role: "ghost",
              status: "banned",
            },
          ]);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const stats = [
    {
      label: "ចំនួនអ្នកប្រើសរុប",
      value: users.length,
      growth: "+12%",
      icon: <FaUsers className="w-6 h-6 text-blue-500" />,
    },
    {
      label: "អ្នកប្រើសកម្ម",
      value: users.filter((u) => u.status === "active").length,
      growth: "+8%",
      icon: <FaUserCheck className="w-6 h-6 text-green-500" />,
    },
    {
      label: "អ្នកប្រើស្ដី",
      value: users.filter((u) => u.status === "banned").length,
      growth: "+15%",
      icon: <FaUserTimes className="w-6 h-6 text-red-500" />,
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center py-4">
        <div className="border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-khmer">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Dashboard</h1>
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

      <div className="mb-4">
        <Link to={"/auth/register"}>
          <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition-all cursor-pointer">
            ចុះឈ្មោះ
          </div>
        </Link>
      </div>
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
                className={`border-b last:border-none hover:bg-gray-50 transition-colors ${user.role === "ghost" ? "opacity-70 italic" : ""}`}
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
