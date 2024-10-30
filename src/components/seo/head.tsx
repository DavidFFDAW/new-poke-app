import { Helmet } from "react-helmet-async";

interface Props {
    title: string;
}

export default function SEOHead({ title }: Props) {
    return (
        <Helmet titleTemplate='%s | Poke App'>
            <title>{title}</title>

            <meta name='description' content='Poke App' />
            <meta name='keywords' content='Poke App, Pokemon, Pokedex' />
            <meta name='author' content='David Fernández Flores' />
            {/* <meta name='robots' content='index, follow' /> */}

            <meta property='og:title' content='Poke App' />
            <meta property='og:description' content='Poke App' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://poke-app.netlify.app' />
            <meta property='og:site_name' content='Poke App' />
            <meta property='og:locale' content='es_ES' />
            <meta property='og:image' content='https://poke-app.netlify.app/assets/img/poke-app-logo.png' />
            <meta property='og:image:secure_url' content='https://poke-app.netlify.app/assets/img/poke-app-logo.png' />
            <meta property='og:image:alt' content='Poke App' />
            <meta property='og:image:type' content='image/png' />
            <meta property='og:image:width' content='512' />
            <meta property='og:image:height' content='512' />
        </Helmet>
    )
}
