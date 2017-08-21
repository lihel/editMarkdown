/**
 * Created by lmy on 17-8-21.
 */
import React from 'react';
import marked from 'marked';
import '../../css/edit.css';


function Itemlist(props) {

    return <li><a href="#">{props.value}</a></li>
}

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: document.getElementsByClassName('editTitle').value,
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
        const Items = [1, 2, 3];
        return (
            <div>
                <div className="Head">
                    <img src="../../images/photo.jpeg" width={60} height={50}/>
                    用户名
                    <button onClick={this.handleClick.bind(this)}>发布</button>
                </div>
                <div className="articlelist">
                    <p>我的文章</p>
                    <ul>
                        {Items.map((val)=>
                            <Itemlist key={val.toString()}
                                      value={val}/>
                        )}
                    </ul>
                </div>


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