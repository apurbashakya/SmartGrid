const NavigationBar = () => {
    return (
        <nav className="NavigationBar">
            <h1>ELCON</h1>
            <div className="links">
                <a href="/" style={{
                    color:"white",
                    backgroundColor:'#f1356d'
                }}>Contact Us</a>
                <a href="/">Premium</a>
            </div>
        </nav>
    );
}

export default NavigationBar;