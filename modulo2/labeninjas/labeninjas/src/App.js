import React from "react";
import HomePage from './pages/HomePage/HomePage';
import JobsListPage from './pages/JobsListPage/JobsListPage';
import CreateJobPage from './pages/CreateJobPage/CreateJobPage';
import JobDetailPage from './pages/JobDetailPage/JobDetailPage';
import CartPage from './pages/CartPage/CartPage';
import Header from "./components/Header/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
`;

class App extends React.Component {
  state = {
    currentPage: "home"
  }


  changePage = (pageName) => {
    this.setState({currentPage: pageName})
  }

  goToDetailPage

  
  choosePage = () => {
    switch(this.state.currentPage) {
      case "home":
        return <HomePage changePage={this.changePage} />
      case "list":
        return <JobsListPage/>
      case "form":
        return <CreateJobPage/>
      case "cart":
        return<CartPage/>
      case "detail":
        return <JobDetailPage/> 
      default:
        return <HomePage changePage={this.changePage} />

  }
 }

  render() {
  return (
    <div>
      <GlobalStyle/>
      <Header changePage={this.changePage}/>
      {this.choosePage()}
    </div>
  );
}
}

export default App;
