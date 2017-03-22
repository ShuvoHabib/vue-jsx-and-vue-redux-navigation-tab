import TabContent from './TabContent';
import Tabs from './Tabs';

const TabIndex = {
    name: 'TabIndex',
    data() {
        return {
            tabData: [
                { name: 'Tab 1', },
                { name: 'Tab 2', },
                { name: 'Tab 3', },
                { name: 'Tab 4', },
                { name: 'Tab 5', },
                { name: 'Tab 6', }
            ],
            activeTab: 'Tab 1'
        };
    },
    methods: {
        handleClick(tab) {
            this.activeTab = tab;
        },
    },
    render(h) {
        return (
            <div>
                <Tabs
                    tabData={this.tabData}
                    activeTab={this.activeTab}
                    changeTab={this.handleClick}/>
                <TabContent tabData={this.tabData} activeTab={this.activeTab}/>
            </div>
        );
    }
};

export default TabIndex;