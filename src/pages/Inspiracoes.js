import Banner from '../components/Banner'
import CardFounders from '../components/CardFounders'

const founders = [
    {
      'name': 'Maria Luiza',
      'role': 'Estagiária de Engenharia',
      'avatar': '/img/inspiracoes-fotomaria.png',
      'social_icons': {
        'face': '',
        'twitter': 'https://twitter.com/mlstellet',
        'linkedin': 'https://www.linkedin.com/in/mlstellet/',
        'insta': ''
      }
    },
    {
      'name': 'Amanda Maria',
      'role': 'Estagiária de Engenharia',
      'avatar': '/img/inspiracoes-fotoamanda.png',
      'social_icons': {
        'face': '',
        'twitter': '',
        'linkedin': '',
        'insta': ''
      }
    },
    {
      'name': 'Tais Bruno',
      'role': 'Estagiária de Engenharia',
      'avatar': '/img/inspiracoes-fototais.png',
      'social_icons': {
        'face': 'https://www.facebook.com/tais.bruno1',
        'twitter': 'https://twitter.com/taisbruno',
        'linkedin': 'https://www.linkedin.com/in/taisbruno',
        'insta': 'https://www.instagram.com/taisbruno/'
      }
    },
    {
      'name': 'Khiara Shantala',
      'role': 'Estagiária de Engenharia',
      'avatar': '/img/inspiracoes-fotokhiara.png',
      'social_icons': {
        'face': 'https://facebook.com/khiara00',
        'twitter': 'https://twitter.com/KhiaraShantala',
        'linkedin': 'https://www.linkedin.com/in/khiara-shantala-oliveira-faria-91710a197',
        'insta': 'https://www.instagram.com/khiara.shantala/'
      }
    }
  ]

function Inspiracoes() {
    return (
      <>
        <Banner subtitle="Inspirações" url="/img/inspiracoes-banner.png" pharase="Conheça um pouco sobre a história dessas pessoas incríveis que fizeram e fazem carreira no mundo da computação."/>

        {founders.map((founder) => (
            <CardFounders
              key={founder.name}
              name={founder.name}
              role={founder.role}
              avatar={founder.avatar}
              social_icons={founder.social_icons}
            />
        ))}
      </>
    )
}

export default Inspiracoes