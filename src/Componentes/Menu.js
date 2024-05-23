import './Css/MenuCss.css';
import { default as toggleSection } from './Js/MenuJs0.js';

export default function Menu() {
    return (
        <>
            <div className="content-container">
                <div className="title-container">
                    <img className="logo" src="https://i.imgur.com/Z1miBpW.png" alt="Title Image" />
                </div>
                <div className="contact-container">
                    <h1 className="styleh1">Follow Us and Stay Tuned</h1>
                    <div className="contact-methods">
                        <a href="https://chat.whatsapp.com/IOkajfYaJpRLlNYWms8dzq"><i className="fab fa-whatsapp icon"></i></a>
                        <a href="https://twitter.com/StickersHubWAX" target="_blank"><i className="fab fa-twitter icon"></i></a>
                        <a href="https://www.facebook.com/people/Stickershub1/100071760019083/" target="_blank"><i className="fab fa-facebook icon"></i></a>
                        <a href="https://discord.gg/NeUgxfuSZQ" target="_blank"><i className="fab fa-discord icon"></i></a>
                    </div>

                    <div className="section-header" onClick={() => toggleSection('profit')}>Profit Tracker Adventure</div>
                    <div className="version-button-container" id="profit-buttons">
                        <a href="free-version" className="version-button free-version">Free Version</a>
                        <a href="normallogin.html" className="version-button normal-version">Normal Version</a>
                        <a href="premiumlogin.html" className="version-button premium-version">Premium Version</a>
                    </div>

                    <div className="section-header" onClick={() => toggleSection('divine')}>Divine Prizes Bag</div>
                    <div className="version-button-container" id="divine-buttons">
                        <a href="divinelogin.html" className="version-button divine-version">Divine Version</a>
                    </div>

                    <div className="section-header" onClick={() => toggleSection('myalbum')}>My Album</div>
                    <div className="version-button-container" id="myalbum-buttons">
                        <a href="myalbum.html" className="version-button myalbum">My Album</a>
                    </div>

                    <div className="section-header" onClick={() => toggleSection('store')}>Store</div>
                    <div className="version-button-container" id="store-buttons">
                        <a href="store.html" className="version-button store">NFTs</a>
                    </div>

                    <div className="section-header" onClick={() => toggleSection('botpod')}>BOTPOD</div>
                    <div className="version-button-container" id="botpod-buttons">
                        <a href="botpod_version.html" className="version-button botpod-version">BOTPOD for Discord</a>
                    </div>

                    <div className="section-header" onClick={() => toggleSection('about-faq')}>FAQ / Support</div>
                    <div className="version-button-container" id="about-faq-buttons">
                        <a href="faq.html" className="version-button about-us">FAQs</a>
                        <a href="support.html" className="version-button faq">Support</a>
                    </div>
                    <img className="fondo" src="https://i.imgur.com/maM4Z2g.jpeg" alt="botpodjoylogo" />
                </div>
            </div>
        </>
    )
}