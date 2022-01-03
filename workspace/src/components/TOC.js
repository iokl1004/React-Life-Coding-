import React, { Component } from 'react';   //리액트라는 라이브러리에서 컴포넌트를 가져온다.

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
      console.log('====>TOC render shouldComponentUpdate'
      ,newProps.data
      ,this.props.data
      );
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render() {
        console.log('===>TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(
            <li key={data[i].id}>
            <a
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);   // 값 추출
                }.bind(this)}
                >{data[i].title}</a>
            </li>);
            i = i + 1;
        }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

  export default TOC;