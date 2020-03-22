import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'components/Layout';
import { chatsLoad, chatsSend } from 'actions/chats';

class LayoutContainer extends Component {

    componentDidMount() {
        const { loadChats } = this.props;
        loadChats();
    }

    handleSend = (message) => {

        let { sendMessage, chatId } = this.props;
        sendMessage({
            ...message,
            chatId
        });
    };

    render() {
        const { chats, messages } = this.props;
        return (<Layout chats={chats} messages={messages} sendMessage={this.handleSend} />);
    }
}

function mapStateToProps(state, ownProps) {

    const chats = state.chats.entries;
    const { match } = ownProps;

    let messages = null;
    let chatId = null

    if (match && chats[match.params.id]) {
        chatId = match.params.id;
        messages = chats[match.params.id].messages;
    }

    if (state.chats.chatId && chats[state.chats.chatId]) {
        chatId = state.chats.chatId;
        messages = chats[chatId].messages;
    }

    let chatsArrayForShow = [];
    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chatsArrayForShow.push({ id: chats[key].id, name: chats[key].name, link: `/chats/${chats[key].id}` });
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message)),
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);