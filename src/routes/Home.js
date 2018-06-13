import React from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';

/**
 * Rajout du header car on ne peut pas nester d'élément en dehors du router
 */
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <PostList/>
                </div>
            </div>
        )
    }
}