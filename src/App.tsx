import React, {useState} from 'react';
import DanceMoves from './bachata.json';
import './App.css'

const MoveTypes = DanceMoves
    .reduce((types: any, move: any) => {
        const newTypes = {...types};
        console.log(move.name, ' ', move.type)
        newTypes[move.type] = newTypes[move.type] || [];
        return newTypes;
    }, {});

function App() {
    const [filter, setFilter] = useState({name: '', type: ''});
    const setNameFilter = (name: any) => setFilter({...filter, name});
    const setTypeFilter = (type: any) => setFilter({...filter, type});
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-one-fifth">
                    <MoveTypeFilterMenu
                        selectedType={filter.type}
                        onSelectedType={setTypeFilter}/>
                </div>
                <div className="column">
                    <MoveSearchBar
                        onFilter={setNameFilter}/>
                    <MoveList filter={filter}/>
                </div>
            </div>
        </div>
    );
}

function MoveTypeFilterMenu(props: any) {
    const types = Object.keys(MoveTypes).sort();
    return (
        <aside className="menu">
            <p className="menu-label">
                Type
            </p>
            <ul className="menu-list">
                <li>
                    <a
                        className={props.selectedType === '' ? 'is-active' : ''}
                        onClick={() => props.onSelectedType('')}>
                        {'All (' + DanceMoves.length + ')'}
                    </a>
                </li>
                {
                    types.map((moveType:any) =>
                        <li key={moveType}>
                            <a className={moveType === props.selectedType ? 'is-active' : ''}
                                onClick={() => props.onSelectedType(moveType)}>
                                {moveType}
                            </a>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
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
    const matchMove = (danceMove: any) =>
        danceMove.name.toLowerCase().includes(props.filter.name.toLowerCase()) &&
        danceMove.type?.toLowerCase().includes(props.filter.type.toLowerCase());
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
        <div
            key={props.name}
            className="column is-one-quarter">
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
                        <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6">{props.dance}</p>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <a
                    href={props.videoUrl}
                    target="_blank"
                    className="card-footer-item">
                    Watch
                </a>
            </footer>
        </div>
    )
}
export default App;
