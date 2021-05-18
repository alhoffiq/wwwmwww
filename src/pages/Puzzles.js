import Card from '../components/Card';

function Puzzles() {
    return (
        <div className="container text-center" id="puzzle-container">
            <div className="row">
                <div className="col-4 puzzle"><Card /></div>
                <div className="col-4 puzzle"><Card /></div>
                <div className="col-4 puzzle"><Card /></div>
            </div>
            <div className="row">
                <div className="col-4 puzzle"><Card /></div>
                <div className="col-4 puzzle"><Card /></div>
                <div className="col-4 puzzle"><Card /></div>
            </div>
        </div>
    );
}

export default Puzzles;