import React from 'react'

import Header from '../organisms/header'
import Layout from '../template/layout'
import Menu from '../organisms/menu'
import SubHeader from '../organisms/sub-header'

import '../style/app.css'

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Menu />
        <SubHeader/>
      </Layout>
    </div>
  );
}

export default App;
