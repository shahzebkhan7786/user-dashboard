import { useUsers } from "../hooks/useUsers";
import { useState } from "react";

const Dashboard = () => {
  const { data, isLoading, error } = useUsers();
  const [search, setSearch] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  const filtered = data.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        placeholder="Search users..."
        className="border p-2 mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map((user) => (
          <div key={user.id} className="p-4 shadow rounded">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
