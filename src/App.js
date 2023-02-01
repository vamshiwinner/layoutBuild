import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ConfigurationContext from './context/ConfigurationContext'
// import Layout from './components/Layout'

import './App.css'

/* <ConfigurationContext.Provider value={{
          showContent,
           showLeftNavbar,
           showRightNavbar,
            this.onToggleShowContent,
  this.onToggleShowLeftNavbar,
  this.onToggleShowRightNavbar,
      }}>
          <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider> */

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showContent: !prevState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showContent: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-bg-conatiner">
          <ConfigurationController />
          <div className="heder-footer-box">
            <Header />
            <Body />
            <Footer />
          </div>
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
