import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
   
    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui primary button">Delete</button>
                <Link className="ui button" to='/'>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete stream?'
        }

        return `Are you sure you want to delete stream with title ${this.props.stream.title}?`
    }
    
    render() {
        return ( 
                <Modal 
                    title='Delete stream'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
        );
        }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);