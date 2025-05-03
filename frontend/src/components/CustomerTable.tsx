"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  _id: string;
  number: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  brandDevice: string;
  digitalInterest: string;
  noTelpon: string;
  loginHour: string;
  locationType: string;
};

export default function CustomerTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const d = new Date();
  const year = d.getFullYear();

  const fetchUsers = async (page: number) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}?page=${page}&limit=50`
    );
    setUsers(res.data.userData);
    setTotalPages(res.data.totalPage);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customer Data (Page {page})</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-900 ">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Device</th>
            <th className="border px-4 py-2">Digital Interest</th>
            <th className="border px-4 py-2">No Telp</th>
            <th className="border px-4 py-2">Login Activity</th>
            <th className="border px-4 py-2">Location Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center">
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.number}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">{user.name}</td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {year - user.age}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.gender}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.email}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.brandDevice}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.digitalInterest}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.noTelpon}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.loginHour}
              </td>
              <td className="border px-4 py-2 hover:bg-red-300">
                {user.locationType}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-center items-center gap-2 flex-wrap">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-600 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) => {
            return (
              p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1)
            );
          })
          .map((p, idx, arr) => {
            const prev = arr[idx - 1];
            return (
              <span key={p} className="flex items-center">
                {prev && p - prev > 1 && <span className="px-2">...</span>}
                <button
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded ${
                    p === page
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-500"
                  }`}
                >
                  {p}
                </button>
              </span>
            );
          })}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
