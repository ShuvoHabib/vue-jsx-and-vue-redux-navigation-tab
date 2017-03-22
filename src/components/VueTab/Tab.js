const Tab = {
    name: 'Tab',
    props: {
        changeTab: {
            type: Function,
            required: true
        } ,
        isActive: {
            type: Boolean,
            required: true
        },
        tab: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleClick() {
            this.changeTab(this.tab.name);
        }
    },
    render(h) {
        return (
            <li ref="myTab" on-click={this.handleClick} class={this.isActive ? 'active' : null}>
                <a href="#">{this.tab.name}</a>
            </li>
        );
    }
};

export default Tab;