import React, { Component } from 'react';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
import './App.css';

class App extends Component {
  constructor(props) {  //컴포넌트가 실행될때 constructor라는 함수를 만나서 초기화 시켜준다
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'world Wide Web!' },
      welcome: { title: 'Welcome', desc: "Hello, React!!!" },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interatctive' }
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id+1;
        // 기존에 있었던 컨텐츠 배열에 새로 하나 추가하는 방법
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        var _content = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          // contents:this.state.contents
          contents : _content
        });
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {  //onChangePage라는 이벤트 생성
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function (id) {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)}
          data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {_article}
        
      </div>
    );
  }
}

export default App;