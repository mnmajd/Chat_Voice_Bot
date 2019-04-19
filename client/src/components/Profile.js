import React, {Component} from "react";

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <a href="#pablo">

                                <img className="img" src={require('../assets/img/faces/marc.jpg')}/>
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-gray">CEO / Co-Founder</h6>
                            <h4 className="card-title">Alec Thompson</h4>
                            <p className="card-description">
                                Don't be scared of the truth because we need to restart the human foundation in truth
                                And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                            </p>
                            <a href="#pablo" className="btn btn-rose btn-round">Update Profile</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Profile;