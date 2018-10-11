import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class UserGist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			url: ''
		};
	}
	componentDidMount() {
		this.request = $.get(this.props.weburl, function(result) {

			this.setState({
				username: result[0].owner.url,
				url: result[0].owner.id
			});
		}.bind(this));
	}

	componentWillUnmount() {
		this.request.abort();
	}

	render() {
		return (
			<div class='url'>
        {this.state.username}
        {this.state.url}
        <br/>
        <a href={this.state.url}>{this.state.url}</a>
      </div>
		);
	}
}

function Welcome(props) {
	return (
		<div>
		{props.name}
		<input  value={props.value} placeholder={props.name} type={props.type} id={props.id}/>
  	</div>);
}
/*----------------------*/
class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.loginin = this.loginin.bind(this);
		this.loginout = this.loginout.bind(this);
		this.state = {
			login: false
		};
		this.loginin = this.loginin.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	loginin(event) {
		console.log(aaa);

		$.ajax({
			type: "POST",
			url: "/carrots-admin-ajax/a/login",
			data: "name=" + escape($('#user').val()) + "pwd=" + escape($('#pwd').val()),

			success: function(msg) {
				//隐藏loading
				if (message == "success") {
					window.location.href = 'www.baidu.com'
					this.setState({
						login: true
					});
					alert("登录失败！");
				}
				if (message == "fail") {
					window.location.href = 'www.baidu.com'
					console.log(msg);
					alert("登录失败！");
				}
			},
			error: function(msg) {
				window.location.href = 'www.baidu.com'
				alert("111");
			}
		});

	}

	loginout() {
		this.setState({
			login: false
		});

	}
	handleChange(event) {
		this.setState({
			value: event.target.value
		});

	}
	render() {
		const login = this.state.login;
		let button;

		if (login) {
			button = <LogoutButton onClick={this.loginout} value={this.state.value}  />;
		} else {
			button = <LoginButton onClick={this.loginin} value={this.state.value}/>;
		}

		return (
			<form class='login'>
			<div>
				用户
		<input  value={this.state.value} placeholder='请输入用户名' id="user" onChange={this.handleChange}/>
  			</div>
			<Welcome name='密码' type='password' id="pwd"/>
		{
			button
		} {
			this.state.login ? (<h1>欢迎回来</h1>) : (<p>游客请登录</p>)
		}

 			 </form>
		);
	}
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
      登录
    </button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
      登出
    </button>
	);
}

class App extends React.Component {

	render() {
		return (
			<main>

 			<UserGist weburl = "https://api.github.com/users/octocat/gists" />

			<LoginControl />
			</main>
		);
	}

}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);