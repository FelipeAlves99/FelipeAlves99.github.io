import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aboutme" component={Aboutme} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/experience" component={Experience} />
            </Switch>
        </BrowserRouter>
    );
}
