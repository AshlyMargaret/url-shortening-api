import React from 'react'
import RowPost from '../RowPost/RowPost'
import './StaticDashBoard.css'

function StaticDashBoard() {
  return (
    <div className='staticDashBoard'>
        <div className="staticTitle">
            <h1> Advanced Statistics</h1>
        </div>
        <div className="staticPara">
            <p>Track how your links are performing across the web with our 
               advanced statistics dashboard.</p>
        </div>
        <div className="rowSectionStatics">
            <div className="box1">
            <RowPost/>
            <div className="line1"></div>
            </div>
            <div className="box2">
            <RowPost/>
            <div className="line2"></div>
            </div>
            <div className="box3">
            <RowPost/>
            </div>
        </div>

    </div>
  )
}

export default StaticDashBoard