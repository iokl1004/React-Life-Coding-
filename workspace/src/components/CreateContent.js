import React, { Component } from 'react';   //리액트라는 라이브러리에서 컴포넌트를 가져온다.

class CreateContent extends Component {
  render() {
    console.log('Content render');
    return (
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e) {
            e.preventDefault(); //페이지가 바뀌지 않게 한다.
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder='title'></input></p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    )
  }
}

export default CreateContent;