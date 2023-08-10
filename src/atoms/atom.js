import { atom, selector } from 'recoil';

export const userInfo = atom({
    key: 'user',
    default: ''
});

export const feedHandle = atom({
    key: 'feed',
    default: false
});