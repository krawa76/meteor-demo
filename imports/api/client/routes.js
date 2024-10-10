import React from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import { PageTest } from '../../ui/public/PageTest';

function init(root) {
    FlowRouter.route('/test1', {
        action() {
            root().render(<PageTest filter="test1"/>);
        }
    });

    FlowRouter.route('/test2', {
        action() {
            root().render(<PageTest filter="test2"/>);
        }
    });
}

export {init}
