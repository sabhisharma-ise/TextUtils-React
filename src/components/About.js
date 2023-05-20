import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',             // Initial Text color
        backgroundColor: 'white'    // Initial BG color
    })

    const [btntext, setBtnText] = useState('Enable Dark Mode');

    const toggleState = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText('Enable Light Mode');
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode');
        }
    }

    return (
        <div style={myStyle} className='container my-4'>
            <h1 className='my-4  . text-center'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div style={myStyle} className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button style={myStyle} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div style={myStyle} className="card-body">
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div style={myStyle} className="card-body">
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div style={myStyle} className="card-body">
                            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Dark Mode Toggle Button */}
            <div className="container . text-center my-3">
                <button type="button" class="btn btn-primary" onClick={toggleState}>{btntext}</button>
            </div>
        </div>
    )
}
