import Tab from './Tab';

const Tabs = {
    name: 'Tabs',
    props: {
        activeTab: {
            type: String,
            required: true
        },
        changeTab: {
            type: Function,
            required: true
        },
        tabData: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            page: 0
        };
    },
    computed: {
        pages() {
            return this.tabData;
        }
    },
    methods: {},
    render(h) {
        return (
            <div class="box-header">
                <ul class="box-header-tab">
                    {this.pages.map((tab) => {
                        return (
                            <Tab
                                tab={tab}
                                isActive={this.activeTab === tab.name}
                                changeTab={this.changeTab}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default Tabs;