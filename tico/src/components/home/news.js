// import { Col, Image, Row } from "antd";

// import image1 from '../../assets/image/tico.jpg';
import { Input } from 'antd';
import AppSponsor from './sponsor';

const topStories = [
    {
        key: 1,
        author: 'Baba Yega',
        date: new Date(),
        title: 'The Raiders Enjoyed a Clean Sweep in Dandora',
        image: require('../../assets/image/ticor.jpg'),
        content: ' It was goals galore at the New Dandora Stadium when  Tico FC defeated the hosts, Dandora City reserves 5-0 on Sunday morning. It was the heroics of Elly, Akoli, Maguire ad Ollo that earned the Raiders a massive victory.......'
    },
    {
        key: 2,
        author: 'Oti Juma',
        date: new Date(),
        title: 'COACH REAGAN’S CHARGES COLLECT MAXIMUM POINTS IN PUMWANI',
        image: require('../../assets/image/ticor5.jpg'),
        content: ' The Tico Raiders Team engineered a comfortable 3-0 victory over the Pumwani SC on Sunday afternoon at the Go-Down Stadium in Majengo. From the time the game kicked off, it was clear...'
    },
    {
        key: 3,
        author: 'Were Nas',
        date: new Date(),
        title: 'THE RAIDERS SHIFT THEIR FOCUS BACK TO DOMESTIC LEAGUE',
        image: require('../../assets/image/ticor2.jpg'),
        content: ' Tico Raiders will welcome Jericho side, Jericho All Stars, at Kiambiu Grounds for a midweek clash on Tuesday evening. The Raiders are coming from a Sakaja Super Cup sweep against FC Wenyeji over the weekend and...'
    },
    {
        key: 4,
        author: 'Otieno Kombo',
        date: new Date(),
        title: 'WE WILL EVENTUALLY WIN THE SAKAJA SUPER CUP – COACH REAGAN',
        image: require('../../assets/image/tic.jpg'),
        content: ' Tico Raiders will look to finish the Sakaja Super Cup group stages on the summit of the table when they host Huruma side, Milan Youths on Saturday afternoon. Raiders, who have already qualified for...'
    },
]

function AppNews() {
    return (

        <div class="content clearfix">

             {/* Main Content  */}

            <div class="main-content">
                <h1 class="recent-post-title">Top Stories</h1>

                {
                    topStories.map(topStory => {
                        return (
                            <div class="post clearfix">
                                <img src={topStory.image} alt="" class="post-image" />
                                <div class="post-preview">
                                    <h2><a href="">{topStory.title}</a></h2>
                                    <i className="fa fa-user" style={{margin: '5px'}}>{topStory.author}</i>
                                    &nbsp;
                                    <i class="fa fa-calendar">{topStory.date.toLocaleString()}</i>
                                    <p class="preview-text">
                                        {topStory.content}
                                    </p>
                                    <a href="#" className='read-more'>Read More</a>
                                </div>
                            </div>    
                        )
                    })
                }
  



            </div>

             {/* End od Main Content  */}

            <div class="sidebar">

                <div class="section search">
                    <h2 class="section-title">Search</h2>
                    <form action="index.html" method="post">
                        <Input type='text' className='text-input' placeholder='Search...' />
                        {/* <input type="text" name="search-term" class="text-input" placeholder="Search..."> */}
                    </form>
                </div>

                <div class="section topics">
                    <h2 class="section-title">Upcoming Fixtures</h2>
                    <ul>
                        <li><a href="#">Madu United VS Tico Fc (A) - 05/02/2024 / Mbotela</a></li>
                        <li><a href="#">Tico Fc VS Kayole Vipers (H) - 05/02/2024 / Kiambiu</a></li>
                        <li><a href="#">Tico Fc VS Dago Assasins (H) - 05/02/2024 / Kiambiu</a></li>
                        <li><a href="#">Mathare Dallas VS Tico Fc (A) - 05/02/2024 / Bondeni</a></li>
                        <li><a href="#">Tico Fc VS Kazoze Fc (H) - 05/02/2024 / Kiambiu</a></li>
                        <li><a href="#">Handas United VS Tico Fc (A) - 05/02/2024 / Kibera</a></li>
                        <li><a href="#">Tico Fc VS Trench Town Fc (H) - 05/02/2024 / Kiambiu</a></li>
                    </ul>
                </div>
                <div className="section advert">
                    <h2>Advertise Here!</h2>
                </div>
                <AppSponsor />
            </div>



        </div>
    )
}

export default AppNews;