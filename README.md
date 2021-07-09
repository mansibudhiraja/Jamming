# Jamming
The website is a React web app that connects to the user's Spotify account and allows them to search for tracks, add them to a new playlist and save the playlist to their account. 

Feature request: Retrieve, select and modify existing playlists
    
The app's state is updated with the selected playlist's ID, name and tracks upon selection, allowing the user to modify the playlist by adding and removing tracks, as well as editing the playlist's name.

Added Functionality:

Web app only displays playlists created (owned) by the user, both public and private.

User may refresh the list of playlists displayed by using the "Refresh" button beneath (makes a fresh call to the Spotify API). The list is also automatically refreshed once the current playlist is saved.

Upon selecting an existing playlist and adding/removing tracks, the user may save the changes to the current playlist as a new playlist (resets playlist ID state to null and calls the save function).

The user may clear the current playlist from the web app (resets state for playlist ID, name and tracks to default) and start editing again from scratch.
