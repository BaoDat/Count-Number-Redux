import {INCREASE, DECREASE, SHOWMESS} from './types';

export const counterIncrease = () => ({type:INCREASE});
export const counterDecrease = () => ({type:DECREASE});
export const showMess = () => ({type: SHOWMESS});