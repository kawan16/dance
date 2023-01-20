import React, {useState} from 'react';
import DanceMoves from '../../bachata.json';
import MoveCard from "../Shared/Component/MoveCard";


function GenerateMoveSequence() {
    const [moves, setMoves] = useState<any[]>([]);
    const generateMoveSequence = (count: number) => {
        const randomMoveMapper = () => {
            console.log(count)
            return DanceMoves[Math.floor(Math.random() * DanceMoves.length + 1)];
        }
        const moveSequence =  [...Array(count)].map(randomMoveMapper);
        console.log(moveSequence)
        setMoves(moveSequence);
    }
    return (
        <div className="container">
            <MoveSequenceFilter onGenerate={generateMoveSequence}/>
            <MoveSequence moves={moves}/>
        </div>
    );
}

function MoveSequenceFilter(props: any) {
    const [count, setCount] = useState(0);
    return (
        <div className="columns">
            <div className="column is-half">
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            placeholder="Number of moves"
                            onChange={event => setCount(+event.target.value)}/>
                    </div>
                    <div className="control">
                        <a
                            className="button is-link"
                            onClick={() => props.onGenerate(count)}>
                            Generate
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MoveSequence(props: any) {
    return (
        <div className="columns is-multiline">
            {
                props.moves.map(MoveSequenceItem)
            }
        </div>
    )
}

function MoveSequenceItem(props: any) {
    return (
        <div
            key={props.name}
            className="column is-one-quarter">
            <MoveCard {...props}/>
        </div>
    )
}


export default GenerateMoveSequence;
