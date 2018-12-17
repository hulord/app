const context = require.context('./',false,/\.js$/);
const model1 = context
.keys()
.filter(item => item !== './index.js')
.map(key=>context(key));


// const context2 = require.context('../index/models/',false,/\.js$/);
// const model2 = context2
// .keys()
// .filter(item => item !== './index.js')
// .map(key=>context2(key));

// const model = {model1,model2}
export default model1

