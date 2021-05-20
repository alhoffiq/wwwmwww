import banner from '../assets/images/puzzle-banner.jpg';
import Awards from '../components/Awards';
import untouchable from '../assets/images/untouchable.jpg';

function Home() {
    return (
        <div className="container">
            <div className="container home-banner text-center">
                <img src={banner} alt="banner"></img>
            </div>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac auctor augue mauris augue neque gravida. At tellus at urna condimentum mattis pellentesque id nibh tortor. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Feugiat in ante metus dictum at tempor commodo ullamcorper. Lacus vel facilisis volutpat est velit. Sit amet mauris commodo quis imperdiet massa tincidunt. Non arcu risus quis varius quam quisque. Quam id leo in vitae turpis massa sed elementum tempus. Nulla facilisi nullam vehicula ipsum a arcu. Auctor urna nunc id cursus metus aliquam eleifend mi.</p>
                </div>
                <div className="col-3">
                    <h2 className="text-center">Awards</h2>
                    <div className="row award-row">
                        <Awards
                            title="Gamepuzzles Annual Polyomino Excellence Award for 2015 — 'Untouchable 11 cube-fold hexominoes'"
                            link="http://www.gamepuzzles.com/gape15.htm"
                            image={untouchable}
                            alt="Untouchable 11"
                        />
                    </div>
                    <div className="row award-row">
                        <Awards
                            title="2016 Puzzle Design Competition Jury Honorable Mention — WOW5"
                            link="https://johnrausch.com/DesignCompetition/2016/results.htm"
                            image="https://puzzleringmaker.com/z_it_WO_9.jpg"
                            alt="WOW5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;