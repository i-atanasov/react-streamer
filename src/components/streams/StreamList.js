import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import streams from "../../apis/streams";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdminButtons(stream) {
        if (stream.userId === this.props.currentUserId && stream.userId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
                    <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className="large middle aligned icon camera" />
                        <div className="content">
                            <Link to={`/streams/${stream.id}`} className='header'>
                                {stream.title}
                                <div className="description">
                                    {stream.description}
                                </div>
                            </Link>
                        </div>
                </div>
            );
        });
    }

    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='/streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return ( 
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreateButton()}
            </div>
    );
    }
}

    const mapStateToProps = (state) => {
        return { 
            isSignedIn: state.auth.isSignedIn,
            currentUserId: state.auth.userId,
            streams: Object.values(state.streams) };
    };



export default connect(
    mapStateToProps, 
    { fetchStreams }
    )(StreamList); 
