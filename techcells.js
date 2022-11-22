// ---------- Technical Task ----------

// 1-Task 
// I would like to explain the redux process in the old way, without the redux-toolkit. 
// Because, rtk hides almost all the beauty :). 
// First, you need to install redux and react-redux packages. 
// Because, redux is independent library and to connect react you need react-redux 
// Then, in redux we have one global store which stores all reducers using combineReducers
// Reducer is just pure function that take initial state and action.
// Action is just object with type and payload properties. Ex: { type: 'GET_USER', payload: { id: 1, name: Mike }}
// payload in action can be optional, but type is must be, and unique.
// The only way to change state is dispatching action, action triggers reducer, and reducer return new state, (not mutating existing)
// YOU MUST NOT MUTATE state in reducers. IT SHOULD BE IMMUTABLE.
// Then to render global state in class components also called stateful component, we use HOC called connect.
// It takes params mapStateToProps, mapDispatchToProps.
// In functional components we can use both connect and hooks that are useSelector() and useDispatch()
// BUT !!! in redux, actions are sync, to achieve async we need to install middlewares such as redux-thunk or redux-saga,

// 2-Task
function generateUrl(url, params) {
	return url.concat("?", Object.entries(params).reduce((acc, curr) => {
		if(curr[1] || curr[1] === 0 || curr[1] === false) {
			return acc.concat(curr.join('='), "&"); 
		}
		return acc;
	}, '')).slice(0, -1);
}

generateUrl("http://testurl.bitfinx.com/", {
    width: 360,
    height: 300,
    locale: 'en',
    toolbar_bg: '',
    interval: '3h',
    pair: 'BTC_USD',
})

// 3-Task
function volumeSetup() {
	// setup volume unit interface
	const volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
	let element = null;
	if(volumeUnit) {
		if(volumeUnit === 'FIRSTCCY') {
			element = $('#tickervolccy_0');
		} else {
			// We can just add volumeUnit
			element = $(`#tickervolccy_${volumeUnit}`); 
		}
		// We don't need extra check, since volumeUnit is exist, element will always exist
		element.prop("checked", true); 
	}
	// override currencies list
	return window.APP.util.initCurrenciesList(); // We can just return value
}
