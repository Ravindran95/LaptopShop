import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
class Header extends React.Component{
  render()
  {
    
      return(
          <div>
              <p>Are you ready to learn</p>
              <p>{this.props.ID}</p>
              </div>
      );
  }
}
class ExtendedClass extends React.Component{
 render()
 {
  const ret="React is awsome!!";
 return(
  <div>
    <Header ID={ret} />
  <MyClass />
</div>
 );
 }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
class MyClass extends React.Component
{
  Button(event)
  {
    event.preventDefault();
    const val=event.target.elements.val.value;
    if(val)
    {
      alert("Welcome "+val);
    }
  }
  render()
  {
    return(
      <div>
        <form onSubmit={this.Button}>
          <input type="text" name="val"></input>
          <button>submit</button>
        </form>
      </div>
    );

  }
}
ReactDOM.render(<ExtendedClass />,document.getElementById("sample"));
reportWebVitals();
