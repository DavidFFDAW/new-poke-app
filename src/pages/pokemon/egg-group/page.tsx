import NullableComponent from "@/components/visuals/loaders/Nullable";
import useEggGroup from "./useEggGroup";
import PokeSearchList from "@/components/visuals/poke-list/search-list/SearchList";
import { getPokemonEggGroup } from "@/utils/pokemon.translate";
import SEOHead from "@/components/seo/head";

export default function PokemonEggGroupPage() {
    const { param, eggGroup } = useEggGroup();
    const trEggGroup = getPokemonEggGroup(param as string);
    const realTrEggGroup = eggGroup
        ? getPokemonEggGroup(eggGroup.name)
        : trEggGroup;
    const parsedList = eggGroup
        ? eggGroup.pokemon_species.map((poke) => {
              return {
                  ...poke,
                  types: [],
                  id: Number(
                      poke.url
                          .split("https://pokeapi.co/api/v2/pokemon-species")[1]
                          .replace(/\//g, "")
                  ),
              };
          })
        : [];

    return (
        <section className="egg-group-page">
            <SEOHead title={`Huevo ${realTrEggGroup}`} />

            <h1 className="violet">
                Pokemons con grupo huevo {realTrEggGroup}
            </h1>

            <NullableComponent condition={eggGroup && parsedList.length > 0}>
                <PokeSearchList showTypes={false} list={parsedList} />
            </NullableComponent>
        </section>
    );
}
