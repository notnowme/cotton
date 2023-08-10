import { atom, selector } from 'recoil';

export const userInfo = atom({
    key: 'user',
    default: ''
});