import TabIndex from './components/VueTab';
import TabRedux from './components/ReduxTab';
import './App.css';

export default {
    name: 'app',
    render(h) {
        return (
            <div id="app">
                <hr />
                Normal Vue Tab
                <hr />
                <TabIndex />
                <hr />
                Vue with Redux Tab
                <hr />
                <TabRedux />
            </div>
        );
    }
}
