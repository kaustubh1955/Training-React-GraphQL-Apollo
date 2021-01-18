import React, { Component } from 'react';

import Icon from '../components/left/Icon';
import LI from '../components/left/LI';
import LIS from '../components/left/LIS';
import Imglink from '../components/left/Imglink';
import appstore from './AppStoreBadge.png';
import playstore from './google-play-badge.png';
import '../styles/container.css';
import Link from '../components/right/Link';
import Written from '../components/right/Written';
import Toggle from '../components/right/Toggle';
import Links from '../components/right/Links';
import Popup from '../components/right/Popup';
import bi1 from 'C:/Users/kaust/cat-n-dog/src/Images/Group 2.png';
import bi2 from 'C:/Users/kaust/cat-n-dog/src/Images/Group.png';

class Container extends Component {
    state = {
        img1: true,
        showPopup: false
    }
    changeBackground1 = () => {
        this.setState({img1: true});
    }
    changeBackground2 = () => {
        this.setState({img1: false});
    }
    togglePopup = () => {
        this.setState({showPopup: true});
    }
    togglePopup2 = () => {
        this.setState({showPopup: false});
    }
    render () {
        var chan = this.state.img1? bi1: bi2;
        var divStyle = {
            backgroundImage: `url("${chan}")`,
        }
        return (
            <div>
                <div className="split left">
                    <Icon />
                    <div className="Lorem">
                        <LI />
                        <LIS />
                        <div className="buttons">
                            <Imglink im={appstore}/>
                            <Imglink im={playstore} />
                        </div>
                        
                    </div>
                </div>
                <div className="split right" style = {divStyle}>
                    <Link showpop = {()=>this.togglePopup()} />
                    <Written />
                    <Toggle clicked1 = {() => this.changeBackground1()} clicked2 = {() => this.changeBackground2()} />
                    <Links />
                    {this.state.showPopup?<Popup clicked = {()=>this.togglePopup2()}/>:null}
                </div>
                
            </div>
        );
    }
}

export default Container;