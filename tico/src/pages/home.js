import { Col, Row } from "antd";
import AppHero from "../components/home/hero";
import AppNews from "../components/home/news"


function AppHome() {
    return(

        <div>
            <Row>
               <Col>
                  <AppHero />
               </Col> 
            </Row>
            <div >
                <AppNews />
            </div>
            
            
        </div>
            
       


    )
}

export default AppHome;