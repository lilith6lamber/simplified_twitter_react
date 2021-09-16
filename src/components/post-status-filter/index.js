import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'All' },
            { name: 'liked', label: 'Liked' }
        ];
    }
    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const active = this.props.filter === name;
            const display = active ? 'info' : 'outline-secondary';
            return (
                <Button onClick={() => this.props.onFilterSelect(name)} key={name} variant={display}>{label}</Button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
