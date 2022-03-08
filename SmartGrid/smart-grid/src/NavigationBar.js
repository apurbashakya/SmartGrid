const NavigationBar = () => {
    return (
        <nav className="NavigationBar">
            ELCON
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