import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Switch, Route } from 'react-router'

import routes from './routes'

import {AppHeader} from './cmpts/app-header'
import {SideBar} from './cmpts/side-bar'
// import {AppFooter} from './cmps/app-footer'
// import {Ptodect} from './pages/ptodect'

export class RootCmp extends React.Component {

    render() {
        return (
            <div className="main-container ">
                <div className="flex space-evenly app-container ">
                <div className="main-app-container">
                <AppHeader />
                <main>
                    <Switch>
                        {routes.map(route=> <Route key={route.path} exact component={route.component} path={route.path} /> )}
                    </Switch>
                </main>
                </div>
                <div className="sidebar-continer">
                <SideBar/>
                </div>
                </div>
                <div className="space"></div>
                {/* <AppFooter /> */}
            </div>
        )
    }
}


