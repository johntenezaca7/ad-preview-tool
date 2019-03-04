import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
import MyAdSection from "./components/MyAdSection";
import MainSection from "./components/MainSection";


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
