import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Form, Button, Message, Input, Dimmer, Loader } from 'semantic-ui-react';
import notification from '../ethereum/notification';
import web3 from '../ethereum/web3';

class DeliveryShow extends Component {
  state = {
    address: '',
    sender: '',
    receiver: '',
    message: '',
    deposit: '',
    loading: false,
    errorMessage: ''
  };

  componentDidMount = async () => {

    this.setState({ loading: true, errorMessage: '' });

    try {
      let address = this.props.match.params.address;
      let deliveryContract = notification(address);

      let deposit = await web3.eth.getBalance(address)

      let sender = await deliveryContract.methods.sender().call();
      let receiver = await deliveryContract.methods.receivers(0).call();
      let message = await deliveryContract.methods.message().call();

      this.setState({ 
        address: address,
        sender: sender,
        receiver: receiver,
        message: message,
        deposit: deposit
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  onSubmit = async event => {
    event.preventDefault();

    // Refresh, using withRouter
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Dimmer inverted active={this.state.loading}>
          <Loader inverted content='Loading...'></Loader>
        </Dimmer>
        <Link to='/'>Back</Link>
        <h3>Show Delivery</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} hidden={this.state.loading}>
          <Form.Field>
            <label>Address of Smart Contract</label>
            <Input
              readOnly
              value={this.state.address}
            />
          </Form.Field>

          <Form.Field>
            <label>Sender</label>
            <Input
              readOnly
              value={this.state.sender}
            />
          </Form.Field>

          <Form.Field>
            <label>Receiver</label>
            <Input
              readOnly
              value={this.state.receiver}
            />
          </Form.Field>

          <Form.Field>
            <label>Message</label>
            <Input
              readOnly
              value={this.state.message}
            />
          </Form.Field>

          <Form.Field>
            <label>Deposit</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.deposit}
            />
          </Form.Field>

          <Message error header="ERROR" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Close
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(DeliveryShow);
