import {Link } from "react-router-dom";
function Navigation() {
  const cartStyle={
    background:"#F59E0D",
    display:"flex",
    padding:"6px 12px",
    borderRadius:"50px",
  }
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Link to="/">
      <img style={{height:"45px"}} src="/images/logo.png" alt="" />
      </Link>
      <ul className="flex justify-between items-center gap-4">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products' >Products</Link></li>
        <li>
          <Link to="/cart">
            <div style={cartStyle}>
            <span className="text-black">10</span>
            <img className="ml-2" src="/images/cart.png" alt="" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
   
 
   )
}

export default Navigation