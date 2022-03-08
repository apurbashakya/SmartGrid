const Home = () => {
    const homeClick = () => {
     console.log("CHARTS" );
       
    //const homeClick = (chart) => {
     //   console.log("CHARTS" + chart);
     //<button onClick={(e) => homeClick('pie', e.target)}>Saved</button>
    }
    return (
        <div className="Home">
            <h2>DASHBOARD</h2>
            <button onClick={homeClick}>HOME</button>
            <br/>
            <br/>
            <button onClick={homeClick}>ANALYSIS</button>
            <br/>
            <br/>
            <button onClick={homeClick}>SAVINGS</button>
            <br/>
            <br/>
            <button onClick={homeClick}>COMMUNITY</button>
        </div>
    );
}

export default Home;