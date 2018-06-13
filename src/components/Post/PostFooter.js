import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faComment from '@fortawesome/fontawesome-free-solid/faComment';
import styled from 'styled-components';

const PostFooterContainer = styled.div`
    padding: 30px;
    margin: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-top: 0.8px solid #E6E6E6;
    border-bottom: 0.1px solid #E6E6E6;
    margin: 0;
`

/**
 * Bien observer le onClick
 * @param {likeFunction, commentFunction} props 
 */
const PostFooter = props => {
    const { likeFunction, commentFunction } = props;
    return (
        <PostFooterContainer>
            <div>
                <FontAwesomeIcon className="mR20" onClick={() => likeFunction} icon={faHeart} size="2x" />
                <FontAwesomeIcon onClick={() => commentFunction} icon={faComment} size="2x" />
            </div>
        </PostFooterContainer>
    );
}

PostFooter.propTypes = {
    likeFunction: PropTypes.func.isRequired,
    commentFunction: PropTypes.func.isRequired,
}

export default PostFooter;