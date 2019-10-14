import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'

const Layout = props => {
  return (
    <div>
      <Header />
      <div>
        Body
      </div>
    </div>
  )
}

Layout.propTypes = {

}

export default Layout
