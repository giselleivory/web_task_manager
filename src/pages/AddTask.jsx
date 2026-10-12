import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask({ onAddTask }) {
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('Pekerjaan');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul.trim()) return alert('Judul tugas tidak boleh kosong!');
    
    const newTask = {
      id: Date.now(),
      judul,
      kategori,
      isCompleted: false
    };

    onAddTask(newTask);
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h2 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '20px' }}>Tambah Tugas Baru</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '6px', color: '#34495e', fontWeight: '500' }}>Judul Tugas:</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Contoh: Belajar React Router"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #dcdfe6', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '6px', color: '#34495e', fontWeight: '500' }}>Kategori:</label>
          <select 
            value={kategori} 
            onChange={(e) => setKategori(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #dcdfe6', backgroundColor: 'white' }}
          >
            <option value="Pekerjaan">Pekerjaan</option>
            <option value="Pribadi">Pribadi</option>
            <option value="Belajar">Belajar</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="submit" 
            style={{ padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
          >
            Simpan Tugas
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/')}
            style={{ padding: '10px 20px', backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;