import { atom, selector } from 'recoil';

export const userInfo = atom({
    key: 'user',
    default: [{
        id: '',
        nick: ''
    }]
});

export const feedHandle = atom({
    key: 'feed',
    default: false
});