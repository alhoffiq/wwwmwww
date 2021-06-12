
function Contact() {
    return (
        <section className="container rounded">
            <div className="row">
                <div className="col">
                    <h2 className="header text-center">Contacts</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-4 mx-auto">
                    <div className="card">
                        <div className="list-group">
                            <a href="mailto:carl.n.hoff@gmail.com" className="list-group-item list-group-item-action text-center" target="_blank" rel="noreferrer">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
