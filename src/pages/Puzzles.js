import Card from '../components/Card';
import puzzles from '../assets/puzzles.json';

function Puzzles() {
    return (
        <div className="container text-center" id="puzzle-container">
            <div className="row">
                {puzzles.map(puzzle => {
                    return (
                        <div className="col-3 puzzle">
                            <Card
                                name={puzzle.name}
                                description={puzzle.description}
                                image={puzzle.image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Puzzles;