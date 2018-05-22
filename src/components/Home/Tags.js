import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.home,
});

const Tags = props => {
  const tags = props.events;
  if (tags) {
    return (
      <div className="col-md-4">
        {
          tags.map( tag => {
            return (
              <div className="sidebar card text-center" key={tag.id}>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card-block">
                      <h2 className="card-title">{tag.date}</h2>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="card-block">
                      <h5 className="card-title">{tag.title}</h5>
                      <p className="card-text">{tag.time}</p>
                      <p className="card-text">{tag.place}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div className="col-md-4">Loading Tags...</div>
    );
  }
};

export default connect(mapStateToProps)(Tags);
