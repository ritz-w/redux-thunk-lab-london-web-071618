import React, {Component} from 'react'

export default class CatList extends Component {
    renderCats = () => {
        return this.props.catPics.map(cat => <img src={cat.url} />)
    }

    render() {
        return (
            <div>
                {this.props.catPics ? this.renderCats() : null}
            </div>
        )
    }
}