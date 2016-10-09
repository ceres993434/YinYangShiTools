/**
 * Created by griga on 11/24/15.
 */

import React from 'react'

// import {Dropdown, MenuItem} from 'react-bootstrap'

let Footer = React.createClass({
    render: function(){
        return (
            <div className="page-footer">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <span className="txt-color-white">阴阳师工具 WebApp © 2016</span>
                </div>
              </div>
            </div>
        )
    }
});


export default Footer
