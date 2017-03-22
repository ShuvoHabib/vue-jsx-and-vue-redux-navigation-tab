const TabContent = {
    name: 'TabContent',
    props: {
        activeTab: {
            type: String,
            required: true
        } ,
        tabData: {
            type: Array,
            required: true
        }
    },
    render(h) {
        return (
            <div class="tab-content">
                {this.activeTab === this.tabData[0].name ?
                    <h4 class="col-4">
                        Hello1
                    </h4> : null
                }
                {this.activeTab === this.tabData[1].name ?
                    <h4 class="col-4">
                        Hello2
                    </h4> : null
                }
                {this.activeTab === this.tabData[2].name ?
                    <h4 class="col-4">
                        Hello3
                    </h4> : null
                }
                {this.activeTab === this.tabData[3].name ?
                    <h4 class="col-4">
                        Hello4
                    </h4> : null
                }
                {this.activeTab === this.tabData[4].name ?
                    <h4 class="col-4">
                        Hello5
                    </h4> : null
                }
                {this.activeTab === this.tabData[5].name ?
                    <h4 class="col-4">
                        Hello6
                    </h4> : null
                }
            </div>
        );
    }
};

export default TabContent;