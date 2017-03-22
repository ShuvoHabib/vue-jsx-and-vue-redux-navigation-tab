import { connect } from 'redux-vue';
import * as types from "../../store/constants";
import TabContent from './TabContent';
import Tabs from './Tabs';

const TabRedux = {
    name: 'TabRedux',
    props: {
        activeTab: {
            type: String
        },
        changeTab: {
            type: Function
        },
    },
    data() {
        return {
            tabData: [
                { name: 'Tab 1', },
                { name: 'Tab 2', },
                { name: 'Tab 3', },
                { name: 'Tab 4', },
                { name: 'Tab 5', },
                { name: 'Tab 6', }
            ]
        };
    },
    render(h) {
        return (
            <div>
                <Tabs
                    tabData={this.tabData}
                    activeTab={this.activeTab}
                    changeTab={this.changeTab}
                />
                <TabContent tabData={this.tabData} activeTab={this.activeTab}/>
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        activeTab: state.activeTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab(activeTab) {
            dispatch({
                type: types.CHANGE_TAB,
                activeTab
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TabRedux);