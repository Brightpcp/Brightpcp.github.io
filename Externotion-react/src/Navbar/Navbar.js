import './Navbar.css'




function Navbar() {
    return (
      <div>
          
    <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo" ><a href="#add"><strong>Exer</strong>Notion</a></div>
        <ul className="links">
            <li><a href="#add">Add Your Activity</a></li>
            <li><a href="./history.html">Activity History</a></li>
            <li><a href="#footer">Subscribe</a></li>
            <li><a href="#footer">Sign Up</a></li>
        </ul>
        <label for="nav-toggle" class="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </label>
    </nav>
       
      </div>
    );
  }
  
  export default Navbar;