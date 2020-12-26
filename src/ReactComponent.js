
class Header extends React.Component{
    render()
    {
        return(
            <div>
                <p>React is awsome!!</p>
                </div>
        );
    }
}
const print=(
<div>
    <p>Are you ready to learn</p>
    <Header />
    </div>
);
ReactDOM.render(print,document.getElementById("sample"));