import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faBandcamp from '@fortawesome/fontawesome-free-brands/faBandcamp';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


const HeaderStyle = styled.div`
    height: 70px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const H1 = styled.h1`
    display: inline-block;
    margin-left: 20px;
    font-size: 20px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`

/**
 * Rajout de Link sur les icones
 */
export default class Header extends React.Component {
    render() {
        return (
            <HeaderStyle>
                <Container>
                    <Link to="/"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
                    <H1>InstaReact</H1>
                </Container>
                <Container>
                    <Link to="/people"><FontAwesomeIcon icon={faBandcamp} size="2x" /></Link>
                    <Link to="/me"><FontAwesomeIcon icon={faUser} size="2x" /></Link>
                </Container>
            </HeaderStyle>
        )
    }
}