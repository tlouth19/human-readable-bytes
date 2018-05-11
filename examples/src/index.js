import React from 'react';
import { render} from 'react-dom';
import convertBytesToHumanReadable from '../../src/';

const arr = ['100', '1001', '100020', '1220000', '123020000', '1200000000']
const App = () => (
    <React.Fragment>
    	{arr.map(bytes => 
    		<div key={bytes}>
    			{bytes}b is {convertBytesToHumanReadable(bytes, 1000, 0, false)}
    		</div>
    	)}
    </React.Fragment>
);

render(<App />, document.getElementById("root"));