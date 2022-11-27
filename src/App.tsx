import React, {useState} from 'react';
import DanceMoves from './bachata.json';
import './App.css'

function App() {
    const [filter, setFilter] = useState('');
    return (
        <div className="container">
            <MoveSearchBar
                onFilter={setFilter}/>
            <MoveList filter={filter}/>
        </div>
    );
}

function MoveSearchBar(props: any) {
    return (
        <div className="field">
            <div className="control">
                <input
                    className="input"
                    type="text"
                    placeholder="Search for a dance move"
                    onChange={event => props.onFilter(event.target.value)}/>
            </div>
        </div>
    )
}

function MoveList(props: any) {
    const matchMove = (danceMove: any) => danceMove.move.toLowerCase().includes(props.filter.toLowerCase());
    const filteredMoves = DanceMoves.filter(matchMove);
    return (
        <div className="columns is-multiline">
            {
                filteredMoves.map(MoveListItem)
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
