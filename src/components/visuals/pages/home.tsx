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
                    <form className="btn-group" action="/">
                        <button formAction="pokemon" className="btn btn-download" type="submit">
                            Pokemon
                        </button>
                        
                        <button formAction="move" className="btn btn-download" type="submit">
                            Movimiento
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
