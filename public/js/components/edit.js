/**
 * Created by lmy on 17-8-21.
 */
import React from 'react';
import marked from 'marked';
import '../../css/edit.css';

export default class Edit extends React.Component {
    handelClick() {

    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick.bind(this)}>发布
                </button>
                <div className="editArea">
                    <textarea className="editTitle" onChange={this.handelTitleChange.bind(this)} ref="title"/>

                    <textarea className="edit" onChange={this.handelContentChange.bind(this)} ref='text'/>

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