import React, {Component} from "react";
import {addOffer} from "../../store/actions/OfferActions";
import connect from "react-redux/es/connect/connect";

class AddOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Content: '',
            Type: '',
            Duration: '',
            CodeActivation:'',
            Price:''
        }
    }



    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    submit = event => {
        const {Title,Content, Type,Duration,CodeActivation,Price} = this.state;
        const {dispatch} = this.props;
        dispatch(addOffer(Title,Content, Type,Duration,CodeActivation,Price));
    }
    render() {

        return (
            <React.Fragment>


                <div className="col-md-4 col-sm-6 ml-auto mr-auto">                    <div className="card">
                        <div className="card-header card-header-rose card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">send</i>
                            </div>
                            <h4 className="card-title">Add Offer</h4>
                        </div>
                        <div className="card-body ">
                            <form className="form" method action>
                                <div className="form-group">
                                    <label htmlFor="exampleEmail" className="bmd-label-floating">Title</label>
                                    <input type="text" className="form-control"
                                           value={this.state.Title}
                                           onChange={this.handleChange('Title')}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePass" className="bmd-label-floating">Content</label>
                                    <input type="textarea" className="form-control"
                                           value={this.state.Content}
                                           onChange={this.handleChange('Content')}/>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="examplePass" className="bmd-label-floating">Price</label>
                                    <input type="text" className="form-control"
                                           value={this.state.Price}
                                           onChange={this.handleChange('Price')}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePass" className="bmd-label-floating">Duration</label>
                                    <input type="text" className="form-control"
                                           value={this.state.Duration}
                                           onChange={this.handleChange('Duration')}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePass" className="bmd-label-floating">Code Activation</label>
                                    <input type="text" className="form-control"
                                           value={this.state.CodeActivation}
                                           onChange={this.handleChange('CodeActivation')}/>
                                </div>


                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                        <label htmlFor="examplePass" className="bmd-label-floating">Type</label>
                                        </div>
                                        <div className="col-md-8">
                                        <select className="form-control"data-style="btn select-with-transition"   value={this.state.Type} onChange={this.handleChange('Type')}>
                                            <option  disabled selected>Single Option</option>
                                            <option  className="form-control"  value="internet">Internet</option>
                                            <option className="form-control"   value="communication">Communication</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>

                                <div className="card-footer ">
                                    <a className="btn btn-rose btn-link btn-lg"
                                       onClick={(event) => {
                                           this.submit()
                                       }}>Submit</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </React.Fragment>

        );
    }
}
const mapStateToProps = (state) => {
    const {OfferAdded} = state.offersreducer;
    return {
        OfferAdded
    };

}
export default connect(
    mapStateToProps,
    null
)(AddOffer);