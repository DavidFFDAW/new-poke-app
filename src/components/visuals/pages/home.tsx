export default function Home() {
    return (
        <div className="flex center vertical-center-50 input-div center-fix">
            {/* <div className="bg-red"></div> */}

            <div className="zindex flex center poke-home-form">
                {/* <img
                    src={`/images/pokeball.png`}
                    width="50"
                    height="50"
                    alt=""
                /> */}
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
                    width="100"
                    height="100"
                    alt="pikachu animated"
                />

                <div>
                    <input
                        type="text"
                        name="search"
                        className="general-input inpt-pad"
                        defaultValue=""
                    />
                    <form className="btn-group" action="/">
                        <button
                            formAction="pokemon"
                            className="btn btn-download"
                            type="submit"
                        >
                            Pokemon
                        </button>

                        <button
                            formAction="move"
                            className="btn btn-download"
                            type="submit"
                        >
                            Movimiento
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
