import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button, Input } from '@material-ui/core';
import db from './firebase';
import { TrendingUp } from '@material-ui/icons';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Rafeh Qazi',
            username: 'cleverqazi',
            verified: true,
            text: tweetMessage,
            tweetImage: tweetImage,
            avatar: 'https://www.gstatic.com/tv/thumb/persons/218027/218027_v9_bb.jpg'
        });

        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.gstatic.com/tv/thumb/persons/218027/218027_v9_bb.jpg" />
                    <input
                        value={tweetMessage}
                        placeholder="what's happening?"
                        type="text"
                        onChange={e => setTweetMessage(e.target.value)}
                    />
                </div>

                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image URL"
                    type="text">
                </input>
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
