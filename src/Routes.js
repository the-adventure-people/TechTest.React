import React from 'react';
import { Switch, Route } from 'react-router';
import Homepage from './pages/Homepage/Homepage';
import FormTask from './pages/FormTask/FormTask';
import FormTaskSuccess from './pages/FormTaskSuccess/FormTaskSuccess';
import ApiTask from './pages/ApiTask/ApiTask';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/form-task" component={FormTask} />
            <Route
                exact
                path="/form-task/success"
                component={FormTaskSuccess}
            />
            <Route exact path="/api-task" component={ApiTask} />
        </Switch>
    );
}

export default Routes;
