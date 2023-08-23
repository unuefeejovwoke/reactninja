const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The LazyDev Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="blog">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;