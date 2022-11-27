import React from 'react';
import DanceMoves from './bachata.json';

function App() {
  return (
      <div className="container">
          <MoveList/>
      </div>
  );
}

function MoveList() {
    return (
        <div className="columns is-multiline">
            {
                DanceMoves.map(MoveListItem)
            }
        </div>
    )
}

function MoveListItem(props: any) {
    return (
        <div className="column is-one-quarter">
            <MoveCard {...props}/>
        </div>
    )
}

function MoveCard(props: any) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.imageUrl} alt="thumbnail"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.move}</p>
                        <p className="subtitle is-6">{props.dance}</p>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <a href={props.videoUrl} className="card-footer-item">
                    Watch
                </a>
            </footer>
        </div>
    )
}
export default App;
