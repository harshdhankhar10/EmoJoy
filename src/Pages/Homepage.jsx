import React from 'react'
import SmileysAndEmotion from '../Emojis Categories/SmileysAndEmotion'
import { Helmet } from 'react-helmet'
const Homepage = () => {
  return (
    <>
        <Helmet>
            <title>EmoJoy: Your Ultimate Emoji Directory</title>
            <meta name="description" content="EmoJoy is your ultimate emoji directory. Find the perfect emoji for any occasion. " />
            <meta name="keywords" content="emojis, emoji directory, emoji search, emoji finder, emoji library, emoji collection, emoji search engine, emoji search tool, emoji search app, emoji search online, emoji search free, emoji search tool online, emoji search tool free, emoji search tool online free" />
            <meta name="author" content="Harsh" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <SmileysAndEmotion />
    </>
  )
}

export default Homepage