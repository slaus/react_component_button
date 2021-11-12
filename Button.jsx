import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from "react-router-dom";

import './Button.scss';

const Button = ({
                    children,
                    onClick,
                    className,
                    disabled,
                    active,
                    outline,
                    fixed,
                    big,
                    medium,
                    small,
                    transparent,
                    blue,
                    round,
                    ...attrs
                }) => {

    const onClickAction = (e) => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const buttonClasses = classNames(
        'button',
        className,
        {buttonActive: active},
        {buttonOutline: outline},
        {buttonFixed: fixed},
        {buttonBig: big},
        {buttonMedium: medium},
        {buttonSmall: small},
        {buttonTransparent: transparent},
        {buttonBlue: blue},
        {buttonRound: round},
    );

    // const Tag = attrs.href ? 'a' : 'button';

    return (
        <>
            {attrs.to &&
            <Link
                to={attrs.to}
                className={buttonClasses}
                disabled={disabled}
                onClick={onClickAction}
                {...attrs}
            >
                {children}
            </Link>
            }
            {!attrs.to &&
            <button
                className={buttonClasses}
                disabled={disabled}
                onClick={onClickAction}
                {...attrs}
            >
                {children}
            </button>
            }
        </>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
};

Button.defaultProps = {
    children: 'Default Button',
    onClick: () => {
    },
    className: '',
    disabled: false,
    size: '',
};

export default Button;
