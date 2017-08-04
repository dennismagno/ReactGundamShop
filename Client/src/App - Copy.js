import React, { Component } from 'react';
import { Button, Icon, Grid, Header, Image, Table } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: [] }
  componentDidMount() {
    fetch('api/items')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <div class="ui grid centered">
          <div class="fourteen wide column">
            <Table basic='very' celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell class="center aligned">Name</Table.HeaderCell>
                  <Table.HeaderCell class="center aligned">Description</Table.HeaderCell>
                  <Table.HeaderCell class="center aligned">Price</Table.HeaderCell>
                  <Table.HeaderCell class="center aligned">Qty</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.users.map(user =>
                  <Table.Row key={user.ItemID}>
                    <Table.Cell>
                      <Header as='h4' image>
                        <Image src={user.Image} shape='rounded' size='mini' />
                        <Header.Content>
                          {user.Name}
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{user.Description}</Table.Cell>
                    <Table.Cell>{user.Price}</Table.Cell>
                    <Table.Cell>{user.Qty}</Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
