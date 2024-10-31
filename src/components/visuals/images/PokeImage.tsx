interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    shiny?: boolean;
}

export default function PokeImage({ shiny, ...props }: Props) {
    const imageClassName = ['poke-image pokemon-simple-image', (shiny ? 'pokemon-is-shiny' : '')].join(' ').trim();
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
    }

    return (
        <img
            {...props}
            draggable={false}
            loading="lazy"
            aria-hidden={false}
            data-is-shiny={Boolean(shiny)}
            className={imageClassName}
            onError={handleImageError}
        />
    )
}
