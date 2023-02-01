import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent, showLeftNavbar, showRightNavbar)
      return (
        <div className="body-bg">
          {showLeftNavbar && (
            <div className="body-conatiner1">
              <ul>
                <h1 className="heading">Left NavBar Menu</h1>
                <li className="list-item">item1</li>
                <li className="list-item">item2</li>
                <li className="list-item">item3</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="body-conatiner2">
              <h1 className="heading">Content</h1>
              <p>
                Provider Component updates the value of Context. When the
                provider updates context, all the nested consumers of that
                provider will be re-rendered. Updated context value can only be
                accessed by the consumers nested within the provider.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="body-conatiner3">
              <ul>
                <h1 className="haeding">Left NavBar Menu</h1>
                <li className="list-item">Ad1</li>
                <li className="list-item">Ad2</li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
