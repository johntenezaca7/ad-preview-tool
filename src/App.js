import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
import MyAdSection from "./containers/MyAdSection";
import MainSection from "./containers/MainSection";


class App extends Component {
  render() {
    return (
      <MainLayout>
        <MyAdSection/>
        <MainSection/>
      </MainLayout>
    );
  }
}

export default App;
