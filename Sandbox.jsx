import React, { Fragment } from 'react';
import {Trans} from 'react-i18next';

import Button from './Button';
import Icon from '../Icon/Icon';

const Sandbox = () => (
    <Fragment>
        <h3 className="mt-5">Buttons</h3>
        <h5><span>1. Text, hover animation and onClick function:</span></h5>
        <Button onClick={() => { alert('Click !!!'); }} sweep big><Trans>__app_sign_up</Trans></Button>
        <Button onClick={() => { alert('Click !!!'); }} sweep medium><Trans>__app_sign_out</Trans></Button>
        <Button onClick={() => { alert('Click !!!'); }} sweep small><Trans>__app_sign_in</Trans></Button>

        <h5><span>2. Disabled button:</span></h5>
        <Button onClick={() => { alert('Click !!!'); }} disabled />

        <h5><span>3. Active button:</span></h5>
        <Button active />

        <h5><span>4. Supporting data, type and etc. attributes:</span></h5>
        <Button data-name="button" />
        <Button type="submit" />

        <h5><span>5. Button link</span></h5>
        <Button to="test">Link</Button>
        <Button to="test" disabled>Link</Button>

        <h5><span>5. Invert button (secondary button)</span></h5>
        <Button transparent><Trans>__app_login_via</Trans> Facebook</Button>

        <h5><span>6. Transparent button</span></h5>
        <Button transparent round><Icon name="help_empty" blue/></Button>

        <h5><span>7. Button with fixed width</span></h5>
        <Button fixed blue ><Icon name="fb" /><Trans>__app_continue_with</Trans> Facebook</Button>
        <Button fixed big outline><Icon name="apple" size={28}/><Trans>__app_log_in</Trans></Button>
        <Button fixed small ><Icon name="lock_empty" size={18}/><Trans>__app_log_in</Trans></Button>

    </Fragment>
);

export default Sandbox;