import { SHOWMESS } from '../actions/types';

const mss = 'Xin chao cac ban!!!'


export default showAlert = (state = mss, action) => {
    switch (action.type) {
        case SHOWMESS:
            state=  'Minh la Dat Dang'
            return state;

        default:
            return state;
    }
}
