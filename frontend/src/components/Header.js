import React from 'react';
import {Menu} from "./Menu";

export const Header = () => {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <svg id="svg1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
                         width="94" height="94" viewBox="0 0 47 47"><title>TODO1</title>
                        <circle fill="#e6e6e6" cx="24" cy="24" r="21"/>
                        <path className="path" fill="none" stroke="#999999" stroke-width="1.5" stroke-dasharray="70.2"
                              stroke-dashoffset="70.2"
                              d="M 34.6 14.6  L 21 28.2 L 15.4 22.6 L 12.6 25.4 L 21 33.8 L 37.4 17.4z">
                            <animate id="p1" attributeName="stroke-dashoffset" begin="0.2s" values="70.2;0" dur="3s"
                                     repeatCount="1" fill="freeze" calcMode="paced" restart="whenNotActive"/>
                            <animate id="f1" attributeName="fill" begin="p1.end" values="#e6e6e6; #CCFF90" dur="2s"
                                     fill="freeze" restart="whenNotActive"/>
                        </path>
                    </svg>
                    <span className="fs-4">Geekbrains TODO</span>
                </a>
                <Menu/>
            </div>

            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">TODO</h1>
                <p className="fs-5 text-muted">Вроде todo а причем тут писатели?</p>
            </div>
        </header>
    );
};
