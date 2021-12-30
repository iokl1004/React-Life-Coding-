import React, { Component } from 'react';   //리액트라는 라이브러리에서 컴포넌트를 가져온다.

class Subject extends Component { //나는 Subject라는 컴포넌트를 만든다.
    render() {  //반드시 렌더 라는 함수가 있어야함
        console.log('Subject render');
      return (  //컴포넌트를 만들때는 반드시 하나의 최상위 태그만 써야함
        <header>
          <h1><a href="/" onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;