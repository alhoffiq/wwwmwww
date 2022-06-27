import Card from '../components/Card';
import { puzzles } from '../assets/puzzles';
import Button from 'react-bootstrap/Button'

function Puzzles() {

	function showAll() {
		let elements = document.getElementsByClassName("hide");
		while (elements.length) {
			elements[0].classList.remove("hide");
		};
	}

	function showTwisty() {
		showAll()
		let elements = document.querySelectorAll(".ring,.pack");
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.add("hide");
		}
	}

	function showRing() {
		showAll()
		let elements = document.querySelectorAll(".twisty,.pack");
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.add("hide");
		}
	}

	function showPack() {
		showAll()
		let elements = document.querySelectorAll(".ring,.twisty");
		for (let i = 0; i < elements.length; i++) {
			elements[i].classList.add("hide");
		}
	}

	return (
		<div className="container text-center" id="puzzle-container">
			<div className="row puzzle-buttons mx-auto">
				<div className="col-3">
					<Button variant="secondary" size="lg" block onClick={() => showAll()}>All</Button>
				</div>
				<div className="col-3">
					<Button variant="secondary" size="lg" block onClick={() => showTwisty()}>Twisty Puzzles</Button>
				</div>
				<div className="col-3">
					<Button variant="secondary" size="lg" block onClick={() => showRing()}>Puzzle Rings</Button>
				</div>
				<div className="col-3">
					<Button variant="secondary" size="lg" block onClick={() => showPack()}>Packing Puzzles</Button>
				</div>
			</div>
			<ul className="row puzzle-row">
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