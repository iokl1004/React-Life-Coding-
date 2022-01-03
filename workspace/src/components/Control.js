import React, { Component } from 'react';   //리액트라는 라이브러리에서 컴포넌트를 가져온다.

class Control extends Component { //나는 Subject라는 컴포넌트를 만든다.
  render() {  //반드시 렌더 라는 함수가 있어야함
    console.log('Subject render');
    return (  //컴포넌트를 만들때는 반드시 하나의 최상위 태그만 써야함
      <ul>
        <li><a href="/create" onClick={function (e) {
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li><a href="/update" onClick={function (e) {
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        <li><input onClick={function (e) {
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)} type="button" value="delete"></input></li>
      </ul>
    );
  }
}

export default Control;