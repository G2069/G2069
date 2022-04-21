import React, { useState } from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import "./dropdown.css"

const linkStyle = {
  textDecoration: "none",
  color: "black",
}

function Dropdown() {
  const [isActive, setIsActive] = useState(false)
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation()
  return (
    <div
      className="dropdown"
      onClick={e => setIsActive(!isActive)}
      aria-hidden="true"
    >
      <div className="dropdown-btn">
        {t("language")}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {languages.map(lng => (
            <div className="dropdown-items" key={lng}>
              <Link to={originalPath} language={lng} style={linkStyle}>
                {lng}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
