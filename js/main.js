import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/code.jpg",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
