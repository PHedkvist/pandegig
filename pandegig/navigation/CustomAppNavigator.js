import React from 'react';
import { v1 } from 'uuid';
import AppNavigator from './AppNavigator';


// Temporary gigs for testing pruposes
const initialGigs = [
  {
    title: 'Maggan behöver hjälp',
    description: 'adsfgagdsf',
    earnings: '200',
    location: 'Fjollträsk',
    id: v1(),
  },
  {
    title: 'Maggan behöver hjälp',
    description: 'adsfgagdsf',
    earnings: '200',
    location: 'Bromma',
    id: v1(),
  },
  {
    title: 'Maggan behöver hjälp',
    description: 'adsfgagdsf',
    earnings: '200',
    location: 'Linkan',
    id: v1(),
  },
];

/* eslint-disable no-tabs */
/*

MESSAGES TABLE

Columns 	    Type 	      Example
messageId 	  integer 	  1001
from_user_id 	integer 	  sender
to_user_id 	  integer 	  receiver
content 	    string 	    hello world
create_at 	  timestamp 	2019-07-15 12:00:00

*/
/* eslint-enable no-tabs */


class CustomAppNavigator extends React.Component {
  static router = AppNavigator.router;

  constructor(props) {
    super(props);
    this.state = {
      gigs: initialGigs,
      chat: [],
    };
    this.addGig = this.addGig.bind(this);
  }

  componentDidMount = () => {
    // TODO: Fetch all data including gigs and chat from server
  }

  // eslint-disable-next-line class-methods-use-this
  addGig(gig) {
    // TODO: Add gig to our state
    const { gigs } = this.state;
    this.setState({ gigs: [...gigs, gig] });
  }

  // eslint-disable-next-line class-methods-use-this
  addChat() {
    // TODO: Add chat to our state
  }

  render() {
    const { gigs, chat } = this.state;
    const { navigation } = this.props;

    return (
      <AppNavigator
        navigation={navigation}
        screenProps={{
          gigs,
          chat,
          addChat: this.addChat,
          addGig: this.addGig,
        }}
      />
    );
  }
}

export default CustomAppNavigator;
