import React, { Component } from 'react';
import CardItem from './Card.js';
import { Button, Icon, Grid, Header, Image, Table,Card } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import ShopActions from './lib/shopaction.js';
import ShopStore from './lib/shopstore.js'

class App extends Component {
  
  /*state = { items: [] }
  componentDidMount() {
    fetch('api/items')
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }*/

  constructor(props) {
      super(props);
      this.state = { items: [],cart:[]};
      this.onView = this.onView.bind(this);
      this.onAddCart = this.onAddCart.bind(this);
      this.onRemoveCart = this.onRemoveCart.bind(this);
      this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    //this.setState({ journals: jsonData.d.results });
    ShopStore.addChangeListener('STORE_ADD_TO_CART', this.onAddCart);
    ShopStore.addChangeListener('STORE_REMOVE_TO_CART', this.onRemoveCart);
    ShopStore.addChangeListener('STORE_VIEW_CART', this.onView);
    ShopStore.addChangeListener('STORE_ITEMS_LOADED', this.onLoad);
  }

  onLoad()
  {
    this.listItems()
  }

  onView() {
    this.listItems()
  }

  onRemoveCart() {
    this.listItems()
  }

  onAddCart() {
    this.listItems()
  }

  listItems() {
    let usermessage = ''

    if (this.state.items.length > 9) {
      usermessage = 'You have exceeded the number of articles you can submit,You cannot add more articles'
    }

    this.setState({
      items: ShopStore.getAll(),
      message: usermessage
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Products Sample</h1>
        <div className="ui cards">
          {this.state.items.map(item =>
            <CardItem item={item}/>
           )}
        </div>
      </div>
    );
  }
}

export default App;
