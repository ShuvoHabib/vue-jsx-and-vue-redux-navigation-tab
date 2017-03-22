import { createStore } from 'redux';
import Reducers from './Reducers';

const initial = {
    activeTab: 'Tab 6'
};

export default createStore(Reducers, initial);