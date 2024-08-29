import React from 'react';
import ReactDOM from 'react-dom';
// import TransferEle from './components/TransferEle'
import {A, B} from './components/HOC/TestHoc'
import withLog from './components/HOC/withLog'
import withLogin from './components/HOC/withLogin'

const ALogin = withLogin(withLog(A))
const BLogin = withLogin(withLog(B))


ReactDOM.render(<div>
	<ALogin isLogin num={1}/>
	<BLogin isLogin num={2}/>
</div>, document.getElementById('root'));