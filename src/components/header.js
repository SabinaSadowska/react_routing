import React from 'react';
import PropTypes from 'prop-types'

function Header(props) {
return <div>
    <h1>{props.header}</h1>
</div>
}

Header.propTypes = {
    header: PropTypes.string
}

export default Header