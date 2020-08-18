let store ={
    _state: {
        Dialogs: [
            { id: 1, name: 'Дмитрий'},
            { id: 2, name: 'Алексей'},
            { id: 3, name: 'Михаил'},
            { id: 4, name: 'Роман'},
            { id: 5, name: 'Ярослав'}
        ],
        Messages: [
            { id: 1, message: 'Hi'},
            { id: 2, message: '123'},
            { id: 3, message: 'YO'}
        ],
        newMessageText:'dmitriifadeev'
    },
    getState(){
        return this._state;
    },
    rerenderEntireTree () {
        console.log ('Hi');
    },
    addMessage (Message) {
        let newMessage = {
            id: 4,
            message: Message
        };
        this._state.Messages.push(newMessage);
        this._rerenderEntireTree(this._state);
    },
    updateNewMessageText (newMessage) {
        this._state.newMessageText = newMessage;
        this._rerenderEntireTree(this._state);
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer;
    }
}


export default store;
window.store = store;
