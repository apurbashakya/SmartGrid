import React from "react";
import { Card } from "react-bootstrap";
const Community = () => {
    const cardInfo = [
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0kj7XPF_bdTVCg7IFuPR-gHaFV%26pid%3DApi&f=1",
            title: "Discord",
            link: <a href="https://discord.gg/ZuF9Q9Kb">JOIN US ON DISCORD</a>,
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8CqhYk-Xsj377uERoYrMCgHaEK%26pid%3DApi&f=1",
            title: "Reddit",
            link: <a href="https://www.reddit.com/r/Elcon_Energy/">JOIN US ON REDDIT</a>,
        },
    ];
    const renderCard = (card, index) => {
        return (
            <div><Card style={{ width: "13rem" }} key={index} className="box">
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                    <Card.Text>{card.link}</Card.Text>
                </Card.Body>
            </Card>
            </div>
        );
    };
    return <div className="grid">{cardInfo.map(renderCard)}</div>;
}
export default Community;
