import { createRoot } from 'react-dom/client';
import { init as routesInit} from '../imports/api/client/routes';

let _root;

function root() {
    /*
    "if..." fixes the warning that happens when navigating across pages with the same layout:
    Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
    */

    if (!_root) {
        const container = document.getElementById('react-target');
        _root = createRoot(container);
    }
    return _root;
}

routesInit(root);

Meteor.startup(() => {
    // console.info('startup');

    /*
    const container = document.getElementById('react-target');
    const root = createRoot(container);
    root.render(<App />);
    */
});
