import { Link } from '@remix-run/react';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to={`contacto/${1}`} className='btn'> ruta dinámica con id 1</Link>
      <Link to={`contacto`} className='btn'> ruta contacto </Link>
    </nav>
  )
}

export default Nav