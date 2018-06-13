import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostHeaderStyle = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 0.8px solid #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
/**
 * @param {username, thumbnail} props 
 */
const PostHeader = props => {
    const {username, thumbnail} = props;
    return (
        <PostHeaderStyle>
            <img className="thumbnail" src={thumbnail} alt={username}/>
            <span>{username}</span>
        </PostHeaderStyle>
    )
}

PostHeader.propTypes = {
    username: PropTypes.string,
    thumbnail: PropTypes.string
}

export default PostHeader