import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({
                    children,
                    onClick,
                    className,
                    disabled,
                    active,
                    ...attrs
}) => {

    const onClickAction = (e) => {
        if(disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const buttonClasses = classNames(
        'button',
        className,
        {active},
        {...attrs},
    );

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
            {...attrs}
            className={buttonClasses}
            disabled={disabled}
            onClick={onClickAction}
        >{children}</Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string,
    outline: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default Button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
    size: '',
    outline: false,
};

export default Button;
