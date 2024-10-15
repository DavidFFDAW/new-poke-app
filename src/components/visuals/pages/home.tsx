export default function Home() {
    return (
        <div className="flex center vertical-center-50 input-div center-fix">
            <div className="bg-red"></div>

            <div className="zindex flex center">
                <img
                    src={`/images/pokeball.png`}
                    width="50"
                    height="50"
                    alt=""
                />
                <div>
                    <input
                        type="text"
                        name="search"
                        className="general-input inpt-pad"
                        defaultValue=""
                    />
                    <div className="btn-group">
                        <button className="btn btn-download" type="button">
                            ¿____?
                        </button>
                        <button className="btn btn-download" type="button">
                            Pokemon
                        </button>
                        <button className="btn btn-download" type="button">
                            ¿____?
                        </button>
                        <button className="btn btn-download" type="button">
                            Movimiento
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
