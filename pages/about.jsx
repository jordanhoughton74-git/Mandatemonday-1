import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/About.module.css'


export default function About(){
    return(
    <>
    <Head>
      <title>About | Mandate Monday</title>
      <meta name="title" content="About | Mandate Monday"/>
      <meta name="description" content="An insight on the hosts of Mandate Monday Grant Fosbraey and Jacob Jenner"/>
      <meta name="keywords" content="Mandate Monday, Podcast, Comedy, Weekly Update"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="About | Mandate Monday"/>
      <meta property="og:site_name" content="Mandate Monday"/>
      <meta property="og:url" content=""/>
      <meta property="og:description" content="An insight on the hosts of Mandate Monday Grant Fosbraey and Jacob Jenner"/>
      <meta property="og:type" content="website"></meta>
    </Head>
    
    <div className={styles.background}>
        <div className="wrapper">
            <h1 className={styles.title}>
                Our Story
            </h1>
        </div>
    </div>
    <div className={styles.aboutBackground} alt="mic set up for recording">
        <div className={styles.overlapDiv}>
            <div className="wrapper">
                <h2 className={styles.mainTitle}>MANDATE MONDAY</h2>
                <div className={styles.line}></div>
                <p>Welcome to the Mandate Monday Club, If you’ve got this far - then you’re a legend! Here we will host our 
                    weekly chat shows, on numerous platforms and touching on a variety of subjects from every corner of the 
                    globe! Can a globe have corners?! Let’s discuss it! We’re very explicit in our approach - and we specialise 
                    in absolutely nothing! Think of us as your average joes you’d sit down and have a beer with. Send us in your
                     questions, and get involved. EST. 2021</p>
            </div>
        </div>
    </div>
    <div className={styles.cardDeck}>
        <div className="wrapper">
        <h2 className={styles.hostsTitle}>The Hosts</h2>
        <Container fluid className={styles.padBotLarge}>
            <Row>
                <Col className={styles.card1} md={4} sm={12}>
                    <div className={styles.verticalAlignCard}>
                     <Image className={styles.border} src="/images/GrantFosbraey.jpg" quality={100} alt="Host Grant Fosbraey" width="400px" height="410px"/>
                    </div>
                </Col>
                <Col className={styles.card2} md={8} sm={12}>
                    <div className={styles.verticalAlign}>
                    <h2 className={styles.padBot}>Grant Fosbraey</h2>
                    <p>Grant is the one that speaks loud and has a laugh that sounds like a seagull getting 
                        tortured. He brings a wealth of knowledge on fitness and life lessons and enjoys consuming
                         movies (and food). If you hear anyone eating whilst we’re live, then this guy is probably 
                         guilty. Armed with a degree in Music Production, and an inferiority complex to failing - 
                         Grant delivers passion and drive to our podcast time and time again.</p>
                     </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.padBotLarge}>
            <Row>
                <Col className={styles.card1} md={4} sm={12}>
                    <div className={styles.verticalAlignCard}>
                     <Image className={styles.border} src="/images/JacobJenner.jpg" quality={100} alt="Host Jacob Jenner" width="400px" height="410px"/>
                    </div>
                </Col>
                <Col className={styles.card2} md={8} sm={12}>
                    <div className={styles.verticalAlign}>
                    <h2 className={styles.padBot}>Jacob Jenner</h2>
                    <p>Jacob Jenner - Where to start with this magnificent beast. He stutters more times than a 
                        vinyl player caught on repeat, but perseveres to deliver his point in a meticulous stubborn 
                        way. Which on all accounts is usually incorrect, or for better words loosely based. With that
                         said he has an eye for detail and perfection, maybe this relates to him still being single, 
                         or the fact he can never find a parking spot. Who can say? I can. So get on our podcast, and 
                         let’s explore this ‘Badger Hole’.</p>
                     </div>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
    <div className={styles.contactDiv} alt="mic setup">
        <div className="wrapper">
        <Container fluid>
            <Row className={styles.center}>
                <Col md={4} sm={12}>
                <a aria-label="Spotify" href="https://open.spotify.com/show/0A5X6YmBNxU8v4TXma7DdA?si=AR11TVLdRxCpAq_BLDqJ_Q&dl_branch=1"><FontAwesomeIcon className={styles.spotify} icon={faSpotify} /></a>
                    <h4 className={styles.contactTitle}>Spotify</h4>
                    
                </Col>
                <Col md={4} sm={12}>
                    <a aria-label="Email" href="mailto:info@mandatemonday.co.uk"><EmailIcon className={styles.icon}/></a>
                    <h4 className={styles.contactTitle}><a href="mailto:info@mandatemonday.co.uk">info@mandatemonday.co.uk</a></h4>
                </Col>
                <Col md={4} sm={12}>
                <a aria-label="Instagram" href="https://www.instagram.com/mandate.monday/?hl=en"><InstagramIcon className={styles.iconIg}/></a>
                    <h4 className={styles.contactTitle}>@mandate.monday</h4>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
    
    </>
    )
}