import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export const Icon = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col className='d-flex justify-content-center'>

                    <Card style={{ width: '12rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Img style={{ width: "4rem" }} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                            <Card.Subtitle className="mb-2 text-muted mt-2">Choose your Microsoft 365</Card.Subtitle>

                        </Card.Body>

                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '12rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Img style={{ width: "4rem" }} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvg?ver=0c4c&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                            <Card.Subtitle className="mb-2 text-muted mt-2">Find your next PC</Card.Subtitle>

                        </Card.Body>

                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '12rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Img style={{ width: "4rem" }} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rriw?ver=b2d5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                            <Card.Subtitle className="mb-2 text-muted mt-2">Shop Business</Card.Subtitle>

                        </Card.Body>

                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '12rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Img style={{ width: "4rem" }} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWWl29?ver=addd&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                            <Card.Subtitle className="mb-2 text-muted mt-2">Buy Xbox games and consoles</Card.Subtitle>

                        </Card.Body>

                    </Card>
                </Col>



            </Row>

        </Container>


    )
}
