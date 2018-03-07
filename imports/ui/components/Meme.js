import React, { Component } from "react";

import {} from "reactstrap";

export default class Meme extends Component {
  render() {
    const { dayOfChallenge } = this.props;

    const memes = [
      {
        img: "gatsbyCheers.jpg",
        textTop: "Cheers to you",
        textBottom: `for completing day ${dayOfChallenge} of the challenge `
      },
      {
        img: "buzzWoody.jpg",
        textTop: `Journaling`,
        textBottom: `Journaling Everywhere`
      },
      {
        img: "xzibit.jpg",
        textTop: `Yo dawg i heard you like journaling`,
        textBottom: `so we made a journaling app where you can journal about journaling `,
        size1: 24,
        size2: 20
      },
      {
        img: "oneDoesNotSimply.jpg",
        textTop: `One does not simply`,
        textBottom: `make it to day ${dayOfChallenge} of the challenge `,
        size1: 24,
        size2: 24
      },
      {
        img: "aliens.jpg",
        textTop: ``,
        textBottom: `journaling`,
        size2: 32
      },
      {
        img: "successBaby.jpg",
        textTop: `Committed to the #100DaysOfJournaling challenge`,
        textBottom: `already made it to day ${dayOfChallenge}`,
        size1: 24,
        size2: 24
      },
      {
        img: "oldGangsterGuy.jpg",
        textTop: `You have transcribed your fill of introspections for ${(
          dayOfChallenge / 14
        ).toFixed(2)} fortnights`,
        textBottom: `Colossal Proper Respects`,
        size1: 24,
        size2: 24
      },
      {
        img: "youCantBlankIfYou.jpg",
        textTop: "You can't forget to journal",
        textBottom: `if you already journaled`,
        size1: 24,
        size2: 24
      },
      {
        img: "morpheus.jpg",
        textTop: "What if I told you",
        textBottom: `that your brain wants you to journal `
      },
      {
        img: "willyWonka.jpg",
        textTop: `Oh you made it to day ${dayOfChallenge} of the challenge?`,
        textBottom: `I'm sure you'll make it to day ${dayOfChallenge + 1} `
      }
    ];

    let meme = memes[Math.floor(Math.random() * (memes.length - 1))];

    const memeTextStyle = {
      position: "absolute",
      fontFamily: "Impact",
      color: "#fff",
      letterSpacing: "0.0em",
      WebkitTextStrokeWidth: 1,
      WebkitTextStrokeColor: "#585858",
      fontWeight: "700",
      //width: "100%",
      textAlign: "center",
      lineHeight: 1.2,
      textTransform: "uppercase"
    };

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "0px 10px"
        }}
      >
        <img
          style={{ margin: "auto" }}
          src={`/images/${meme.img}`}
          width="300px"
        />
        <div
          style={{
            ...memeTextStyle,
            ...{
              top: "2%",
              left: "50%",
              transform: "translate(-50%, 0%)",
              fontSize: meme.size1 ? meme.size1 : 30
            }
          }}
        >
          {meme.textTop}
        </div>
        <div
          style={{
            ...memeTextStyle,
            ...{
              bottom: "2%",
              left: "50%",
              transform: "translate(-50%, 0%)",
              fontSize: meme.size2 ? meme.size2 : 30
            }
          }}
        >
          {meme.textBottom}
        </div>
      </div>
    );
  }
}
