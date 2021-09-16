import React from 'react';
import './style.css';

export default class PostListItem extends React.Component {
    render() {
        const { label, onDelete, onToggleLiked, onToggleImportant, important, liked} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (liked) {
            classNames += ' like'
        }
        if (important) {
            classNames += ' important'
        }
        return (
            <div className={classNames}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fas fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <button type="button" className="btn-like btn-sm"
                        onClick={onToggleLiked}>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        );
    }
}
