import Card from '../components/Card';
import puzzles from '../assets/puzzles.json';

function Puzzles() {
    return (
        <div className="container text-center" id="puzzle-container">
            <ul className="row">
                {puzzles.map(puzzle => {
                    return (
                        <li className={puzzle.type + " col-3 puzzle"} key={puzzle.name}>
                            <Card
                                name={puzzle.name}
                                description={puzzle.description}
                                image={puzzle.image}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Puzzles;