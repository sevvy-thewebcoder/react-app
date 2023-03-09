import React from "react";

export default function MainContent() {
    return (
        <main className="Main">
            <h1>Fun facts about React</h1>
            <ul className="Facts-list">
                <li>
                    <span className="Dot"></span>
                    <span className="List--item">
                        Was first released in 2013
                    </span>
                </li>
                <li>
                    <span className="Dot"></span>
                    <span className="List--item">
                        Was originally created by Jordan Walke
                    </span>
                </li>
                <li>
                    <span className="Dot"></span>
                    <span className="List--item">
                        Has well over 100K stars on GitHub
                    </span>
                </li>
                <li>
                    <span className="Dot"></span>
                    <span className="List--item">
                        Is maintained by Facebook
                    </span>
                </li>
                <li>
                    <span className="Dot"></span>
                    <span className="List--item">
                        Power thousands of enterprise apps, including mobile apps
                    </span>
                </li>
            </ul>
        </main>
    )
}