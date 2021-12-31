import React, { Component } from 'react';   //리액트라는 라이브러리에서 컴포넌트를 가져온다.

class ReadContent extends Component {
    render() {
    console.log('Content render');
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      )
    }
  }

export default ReadContent;