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
class Sky extends Colour{
  constructor(clr,sky)
  {
    super(clr);
  this.sky=sky;
  }
display()
{
  let variable=super.print();
  return variable+this.sky;
}
}
function App() {
  
  const c=new Sky("Blue"," which is sky colour");
    const [Toggle, value] = useState(false);
    let displayContent = "Welcome Your favourite colour "+c.display();
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
