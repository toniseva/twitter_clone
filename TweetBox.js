import React from 'react';
import './TweetBox.css';
import { Avatar, Button, Input } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.gstatic.com/tv/thumb/persons/218027/218027_v9_bb.jpg" />
                    <input placeholder="what's happening?" type="text"></input>
                </div>

                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image URL"
                    type="text">
                </input>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
