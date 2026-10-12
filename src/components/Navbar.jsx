import { NavLink } from 'react-router-dom';
function Navbar() {
return (
<nav style={{ padding: '15px', backgroundColor: '#282c34',
display: 'flex', gap: '20px' }}>
<NavLink
to="/"
style={({ isActive }) => ({ color: isActive ? '#61dafb'
: '#fff', textDecoration: 'none' })}
>
Daftar Tugas
</NavLink>
<NavLink
to="/tambah"
style={({ isActive }) => ({ color: isActive ? '#61dafb'
: '#fff', textDecoration: 'none' })}
>
Tambah Tugas
</NavLink>
<NavLink
to="/about"
style={({ isActive }) => ({ color: isActive ? '#61dafb'
: '#fff', textDecoration: 'none' })}
>
Tentang Aplikasi
</NavLink>
</nav>
);
}
export default Navbar;