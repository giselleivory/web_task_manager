import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import NotFound from './pages/NotFound';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f4f6f9', minHeight: '100vh', margin: 0, paddingBottom: '40px' }}>
      {/* Navbar Modern */}
      <nav style={{ backgroundColor: '#2c3e50', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: 'white', margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>Task Manager App</h2>
        <div>
          <Link to="/" style={{ color: '#ecf0f1', textDecoration: 'none', marginRight: '20px', fontWeight: '500' }}>Beranda</Link>
          <Link to="/add" style={{ backgroundColor: '#3498db', color: 'white', textDecoration: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '500' }}>+ Tambah Tugas</Link>
        </div>
      </nav>

      {/* Container Utama */}
      <div style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px' }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                tasks={tasks} 
                onDeleteTask={handleDeleteTask} 
                onToggleComplete={handleToggleComplete} 
              />
            } 
          />
          <Route 
            path="/add" 
            element={<AddTask onAddTask={handleAddTask} />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;