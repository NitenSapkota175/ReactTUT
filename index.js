const child1 = React.createElement('p',{},'i am child1')
const child2 = React.createElement('p',{},'i am child2')
//const div = <div className="text">Hello 2</div>
const div = React.createElement('div',{className:'text'},[child1,child2])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)