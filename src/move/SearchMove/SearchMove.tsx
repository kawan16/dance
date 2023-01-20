import React, {useState} from 'react';
import DanceMoves from '../../bachata.json';
import MoveCard from "../Shared/Component/MoveCard";


const MoveDances = DanceMoves
    .reduce((dances: any, move: any) => {
        const newDances = {...dances};
        newDances[move.dance] = newDances[move.dance] || [];
        return newDances;
    }, {});

const MoveTypes = (dance: string) => DanceMoves
    .reduce((types: any, move: any) => {
        const newTypes = {...types};
        if (move.dance.includes(dance)) {
            newTypes[move.type] = newTypes[move.type] || [];
        }
        return newTypes;
    }, {});

function SearchMove() {
    const [filter, setFilter] = useState({name: '', type: '', dance: ''});
    const setNameFilter = (name: any) => setFilter({...filter, name});
    const setTypeFilter = (type: any) => setFilter({...filter, type});
    const setDanceFilter = (dance: any) => setFilter({...filter, dance});
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-one-fifth">
                    <MoveFilterMenu
                        selectedType={filter.type}
                        selectedDance={filter.dance}
                        onSelectedType={setTypeFilter}
                        onSelectedDance={setDanceFilter}/>
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

function MoveFilterMenu(props: any) {
    return (
        <aside className="menu">
            <MoveDanceFilterMenu {...props} />
            <MoveTypeFilterMenu {...props} />
        </aside>
    )
}

function MoveDanceFilterMenu(props: any) {
    const dances = Object.keys(MoveDances).sort();
    return (
        <>
            <p className="menu-label">
                Dance
            </p>
            <ul className="menu-list">
                <li>
                    <a
                        className={props.selectedDance === '' ? 'is-active' : ''}
                        onClick={() => props.onSelectedDance('')}>
                        {'All (' + dances.length + ')'}
                    </a>
                </li>
                {
                    dances.map((dance:any) =>
                        <li key={dance}>
                            <a className={dance === props.selectedDance ? 'is-active' : ''}
                               onClick={() => props.onSelectedDance(dance)}>
                                {dance}
                            </a>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

function MoveTypeFilterMenu(props: any) {
    const types = Object.keys(MoveTypes(props.selectedDance)).sort();
    return (
        <>
            <p className="menu-label">
                Type
            </p>
            <ul className="menu-list">
                <li>
                    <a
                        className={props.selectedType === '' ? 'is-active' : ''}
                        onClick={() => props.onSelectedType('')}>
                        {'All (' + types.length + ')'}
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
        </>
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
        danceMove.dance?.toLowerCase().includes(props.filter.dance.toLowerCase()) &&
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


export default SearchMove;
