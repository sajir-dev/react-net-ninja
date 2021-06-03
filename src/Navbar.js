const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <a href="#">Home</a>
                <a href="/create" style={ { // inline styling using objects
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                } }>New Blog</a>
                <a href="/all">All blogs</a>
            </div>
        </nav>
    )
}

export default Navbar;