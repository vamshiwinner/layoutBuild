import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContentInput = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBarInput = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavBarInput = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="layout-bg">
          <h1 className="heading">Layout</h1>
          <ul className="ul-container">
            <li className="list">
              <input
                value={showContent}
                onClick={onChangeContentInput}
                id="mycheckbox1"
                type="checkbox"
              />
              <label htmlFor="mycheckbox1">Context</label>
            </li>
            <li className="list">
              <input
                value={showLeftNavbar}
                onClick={onChangeLeftNavBarInput}
                id="mycheckbox2"
                type="checkbox"
              />
              <label htmlFor="mycheckbox2">Left Navbar</label>
            </li>
            <li className="list">
              <input
                value={showRightNavbar}
                onClick={onChangeRightNavBarInput}
                id="mycheckbox3"
                type="checkbox"
              />
              <label htmlFor="mycheckbox3">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
