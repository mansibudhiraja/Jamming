import React from 'react';
import PlaylistFormat from '../PlaylistFormat/PlaylistFormat'
import './CreatedPlaylist.css';

class CreatedPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playlists: [] }
    }

    mapItems() {
        if(this.props.items) {
            return this.props.items.map(item => {
                return <PlaylistFormat key={item.id} id={item.id} name={item.name} selectPlaylist={this.props.selectPlaylist} />
            });
        }
    }
    
    render(){
        return (
            <div className="created-Playlist">
                <h2>Created Playlists</h2>
                <div className="playlistName">
                    {
                        this.mapItems()
                    }
                </div>
                <div className="Refresh-container">    
                    <button className="Playlist-save" onClick={this.props.refresh}>REFRESH</button>
                </div>
            </div>
        )
    }
}

export default CreatedPlaylist;