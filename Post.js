import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    // timestamp,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://www.gstatic.com/tv/thumb/persons/218027/218027_v9_bb.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Toni Sevastjanoff{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                                @toni.sevastjanoff
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone</p>
                    </div>
                </div>
                <img src="https://www.gstatic.com/tv/thumb/persons/218027/218027_v9_bb.jpg" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>

    )
}

export default Post;
