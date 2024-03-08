import { Dropdown, Image, Menu, Space, Typography } from "antd";
import { CalendarOutlined, ContactsOutlined, HomeOutlined, InfoCircleOutlined, TeamOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';

// import image1 from "./image/logo.jpg";

const items = [
    {
      key: '1',
      label: 'Senior Team',
    },
    {
      key: '2',
      label: 'Tico Bebs',
    },
    {
      key: '3',
      label: 'Tico Youth',
    },
    {
        key: '4',
        label: 'Tico-U15',
      },
  ];

function AppHeader() {
    return (
        <div className='AppHeader'>
            <div className="logo">
                <Image 
                    width={40}
                    src="https://p7.hiclipart.com/preview/591/549/285/football-team-logo-american-football-football.jpg" alt="logo" 
                />
            <Typography.Title style={{paddingLeft: 7}} >Tico Raiders</Typography.Title>                
            </div>
            <div className="header-menu">
                    <ul>
                        <li><a href="#"><HomeOutlined /> Home</a></li>
                        <li><a href="#"><InfoCircleOutlined /> About</a></li>
                        <li>
                            <a>
                                <TeamOutlined/>
                                <Dropdown
                                  menu={{
                                    items,
                                    selectable: true
                                  }}
                                >
                                  
                                    <Space>
                                      Team
                                      <DownOutlined />
                                    </Space>
                                  
                                </Dropdown>
                            </a>
                         </li>
                        <li><a href="#"><CalendarOutlined /> Fixtures</a></li>
                        <li><a href="#"><ContactsOutlined /> Contact</a></li>
                    </ul>
            </div>
        </div>
    )
}

export default AppHeader;