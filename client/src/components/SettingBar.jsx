import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label style={{marginLeft: '10px'}} htmlFor="line-width">Thickness</label>
            <input onChange={e => toolState.setLineWidth(e.target.value)} style={{margin: '0 10px'}}
                   id="line-width" type="number"
                   defaultValue={1} min={1} max={50}/>
            <label style={{marginLeft: '10px'}} htmlFor="stroke-color">Stroke color</label>
            <input onChange={e => toolState.setStrokeColor(e.target.value)} id="stroke-color" type="color" style={{margin: '0 10px'}}/>
        </div>
    );
};

export default SettingBar;