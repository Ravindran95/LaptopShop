import { useState } from "react";

var Name={
  name:"ravi"
};
function App() {
  

    const [Toggle, value] = useState(true);

    const toggleHandler = () => {
      const presentState = Toggle;
      value(!presentState);
    }
    let displayContent = "Welcome "+Name.name;
    if (Toggle) {
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
