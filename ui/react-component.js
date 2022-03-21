'use strict';


class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { enabled: !!props.enabled };
    }

    render() {

        // 1. Get pages and content
        const pages = [
            {
                number: 1,
                title: "the first chapter!",
                content: "this is the entire content of the first page. blah blah."
            },
            {
                number: 2,
                title: "the second chapter!",
                content: "this is the entire content of the second page. blah blah."
            },
            {
                number: 3,
                title: "the third chapter!",
                content: "this is the entire content of the third page. blah blah."
            }
        ]

        // 2. Populate page listing

        return (
            <EBookPageList pages={pages} />
        );

    }
}

const domContainer = document.querySelector('#react_component_container');
ReactDOM.render(<RootComponent />, domContainer);
