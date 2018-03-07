import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import AccountsUIWrapper from "../components/AccountsUIWrapper.js";
import Arrow from "react-icons/lib/md/arrow-downward";
import Twitter from "react-icons/lib/fa/twitter";
import styles from "../styles/login.js";

export default class Login extends Component {
  render() {
    const renderStep = num => {
      return (
        <span
          style={{
            ...styles.step,
            ...{ color: "#fff", backgroundColor: "#ffacac" }
          }}
        >
          {num}
        </span>
      );
    };

    return (
      <div style={{ overflow: "hidden" }}>
        <Row className="login__container">
          <Col
            className="page__column"
            sm={{ size: 10, offset: 1 }}
            md={{ size: 8, offset: 2 }}
          >
            <AccountsUIWrapper />
          </Col>
        </Row>
        <Row
          style={{
            borderTop: "2px solid rgb(255, 172, 172)",
            paddingTop: 20,
            borderBottom: "1px solid #f2f2f2",
            paddingBottom: 20,
            width: "90%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                fontSize: 26,
                padding: "5px 16px",
                borderRadius: "999px",
                fontWeight: 700,
                color: "#ffacac",
                backgroundColor: "#fff",
                border: "2px solid #ffacac"
              }}
            >
              8
            </div>
            <div
              style={{
                marginLeft: 10,
                color: "#555555",
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: "0.03em"
              }}
            >
              reasons
            </div>
          </div>
          <br />
          <div
            style={{
              fontSize: 18,

              fontWeight: 200,
              color: "rgb(97, 86, 86)",
              textAlign: "center",
              display: "block",
              width: "100%"
            }}
          >
            to join the challenge<br /> + <br /> use this app
          </div>
        </Row>
        <Row style={styles.rowGray}>
          <div style={styles.rowInner}>
            {renderStep(1)}
            <h2 style={{ ...styles.h2, ...{ marginBottom: 20 } }}>
              You'll benefit from journaling
            </h2>
            <a
              target="_blank"
              href="https://blog.doist.com/benefits-of-journaling-81b663a27608"
              style={styles.link}
            >
              The Productive Benefits of Journaling<br /> (plus 11 ideas for
              making the habit stick)
            </a>

            <a
              target="_blank"
              href=" https://medium.com/the-mission/why-keeping-a-daily-journal-could-change-your-life-9a4c11f1a475"
              style={styles.link}
            >
              Why Keeping a Daily Journal Could Change Your Life
            </a>

            <a
              target="_blank"
              href=" https://www.huffingtonpost.com/thai-nguyen/benefits-of-journaling-_b_6648884.html"
              style={styles.link}
            >
              10 Surprising Benefits You’ll Get From Keeping a Journal
            </a>
            <a
              target="_blank"
              href=" http://www.upworthy.com/9-reasons-why-writing-in-a-journal-should-be-your-only-resolution-in-the-new-year1"
              style={styles.link}
            >
              9 reasons why writing in a journal should be your only resolution
              in the new year.
            </a>
          </div>
        </Row>

        <Row style={styles.rowWhite}>
          <div style={styles.rowInner}>
            {renderStep(2)}
            <h2 style={styles.h2}>It's easy to get started</h2>
            <p style={styles.p}>
              All you need is a pen and paper. Or this app. <br />
            </p>

            <img
              style={{
                border: "3px solid rgb(250, 245, 250)",
                borderRadius: 3,
                maxWidth: "100%",
                maxHeight: "500px",
                margin: "auto",
                marginBottom: 20,
                marginTop: 20
              }}
              src="/images/screenshot-today.png"
              className="loader__img"
            />

            <p style={{ ...styles.p, ...{ fontStyle: "italic" } }}>
              Or Medium, I guess...<br />if you're into that sort of thing...
            </p>
          </div>
        </Row>

        <Row style={styles.rowGray}>
          <div style={styles.rowInner}>
            {renderStep(3)}
            <h2 style={styles.h2}>Science likes journaling</h2>
            <p style={styles.p}>And you can't argue with science...</p>
            <br />

            <a
              target="_blank"
              href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1"
              style={styles.link}
            >
              Journaling for Mental Health
            </a>
            <a
              target="_blank"
              href="https://psychcentral.com/lib/the-health-benefits-of-journaling/"
              style={styles.link}
            >
              The Health Benefits of Journaling
            </a>
            <a
              target="_blank"
              href="http://www.apa.org/monitor/jun02/writing.aspx"
              style={styles.link}
            >
              Writing to heal
            </a>
            <a
              target="_blank"
              href="http://apt.rcpsych.org/content/11/5/338.full"
              style={styles.link}
            >
              Emotional and physical health benefits of expressive writing
            </a>
            <a
              target="_blank"
              href="https://mic.com/articles/110662/science-shows-something-surprising-about-people-who-still-journal#.RVwnFy9jx"
              style={styles.link}
            >
              Science Shows Something Surprising About People Who Still Journal
            </a>
          </div>
        </Row>

        <Row style={styles.rowWhite}>
          <div style={styles.rowInner}>
            {renderStep(4)}
            <h2 style={styles.h2}>
              Developing a new habit is <br />tough but worth it
            </h2>
            <p style={styles.p}>
              Keep track of your journaling progress and access all of your old
              entries in one place.
            </p>
            <br />
            <img
              style={{
                border: "3px solid rgb(250, 245, 250)",
                borderRadius: 3,
                maxWidth: "100%",
                maxHeight: "500px",
                margin: "auto",
                marginBottom: 20,
                marginTop: 20
              }}
              src="/images/screenshot-journal.png"
              className="loader__img"
            />
          </div>
        </Row>

        <Row style={styles.rowGray}>
          <div style={styles.rowInner}>
            {renderStep(5)}
            <h2 style={styles.h2}>There are tons of ways to journal</h2>
            <p style={styles.p}>
              Explore them a bit and you're sure to find a type of journaling
              that jives with you.
            </p>
            <br />

            <a
              target="_blank"
              href="https://thoughtcatalog.com/ryan-holiday/2017/12/14-ways-to-make-journaling-one-of-the-best-things-you-do-in-2018/"
              style={styles.link}
            >
              14 Ways To Make Journaling One Of The Best Things You Do In 2018
            </a>

            <a
              target="_blank"
              href="https://www.theodysseyonline.com/types-journals-you-can-keep"
              style={styles.link}
            >
              Types Of Journals You Can Keep
            </a>
            <a
              target="_blank"
              href="https://thinkingthroughourfingers.com/2014/10/09/12-different-kinds-of-journals-to-keep/"
              style={styles.link}
            >
              12 Different Kinds of Journals to Keep
            </a>
            <a
              target="_blank"
              href="http://nicolemgulotta.com/blog/journaling"
              style={styles.link}
            >
              How to Choose the Best Journaling Method for Your Lifestyle
            </a>
          </div>
        </Row>

        <Row style={styles.rowWhite}>
          <div style={styles.rowInner}>
            {renderStep(6)}
            <h2 style={styles.h2}>Join a community of journalers</h2>
            <p style={styles.p}>
              Tweet your daily progress with the hashtag #100DaysOfJournaling.<br />
              <br />
              Encourage others to start the challenge and keep going.
            </p>
            <br /> <br />
            <div style={{ height: 60 }}>
              <a
                style={{
                  padding: "10px 10px",
                  margin: "auto",
                  backgroundColor: "#1da1f2",
                  color: "#fff",
                  fontSize: 12,
                  borderRadius: 3
                }}
                href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=I'm publicly committing to the %23100DaysOfJournaling challenge today at 100DaysOfJournaling.com! %0A%0ALearn more and join me %23100DaysOfX http://100daysofx.com/where-x-is/journaling/&tw_p=tweetbutton"
                target="_blank"
                className="twitter-share-button"
              >
                <Twitter size={16} color="#fff" /> Tweet your commitment to the
                challenge
              </a>
            </div>
          </div>
        </Row>

        <Row style={styles.rowGray}>
          <div style={styles.rowInner}>
            {renderStep(7)}
            <h2 style={styles.h2}>
              Read, like and respond to other's entries anonymously
            </h2>

            <p style={styles.p}>
              Just - <strong>pretty please</strong> - don't be a troll.
            </p>

            <img
              style={{
                border: "3px solid rgb(250, 245, 250)",
                borderRadius: 3,
                maxWidth: "100%",
                maxHeight: "500px",
                margin: "auto",
                marginBottom: 20,
                marginTop: 20
              }}
              src="/images/screenshot-comments.png"
              className="loader__img"
            />

            <br />

            <br />
          </div>
        </Row>

        <Row style={styles.rowWhite}>
          <div style={styles.rowInner}>
            {renderStep(8)}
            <h2 style={styles.h2}>Shia Labeouf wants you to do it.</h2>

            <p style={styles.p}>Plus, it's fun and rewarding!</p>

            <img
              style={{
                border: "3px solid rgb(250, 245, 250)",
                borderRadius: 3,
                maxWidth: "100%",
                maxHeight: "500px",
                margin: "auto",
                marginBottom: 20,
                marginTop: 20
              }}
              src="/images/shia.gif"
              className="loader__img"
            />

            <br />

            <br />
          </div>
        </Row>
      </div>
    );
  }
}
