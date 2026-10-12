function TaskCard({ task, onDelete, onToggleComplete }) {
  // Warna badge berdasarkan kategori
  const getBadgeColor = (kategori) => {
    switch (kategori) {
      case 'Pekerjaan': return '#e74c3c';
      case 'Belajar': return '#e67e22';
      default: return '#2ecc71';
    }
  };

  return ( 
    <div 
      style={{ 
        backgroundColor: task.isCompleted ? '#f8f9fa' : '#ffffff', 
        padding: '20px', 
        marginBottom: '15px', 
        borderRadius: '10px',
        borderLeft: `5px solid ${task.isCompleted ? '#bdc3c7' : '#3498db'}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: task.isCompleted ? 0.75 : 1
      }}
    >
      <div>
        <h3 
          style={{ 
            margin: '0 0 8px 0', 
            fontSize: '18px', 
            color: task.isCompleted ? '#7f8c8d' : '#2c3e50',
            textDecoration: task.isCompleted ? 'line-through' : 'none' 
          }}
        >
          {task.judul}
        </h3>
        <span 
          style={{ 
            backgroundColor: getBadgeColor(task.kategori), 
            color: 'white', 
            fontSize: '12px', 
            padding: '3px 8px', 
            borderRadius: '12px',
            fontWeight: '600'
          }}
        >
          {task.kategori}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          onClick={() => onToggleComplete(task.id)}
          style={{
            backgroundColor: task.isCompleted ? '#95a5a6' : '#2ecc71',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '13px'
          }}
        >
          {task.isCompleted ? '↩️ Batal' : '✓ Selesai'}
        </button>

        <button 
          onClick={() => onDelete(task.id)} 
          style={{ 
            backgroundColor: '#e74c3c', 
            color: 'white', 
            border: 'none', 
            padding: '8px 12px', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '13px'
          }}
        >
          🗑️ Hapus
        </button>
      </div>
    </div>
  );
}

export default TaskCard;