import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Anime = (props) => {
    // console.log(props.anime)

    const { image, name, age, salary, movie } = props.anime;

    return (
        <Row xs={1} md={3} className="g-4">
            {
                Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </Row>
    );
};

export default Anime;

{/* <div>
 <img style={{ height: '100px' }} src={image} alt="" />
 </div> */}