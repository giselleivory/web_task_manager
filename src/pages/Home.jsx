import { useState } from 'react';
import TaskCard from "../components/TaskCard";

function Home({ tasks, onDeleteTask, onToggleComplete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#2c3e50', margin: 0 }}>Daftar Tugas</h2>
        <span style={{ fontSize: '14px', color: '#7f8c8d' }}>Total: {filteredTasks.length} Tugas</span>
      </div>
      
      {/* Search Bar Modern */}
      <div style={{ marginBottom: '25px' }}>
        <input
          type="text"
          placeholder="🔍 Cari tugas berdasarkan judul..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #dcdfe6',
            fontSize: '15px',
            boxSizing: 'border-box',
            outline: 'none',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
          }}
        />
      </div>

      {filteredTasks.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'white', borderRadius: '10px', color: '#95a5a6' }}>
          <p style={{ margin: 0, fontSize: '16px' }}>Belum ada tugas yang cocok atau ditemukan.</p>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default Home;