import React, { Component } from 'react';
let kik = () => {
    console.log(621)
}
class Sign_in extends Component {

    constructor(props) {
        super(props);
        this.width = '25%'
        if (/Mobi/.test(navigator.userAgent)) {
            this.width = '100%';
        }
        this.state = {
            login_details: ''
        }
        this.sign_in = this.sign_in.bind(this);

    }

    componentDidMount(){
        this.enter_keypress();
    }
    enter_keypress() {
        let kik = document.getElementById("login_button")
        var click_event = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          });
        document.addEventListener('keyup', function(event){
            if(event.keyCode === 13) {
                kik.dispatchEvent(click_event);
            }
        })
    }

    sign_in(event){
        this.setState({'login_details':''});
        let email = document.getElementById('email_address').value;
        let password = document.getElementById('password').value;
        if (email.length && password.length) {
            this.setState({'login_details':'PASS'});
            console.log('Pass')
            console.log('Email --> ', email)        
            console.log('Password --> ', password)
            var data = {
                email,
                password
            }
            // console.log(JSON.stringify(data))

            const request = new XMLHttpRequest();
                request.open('POST', 'https://council-tag-dev.herokuapp.com/api/login/', true);
                request.setRequestHeader("Content-Type", "application/json");
                // request.send(JSON.stringify(data))
                request.send(data)
                request.onload = function(data) {
                    let response = JSON.parse(data.target.response);
                    console.log(response)
                }
        }
        else if (!email.length && !password.length) {
            this.setState({'login_details':'Missing email and password'});
        }
        else if (!email.length){
            this.setState({'login_details':'Missing email'});
        }
        else if (!password.length) {
            this.setState({'login_details':'Missing Password'});
        }
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{ 'width': this.width, 'minWidth':'400px', 'margin': '50px 0 50px 0' }}>
                    <h2 className="ui teal image header">
                    <img src="/static/image/meetup.png" className="image" />
                    <div className="content">
                        Log-in to your account
                    </div>
                    </h2>
                    <div style={{ 'color':'red', 'height':'25px' }}>{ this.state.login_details }</div>                    
                    <form className="ui large form">                               
                    <div className="ui stacked segment">
                        <div className="field">
                        <div className="ui left icon input">
                            <i className="user icon"></i>
                            <input id="email_address" type="text" name="email" placeholder="E-mail address" />
                        </div>
                        </div>
                        <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon"></i>
                            <input id="password" type="password" name="password" placeholder="Password" />
                        </div>
                        </div>
                        <div id="login_button" className="ui fluid large teal submit button" onClick={ this.sign_in }>Login</div>
                    </div>

                    <div className="ui error message"></div>

                    </form>

                    <div className="ui message">
                    New to us? <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sign_in;