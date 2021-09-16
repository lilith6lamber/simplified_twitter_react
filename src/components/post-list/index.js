import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PostListItem from '../post-list-item';
import './style.css';

const PostList = ({ posts, onDelete, onToggleLiked, onToggleImportant }) => {
    
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    );
}

export default PostList;