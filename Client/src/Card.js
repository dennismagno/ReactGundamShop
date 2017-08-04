import React, { Component } from 'react';
import { Button, Icon, Grid, Header, Image, Table, Card } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class CardItem extends Component {
    render() {
        var Item = this.props.item;
        return (
            <div className="card">
                <div className="image">
                    <img src={Item.Image} />
                </div>
                <div className="content">
                    <div className="header">{Item.Name}</div>
                    <div className="meta">
                        <a>{Item.Category}</a>
                    </div>
                    <div className="description">
                        {Item.Description}
                    </div>
                </div>
                <div className="ui bottom attached button">
                    <i className="add icon"></i>
                    Buy Now
                </div>
            </div>
        );
    }
}

export default CardItem;
