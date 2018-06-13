import React from 'react';
import Post from './Post/Post';

const data = [
    {
        id: 1,
        img: require("../assets/img/halteres.jpg"),
        userpic: require("../assets/img/math.jpg"),
        username: "Mathieu",
        likeNb: 32,
    },
    {
        id: 2,
        img: require("../assets/img/switch.jpg"),
        userpic: require("../assets/img/mario.jpg"),
        username: "Mario",
        likeNb: 350
    },
];

export default class PostList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {data.map(post => (
                        <li key={post.id}>
                            <Post
                            img={post.img}
                            userpic={post.userpic}
                            username={post.username}
                            likeFunction={() => console.log('like')}
                            commentFunction={() => console.log('comment')} /> 
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}