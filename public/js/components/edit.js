/**
 * Created by lmy on 17-8-21.
 */
import React from 'react';
import marked from 'marked';
import '../../css/edit.css';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:document.getElementsByClassName('editTitle').value,
            text: document.getElementsByClassName('editText').value
        }
    }

    handleClick() {
        const title = this.state.title;
        const text = this.state.text;
        this.props.buttonClick({title, text});
    }

    handelContentChange(e) {
        this.setState({
            text: marked(e.target.value)
        });

    }

    handelTitleChange(e) {
        this.setState({
            title: marked(e.target.value)
        });

    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>发布</button>
                <div className="editArea">
                    <textarea className="editTitle" onChange={this.handelTitleChange.bind(this)} ref="title"/>

                    <textarea className="editText" onChange={this.handelContentChange.bind(this)} ref='text'/>

                </div>

                <div className="show">
                    <div className="showTitle">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: this.state.title}}/>
                    </div>

                    <div className="showText">
                        <div className='markdown-rendered-contect'
                             dangerouslySetInnerHTML={{__html: this.state.text}}/>
                    </div>

                </div>

            </div>
        )
    }
}