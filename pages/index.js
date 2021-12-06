import styles from '../styles/Home.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import JSONDATA from '../components/PODCAST_DATA';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Head from "next/head";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

function getNextDayOfTheWeek(dayName, excludeToday = true, refDate = new Date()) {
  const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"]
                    .indexOf(dayName.slice(0,3).toLowerCase());
  if (dayOfWeek < 0) return;
  refDate.setHours(0,0,0,0);
  refDate.setDate(refDate.getDate() + +!!excludeToday + 
                  (dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7);
  return refDate;
}

function nextEp(){
if (new Date().getDay() == 1) {
  return("Today!")
  } else {
  
    return("Monday " + getNextDayOfTheWeek("monday", true).toLocaleDateString('en-GB', {day:"numeric", month:"long"}))
    
  }
}

const lastEntry = JSONDATA[JSONDATA.length -1]

  return (
  <>
  <Head>
      <title>Home | Mandate Monday</title>
      <meta name="title" content="Home | Mandate Monday"/>
      <meta name="description" content="Weekly comedy Podcast about daily life and challenges we face, hosted by Grant Fosbraey and Jacob Jenner"/>
      <meta name="keywords" content="Mandate Monday, Podcast, Comedy, Weekly Update"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Home | Mandate Monday"/>
      <meta property="og:site_name" content="Mandate Monday"/>
      <meta property="og:url" content=""/>
      <meta property="og:description" content="Weekly comedy Podcast about daily life and challenges we face, hosted by Grant Fosbraey and Jacob Jenner"/>
      <meta property="og:type" content="website"></meta>
 </Head>

  <div className="homeTop" alt="Grant and Jacob Podcast Hosts winter-is-coming">
    <div className="wrapper">
    <div class="snow snow--near"></div>
  <div class="snow snow--near snow--alt"></div>
  
  <div class="snow snow--mid"></div>
  <div class="snow snow--mid snow--alt"></div>
  
  <div class="snow snow--far"></div>
  <div class="snow snow--far snow--alt"></div>
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <h1>MANDATE MONDAY</h1>
          <p className="">Two guys, One podcast. Dim the lights, and put your feet up as Grant Fosbraey and Jacob Jenner attempt to set the world to rights. Tackling a variety of subjects, and falling down many dark holes.</p>
          <div className={styles.padBot}>
          <Link href="/episodes"><a className="episodeButton">View Episodes</a></Link>
          </div>
        </Col>
        
      </Row>
    </Container>
    </div>
  </div>
<div>
  <div className={styles.latestEp} key={lastEntry.id}>
    
    <div className="wrapper">
      <div className={styles.card}>
        <h2 className={styles.padBot}>
          View our lastest episode below!
        </h2>
        
        <p className={styles.subTitle}>{lastEntry.text}</p>
      
        <iframe title="Podcast Player" sandbox="allow-scripts" src={lastEntry.link} height="100%" width="100%" frameBorder="0" scrolling="no"></iframe>
      
        <h3 className={styles.padTop}> New episodes released Weekly!</h3>
        <h4 className={styles.padBot}>Next episode is {nextEp()}</h4>
        <Link href="/episodes"><a className="episodeButton">View More Episodes</a></Link>

      </div>    
    </div>
  </div>
  <div className={styles.socials} alt="Podcast Recording on Mac">
      <Container>
          <Col md={6} sm={12} className={styles.justifyCenter}>
            <p className={styles.socialTitle}>Follow Us On</p>
             <a href="https://www.facebook.com/mandatemondaypodcast" aria-label="Facebook"><FacebookIcon className={styles.iconFB} /></a>
             <a href="https://www.instagram.com/mandate.monday/?hl=en" aria-label="Instagram"><InstagramIcon className={styles.iconIG} /></a>
             <a href="https://open.spotify.com/show/0A5X6YmBNxU8v4TXma7DdA?si=AR11TVLdRxCpAq_BLDqJ_Q&dl_branch=1" aria-label="Spotify"><FontAwesomeIcon className={styles.iconTw} icon={faSpotify} /></a>
          </Col>
      </Container>
  </div>
  </div>
  </>
  )
}
