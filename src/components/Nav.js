import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <div className="container">
            <Link to = '/cv'>cv</Link>
             &nbsp; &nbsp; &nbsp; 
            <Link to = '/'>Form</Link>
        </div>
    </nav>
  )
}
