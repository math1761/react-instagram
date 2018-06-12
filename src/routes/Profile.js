import React from 'react';
import Header from '../components/Header';

/**
 * Rajout du header car on ne peut pas nester d'élément en dehors du router
 */
export default class Profile extends React.Component {
    render() {
        return (
            <div><Header />
                <div>
                    <p>Profile</p>
                </div>
            </div>
        )
    }
}