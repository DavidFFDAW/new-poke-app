import { SimpleRoundBox } from '../../../../../components/visuals/box/boxes';
import PokeImage from '@/components/visuals/images/PokeImage';
import ComponentSpinner from '@/components/visuals/loaders/ComponentSpinner';

export default function PokemonDatasLoading() {
    const images = {
        sprite: {
            front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
            back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
        },
    }

    return (
        <>
            <div className="pokemon-datas-page">
                <div className="w1 flex-start between">
                    <div className="w1 details-card flex-not-align center">
                        <div className="w1 details-card-image-shiny-container">
                            <div className="w1 details-card-img flex center gap">
                                <PokeImage src={images.sprite.front} alt="loading front view" />
                                <PokeImage src={images.sprite.back} alt="loading back view" />
                            </div>

                            <div className="w1 flex center">
                                <button type="button" className="btn btn-download" onClick={() => { }}>
                                    Ver
                                </button>
                            </div>
                        </div>

                        <div className="w1 abilities">
                            <ComponentSpinner />
                        </div>

                        <div className="w1 down poke-egg-group poke-egg-group-block egg-groups flex start column gap-sm">
                            <h3 className="w1">Grupo huevo</h3>
                            <ul className="w1 poke-egg-group-list flex start gap-sm">
                                <ComponentSpinner />
                            </ul>
                        </div>

                        <div className="w1 types poke-types flex column gap-sm">
                            <h3 className="w1">Tipos</h3>
                            <ul className="flex center gap">
                                <ComponentSpinner />
                            </ul>
                        </div>
                    </div>

                    <div className="w1 details-text flex column gap">
                        <SimpleRoundBox title="Información">
                            <ComponentSpinner />
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Debilidades y fortalezas">
                            <ComponentSpinner />
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Diferencias de sexo">
                            <ComponentSpinner />
                        </SimpleRoundBox>

                        {/* <SimpleRoundBox title="Evoluciones">
                        </SimpleRoundBox> */}
                        <SimpleRoundBox title="Evoluciones">
                            <ComponentSpinner />
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Crianza" id='breedability'>
                            <ComponentSpinner />
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Movimientos">
                            <ComponentSpinner />
                        </SimpleRoundBox>
                    </div>
                </div>
            </div>
        </>
    );
}
