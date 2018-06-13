import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import styled from 'styled-components';

const PostStyle = styled.div`
    width: 600px;
    border: 0.8px solid #E6E6E6;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 3px;
`
/**
 * 
 * @param {img, thumbnail, username, likeFunction, commentFunction} props 
 */

const Post = props => {
    const { img, userpic, username, likeFunction, commentFunction } = props;
    return (
        <PostStyle>
            <PostHeader username={username} thumbnail={userpic} />
            <img src={img} alt={username} />
            <PostFooter likeFunction={likeFunction} commentFunction={commentFunction} />
        </PostStyle>
    )
}

Post.propTypes = {
    img: PropTypes.string.isRequired,
    userpic: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    likeFunction: PropTypes.func.isRequired,
    commentFunction: PropTypes.func.isRequired
}

export default Post;