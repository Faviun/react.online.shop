import Header from "./components/Header/Header";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";
import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }
    fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    data : json
                })
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    render(){
        return (
            <div className="flex flex-col h-screen justify-between">
                <Header/>
                <Display data={this.state.data}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
