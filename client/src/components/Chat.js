import React, { Component } from 'react';
class Chat extends Component {
    state = {
        results: []
    };
    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => {
                console.log(JSON.parse(JSON.stringify(res.data)))
                return res.data.json();
            })
            .then((data)=>{
                    for(let i=0;i<data.length;i++){
                        console.log(data[i]);
                        this.setState({
                            results:data.map(item=>({
                                title:item.Title
                            }))
                        })
                    }
                }

            )
            .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/offers');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (
            <React.Fragment>
                <div className="botui-app-container" id="api-bot">
                    <bot-ui></bot-ui>
                </div>
            </React.Fragment>

        );
    }
}
export default Chat;