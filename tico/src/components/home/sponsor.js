import { Col, Row } from "antd";


const items = [
    {
        key: '1',
        image: require('../../assets/image/serene.png'),
    },
    {
        key: '1',
        image: require('../../assets/image/img10.jpg'),
    },
    {
        key: '1',
        image: require('../../assets/image/Serene logo.png'),
    },
    {
        key: '1',
        image: require('../../assets/image/img11.jpg'),
    },
    {
        key: '1',
        image: require('../../assets/image/img12.jpg'),
    },
    {
        key: '1',
        image: require('../../assets/image/mibak.jpg'),
    },
  
]



function AppSponsor() {
    return (
        <div className="section sponsors">
            <h2>Our Sponsors</h2>
            <Row gutter={16}>
                {
                    items.map(item => {
                        return (
                            <Col xs={12} sm={8} key={item.key}>
                                <div className="">
                                    <div className="">
                                        <img style={{width: 100}} src={item.image} alt='item' />
                                    </div>
                                </div>
                            </Col>
                        );
                    })
                }

            </Row>
                </div>
    );
}

export default AppSponsor;