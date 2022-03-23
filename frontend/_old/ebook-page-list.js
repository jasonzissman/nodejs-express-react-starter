'use strict';

class EBookPageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: props.pages
        };
        console.log(this.state)
    }

    render() {

        return (
            <div className="ui segment">
                <h3>Pages</h3>
                <div className="ui relaxed divided items">
                    {this.state.pages.map(page => {
                        return <div className="item" key={page.number}>
                            <div className="ui small image">
                                <img src="https://i.ytimg.com/vi/boAWFriUsMo/hqdefault.jpg" />
                            </div>
                            <div className="content">
                                <a className="header">{ page.title }</a>
                                <div className="meta">
                                    <a>Date</a>
                                    <a>Category</a>
                                </div>
                                <div className="description">
                                    {page.content}
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        );

    }
}

// const domContainer = document.querySelector('#react_component_container');
// ReactDOM.render(<EBookPageList/>, domContainer);
