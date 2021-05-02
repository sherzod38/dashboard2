// import './index'
import React, {Component} from 'react'
import './Overview.scss';
import Gimg from '../../assets/images/up.png'

class Overview extends Component {
    render() {
        return (
            <div className="over-page">
                {/* <div className="over-header">
                   <h1>Overview</h1>
    
                </div> */}
                <header>
                    <div className="over-page-inner">
                        <div className="block">
                            <h3>Unresolved</h3>
                            <p>60</p>
                        </div>
                        <div className="block">
                            <h3>Overdue</h3>
                            <p>16</p>
                        </div>
                        <div className="block">
                            <h3>Open</h3>
                            <p>43</p>
                        </div>
                        <div className="block">
                            <h3>On hold</h3>
                            <p>64</p>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="diagrap">
                        <div className="diagrap-caption"></div>
                        <img src={Gimg} alt=""/>
                    </div>
                    <div className="static">
                        <div className="stat">
                            <h3>salom</h3>
                        </div>
                        <div className="stat">
                            <h3>salom</h3>
                        </div>
                        <div className="stat">
                            <h3>salom</h3>
                        </div>
                        <div className="stat">
                            <h3>salom</h3>
                        </div>
                        <div className="stat">
                            <h3>salom</h3>
                        </div>
                    </div>
    
                </main>
                <footer></footer>
    
            </div>
        )
    }
}

export default Overview;