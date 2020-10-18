#### 环境代建
- 三个核心插件
```
react   npm i react --save
react   npm i react-dom --save
babel   npm i babel-standalone --save
```
#### 创建根节点

<html>

    <!--创建demo根节点，一个页面只需要有一个根节点，-->
    <!--这个节点下的内容就会被react所管理-->
    <body id='demoReact'>
    </body>
    <script type="text/bable">
    <!--jsx= javascript xml javascript 扩展语法-->
    <!--优点-->
    <!--1.执行效率-->
    <!--2.类型安全，编译时发现错误-->
    <!--3.使用jsx的时候编写模板更加快速和简单-->
    
    let myDom = <h1>你好世界</h1>
    ReactDOM.render();
    
    </script>
    
</html>

#### jsx基本语法
- 1：注释
```
{/*这是注释*/}
```
- 2:多行标签需要一个父元素包裹
```
let myDom = (<div>
    <div>1</div>
    <div>2</div>
</div>)
```
- 在react中写的js都是jsx
- 注意：
```
1:jsx必须要有根节点
2：jsx正常的hmtl元素要小写，如果是大写默认是组件
```
- jsx的表达式

```
1：支持变量处理
let time = new Date().toLocaleTimeString();
let str = '时间：'
let el = (
  <div>
    你好世界
    <h1>
      {str+time}
    </h1>
  </div>
)
ReactDOM.render(
  el,
  document.getElementById('root')
)
2：支持三目运算符
<h1>
      隔离吗？
      {man? '不隔离':'隔离'}
    </h1>
3:支持三目运算中增减html元素
<h1>
      隔离吗？
      {man? <button>隔离</button>:<button>不隔离</button>}
    </h1>
4:支持加入另外一个 el
<h1>
      混搭
      {el2}
    </h1>
```
3：样式名
- 样式导入
import './App.css'
```
<!--className-->
<h1 className='bg'>
      隔离吗？
      {man? <button>隔离</button>:<button>不隔离</button>}
    </h1>
```
4:属性和html内容一线个都是用{}来插入内容不用使用引号

#### jsx样式和注释
- style 

```
let styleDom = {
  background: "red"
  borderBottom:"1px solid #fff"
}
let el = (
  <div  style={styleDom}>
    你好世界
    <h1>
      {str+time}
    </h1>
    
  </div>
)
```
- className
- 第二个css的字母大写或者用""包裹
```
<!--单个样式-->
<h1 className="borders">
      {str+time}
    </h1>
<!--多个样式 -->
let styleDom2 = ['borders','h1bg'].join(" ")
<h1 className={styleDom2}>
      {str+time}
    </h1>
```
- 注释
单花括号包裹起来
```
{/* 这是注释 */}
```
#### 组件
- 函数式组件（静态组件）不能实现动态交互

```
function FuncComponent(props) {
  let name = 'bqc';
  let age = <p>今年我 {props.age} </p>
  let isBoy =  props.sex ? '男孩':'女孩'
  return (
      <div>
        <p>我叫{name}</p>
        {age}
        <p>我是一个{isBoy}</p>
      </div>
  )
}
```
- 类组件动态组件 可以实现动态交互

```
class XIAOJIEJIE extends React.Component {
  render() {
  <!--包含props属性-->
  console.log(this)

    return(
      <div>
        
        <h1>特长:{this.props.skills}</h1>
      </div>
    )
  }
}
```
- 符合组件（顾名思义就是函数组件和类组件混用）

```
class XIAOJIEJIE extends React.Component {
  render() {
  console.log(this)

    return(
      <div>
        {FuncComponent({age:this.props.age,sex: this.props.sex} )}
        <FuncComponent age={this.props.age} sex={this.props.sex} />
        <h1>特长:{this.props.skills}</h1>
      </div>
    )
  }
}
const info = {
  age: 13,
  sex:0,
  skills: '柔氏按摩'
}
let el = (
  <div style={styleDom}>
    <XIAOJIEJIE age={info.age} sex={info.sex} skills={info.skills}/>
  </div>
)
```

#### 状态管理
1：声明组件状态
```
在class中的constructor构造方法中声明需要的变量：
constructor(props) {
    super(props)
    // 状态数据 数据决定view视图
    this.state = {
      time : new Date().toLocaleTimeString(),
      showInfo: '',
      type: false
    }
  }
```
2：改变状态

```
通过 this.setState()方法改变需要的变量
tips：
绑定在视图中的方法会因为this指向原因报出找不到对应state中变量值得错误，
解决方法：
1：就是在声明视图中绑定的方法时使用箭头函数定义方法，这样就能解决this指向问题
changeShowInfo = ()=> {
    let {type} = this.state;
      this.setState({
        showInfo:type? '我叫卜前程' : '猜猜是是谁',
        type: !type
      })
  }
2：在constructor构造函数中 通过bind方法改变一下绑定视图中方法的作用域
constructor(props) {
    super(props)
    // 状态数据 数据决定view视图
    this.state = {
      time : new Date().toLocaleTimeString(),
      showInfo: '',
      type: false
    }
    this.changeShowInfo = this.changeShowInfo.bind(this)
  }
  
  小提示：
react中视图绑定需要执行的方式和小程序类似：
通过onClick 方法绑定需要执行的方法 记得加this
<button onClick={this.changeShowInfo}>
  切换视图状态
</button>
```
#### 父子组件间的数据传值及修改
1:父组件传值给子组件
```
父组件：
1：定义子组件接受的参数属性名(fatherStr,changeFatherData),将父组件的属性或者方法等传给子组件
render() {
    return(
      
      <div>
        <ChildComp fatherStr={this.state.showInfo} changeFatherData={this.changeShowInfo}/>
      </div>
    )
子组件：
1：在构造函数中通过super接受父组件的传值
2：通过this.props.xxx 取到父组件穿过来的属性或者方法等

constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      childStr: '子组件中的数据',
    }
  }
   render() {
    return (
      <div style={childComStyle}>
        我是一个子组件
        <p>{this.state.childStr}</p>
        <p>父组件传过来的值：{this.props.fatherStr}</p>
        <button onClick={this.changeFatherData}>改变父元素的值</button>
      </div>
    )
  } 
  changeFatherData= ()=> {
    this.props.changeFatherData();
  }
```
2：修改父组件中的属性值

通过调用父组件穿过来的方法修改对应的父组件的属性值，这点小程序及vue通过 emit的方式不同

#### 方法的绑定及传值
1：方法绑定通过 在需要绑定事件的dom中  添加onClick属性
2：给方法传值的方式和小程序和vue都不同
-  传入dom的原生方法和属性给对应函数 将e传入
-  传入需要传入的值  通过在onClick中传入箭头函数在箭头函数中执行需要执行的方法将对应参数传入
3：阻止默认行为的方法为

    使用传入的dom原生方法对象e中的preventDefault
    e.preventDefault();
```
<button  onClick={(e)=>{this.changeShowInfo('方法传的值',e)}}>
  切换视图状态
</button>
```
