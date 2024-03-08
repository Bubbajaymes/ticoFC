import { FacebookOutlined, InstagramOutlined, MailOutlined, MobileOutlined, TwitterOutlined } from "@ant-design/icons";

function Copyright() {
    return (
        <div className="footerCopyright">
            <div className="container" >
                <div className="copyright">
                    &copy; Copyright 2024 TICO RAIDERS FC. All Rights Reserved.
                </div>
                <div className="contactInfo">
                    <ul>
                        <li><a href="tel: 0716641112"><span><MobileOutlined /> 0716641112</span></a></li>
                        <li><a href="mailto: jaymesbubba14@gmail.com"><span><MailOutlined />jaymesbubba14@gmail.com</span></a></li>
                    </ul>
                </div>
                <div className="otherInfo">
                <ul className="socialMedia">
                        <li><a href="https://www.facebook.com/jaymesbubba"></a><FacebookOutlined /></li>
                        <li><a href="https://twitter.com/BubbaJaymes"></a><TwitterOutlined /></li>
                        <li><a href="https://instagram.com"></a><InstagramOutlined /></li>
                    </ul>
                </div>
               
            </div>
            {/* <BackTop  />  */}
        </div>
    );
}

export default Copyright;