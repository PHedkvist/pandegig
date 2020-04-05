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

CHAT TABLE

Columns             Type      Example
gig_ower_user_id    string
interested_user_id  string

MESSAGES TABLE

Columns 	    Type 	      Example
chat_id       string      string
messageId 	  string 	    1001
from_user_id 	string 	    sender
to_user_id 	  string 	    receiver
content 	    string 	    hello world
create_at 	  timestamp 	2019-07-15 12:00:00

Krävs två tabeller i dynamodb.
Hämta alla chat

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
