import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
import TopSection from "./components/TopSection";
import MainSection from "./components/MainSection";

import MockUpAd from "./containers/MockUpAd";

class App extends Component {
  render() {
    return (
      <MainLayout>
        <TopSection>
          <MockUpAd />
        </TopSection>
        <MainSection>
          <p>This are where the layouts go</p>
        </MainSection>
      </MainLayout>
    );
  }
}

export default App;
