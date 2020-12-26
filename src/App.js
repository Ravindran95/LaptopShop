import { useState } from "react";

class Colour{
  constructor(clr)
  {
    this.clr=clr;
  }
  print()
  {
    return this.clr;
  }
}

function App() {
  
  const c=new Colour("Blue");
    const [Toggle, value] = useState(false);
    let displayContent = "Welcome Your favourite colour "+c.print();
    const toggleHandler = () => {
      const presentState = Toggle;
      value(!presentState);
    }
    
    if (!Toggle) {
      displayContent = "";
    }
 
    return (

    <div>
      <button onClick={toggleHandler}>Click</button>
      <div className="content">
        {displayContent}
      </div>
    </div>
  );
    }



export default App;
