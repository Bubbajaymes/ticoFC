import { Button, Carousel } from "antd";

const items = [
    {
      key: '1',
      title: 'Introduction',
      content: "Welcome to TICO FOOTBALL CLUB's website, where passion meets play! Whether you're a devoted fan, a curious newcomer, or a seasoned player, we're thrilled to have you join us. Explore our latest matches, player profiles, upcoming events, and community initiatives. Together, let's celebrate the beautiful game!",
    },
    {
      key: '2',
      title: 'Merchendise',
      content: "Show Your Support in Style! Browse Our Latest Collection of Club Merchandise. From Jerseys to Accessories, We've Got Everything You Need to Represent Your Team! Shop Now and Wear Your Pride!",
    },
    {
      key: '3',
      title: 'News',
      content: 'Discover the pulse of our latest news section! Dive into the most recent updates, trends, and stories that matter. From breaking news to insightful analyses, stay ahead of the curve with our curated selection of articles. Explore, engage, and stay informed with the latest happenings in our dynamic world.',
    },
  ]


function AppHero() {
    return (
        <div id="hero" className="heroBlock" style={
            {
                
                display: 'flex',
                flexDirection: 'column',
                
                }
          }>
            <Carousel autoplay >
            {
                    items.map(item => {
                        return(
                           <div className="container-fluid">
                              
                              <div className="content" style={
                                {
                                    height: '100vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0px'
                                    }
                              }>
                                <h2 style={{}}>{item.title}</h2>
                                <strong>{item.content}</strong>
                                <div className="btnHolder">
                                <Button type="primary" size="large">Read More</Button>
                                {/* <Button size="large"><i class= 'fas fa-desktop'></i>Watch a Demo</Button> */}
                                </div>
                              </div>
                          </div>                            
                        );
                    })
                }
            </Carousel>
        </div>
    );
}

export default AppHero;