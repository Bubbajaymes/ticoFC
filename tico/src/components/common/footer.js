import { Col, Row, Tag } from "antd";
import { Avatar, List } from 'antd';
import LeagueTable from "../home/table";

const featured = [
    {
      image: require('../../assets/image/fanz.jpg'),
      title: 'RUTH NEKESA: ELEVEN MONTHS BEHIND THE KEYBOARD WITH CHAMPIONS ',
      cost: '£2.50',
      link: 'https://www.google.com/'
    },
    {
    image: require('../../assets/image/fanzo.jpg'),
      title: 'RAIDERS CELEBRATE INTERNATIONAL DAY OF CHARITY',
      cost: '£3.50',
      link: 'https://www.google.com/'
    },
    {
      image: require('../../assets/image/fanzon.jpg'),
        title: 'TICO BEBS WIN CECAFA REGIONAL QUALIFIERS',
        cost: '£3.50',
        link: 'https://www.google.com/'
      },
      {
        image: require('../../assets/image/fanzone.jpg'),
          title: 'TICO RAIDERS CELEBRATES WORLD FOOD DAY',
          cost: '£3.50',
          link: 'https://www.google.com/'
        },
   
  ];

  const data = [
    'How can I join the football club?',
    'Are there any membership fees?',
    'What equipment do players need?',
    'Are there opportunities for parent involvement?',
    'How can I stay updated with club news and events?',
  ];

function AppFooter() {
    return (
        <div className="footerWidget">
            <div className="container" >
                <Row gutter={[20, 20]}>
                    {/* featured */}
                    <Col xs={24} sm={12} md={6} >
                      <h2>FANZONE</h2>
                        <List 
                            itemLayout="horizontal"
                            dataSource={featured}
                            renderItem={(item) => (
                              <List.Item >
                                <List.Item.Meta
                                  avatar={<Avatar src={item.image} />}
                                  title={<a href={item.link}>{item.title}</a>}
                                  
                                />
                              </List.Item>
                            )}
                        />                        
                    </Col>
                    {/* Top Rated */}
                    <Col xs={24} sm={12} md={6}>

                      <LeagueTable />
                        
                    </Col>     
                    {/* Tags */}
                    <Col xs={24} sm={12} md={6}>
                      <h2>TAGS</h2>
                      <div className="tags">
                        <Tag>Tico</Tag>
                        <Tag><a href="https://www.lipsum.com/feed/html">Bebs</a></Tag>
                        <Tag closable>Kiambiu</Tag>
                        <Tag closable>Win &amp; Draw</Tag>
                        <Tag>Elly</Tag>
                        <Tag>Matchday</Tag>
                        <Tag><a href="https://www.lipsum.com/feed/html">Tico-U15</a></Tag>
                        <Tag closable>Venue</Tag>
                        <Tag closable>Fixture &amp; Results</Tag>
                        <Tag>Akolli</Tag>
                      </div>
                    </Col>  
                    {/* Recent Posts */}
                    <Col xs={24} sm={12} md={6}>
                      <h2>FAQ</h2>
                      <List
                        size="small"
                        className="recentPost"
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                      />
                    </Col>                                                     
                </Row>
            </div>
        </div>

    );
}

export default AppFooter;