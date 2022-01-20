import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {formTask, content} from './FormTask.module.scss';
import Form from '../../components/Form/form';

function FormTask({ className, ...props }) {
    return (
        <div className={formTask}>
            <div className={content}>
                <h1>Form Task</h1>
                <Form />
            </div>
        </div>
    );
}

FormTask.propTypes = {
    className: PropTypes.string,
};

export default FormTask;
