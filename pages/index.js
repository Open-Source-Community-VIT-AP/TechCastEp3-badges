import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn, useSession } from "next-auth/client";
import profile from "../public/profile.png";
import React, { useEffect, useRef } from 'react'
import { useToImage } from 'react-to-image'

export default function Home() {
  const [session] = useSession();
  console.log(session);

  const { ref, getPng } = useToImage()



  return (
    <div className={styles.container}>
      <Head>
        <title>Techcast</title>
        <meta name="description" content="Techcast - 3 Hacktoberfest special" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/techcastlogo.png" height={119} width={504} />

        <p className={styles.event_name}>
          Techcast episode 3 Hacktoberfest special
        </p>

        <p className={styles.event_details}>
          Speaker: <b>Giuseppe Bonocore </b> Principal Solution Architect @RedHat.
          <br />
          October 3, 2021 4pm / Online
        </p>
        {/* <p>{session? session.user.name : "Your Name"}</p> */}

        <div className={styles.ticket_container}>
          <div ref={ref}>
            <div className={styles.ticket}>
            
        <div className={styles.ticket_event_name}>
          {/* <Image src="/ticketlogo.png" width={130} height={45}/> */}
          
          <br />
        </div>
        <div className={styles.ticket_profile}>
          <Image
            src={session ? session.user.image : profile}
            width={100}
            height={100}
          />
          <h3>{session ? session.user.name : "Your Name"}</h3>
        </div>
        <div className={styles.ticket_date}>
          <p style={{ fontSize: "12px" }}>
            October 3, 2021
            <br />
            4pm Online
          </p>
        </div>

        <div className={styles.ticket_host}>
          <p style={{ fontSize: "10px" }}>
            Hosted by
            <br />
            <br />
            <b> OSC VITAP</b> &nbsp; &nbsp; <b> WIOS VITAP </b>
          </p>
        </div>
      </div>
        </div>
          <button onClick={!session ? signIn : getPng}>
            {!session ? "Claim with github" : "Download"}
          </button>
          <p style={{marginTop:"50px"}}>Share this on Instagram, Linkedin tag us @oscvitap and <br /> get a chance to win some amazing prizes </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://oscvitap.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brought to you by &nbsp; <b> Open Source Community VIT AP</b>
        </a>
      </footer>
    </div>
  );
}
