import React from 'react';
import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends React.Component {
  render() {
    const { tracks } = this.props;
    if (!Array.isArray(tracks)) {
      return null; // or render an error message
    }
    return (
      <div className="TrackList">
        {tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
