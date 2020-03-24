export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHAT_SET = 'CHAT_SET';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_DELETE = 'CHAT_DELETE';

export const chatsLoad = () => ({
    type: CHATS_LOAD
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message
});

export const chatSet = (chatId) => ({
    type: CHAT_SET,
    payload: chatId
});

export const chatAdd = (name) => ({
    type: CHAT_ADD,
    payload: name
});

export const chatDelete = (id) => ({
    type: CHAT_DELETE,
    payload: id
});