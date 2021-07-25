import styles from '../styles/Episodes.module.css'
import JSONDATA from '../components/PODCAST_DATA'
import SearchIcon from '@material-ui/icons/Search';
import {useState} from 'react'
import Head from "next/head";

export default function Episodes(){
    const [searchTerm, setSearchTerm] = useState("")
    return (
    <>
    <Head>
      <title>Episodes | Mandate Monday</title>
      <meta name="title" content="Episodes | Mandate Monday"/>
      <meta name="description" content="Archive of the weekly Podcasts recorded by Grant Fosbraey and Jacon Jenner"/>
      <meta name="keywords" content="Mandate Monday, Podcast, Comedy, Weekly Update"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Episodes | Mandate Monday"/>
      <meta property="og:site_name" content="Mandate Monday"/>
      <meta property="og:url" content=""/>
      <meta property="og:description" content="Archive of the weekly Podcasts recorded by Grant Fosbraey and Jacon Jenner"/>
      <meta property="og:type" content="website"></meta>
    </Head>

    <div className="episodes-background" alt="Mix Deck">
        <div className="wrapper">
              <h1 className={styles.title}>Episodes</h1>
        </div>
    </div>
    <div className={styles.darkBackground}>
        <div className="wrapper">
        <div className="inner-addon left-addon">
            <SearchIcon className="searchIcon" />
            <input 
            type="text" 
            placeholder="search..." 
            className={styles.searchBar}
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }}
            />

        </div>
            {JSONDATA.slice(0).reverse().filter((val)=>{
                if (searchTerm == "") {
                    return val
                } else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val
                }
            }).map((val,key)=>{
                return (

                <div className={styles.card} key={val.id}>
                    <h2 className={styles.episodeTitle}>{val.title}</h2>
                    <iframe sandbox="allow-scripts" className={styles.iframe} src={val.link} height="100%" width="100%" frameBorder="0" scrolling="no"></iframe>
                    <p>{val.text}</p>
                </div>
            
             ) })}


        </div>
    </div>
    </>        
    )
}