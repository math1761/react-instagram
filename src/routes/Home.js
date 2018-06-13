import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post/Post';
import ImgSwitch from '../assets/img/switch.jpg';
import ImgMario from '../assets/img/mario.jpg';

/**
 * Rajout du header car on ne peut pas nester d'élément en dehors du router
 */
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Post
                        img={ImgSwitch}
                        userpic={ImgMario}
                        username="John"
                        likeFunction={() => console.log('like')}
                        commentFunction={() => console.log('comment')} />
                    <Post
                        img={ImgSwitch}
                        userpic={ImgMario}
                        username="John"
                        likeFunction={() => console.log('like')}
                        commentFunction={() => console.log('comment')} />
                </div>
            </div>
        )
    }
}