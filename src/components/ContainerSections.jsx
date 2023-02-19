
import { Section } from './Section'

export const ContainerSections = () => {

    const About = { 
        "Sunflower": {
            "img_src": "https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "content": {
                "Descrição": "É caracterizada por possuir grandes inflorescências do tipo capítulo com aproximadamente 30 cm de diâmetro cujo caule pode atingir até 3 metros de altura e apresenta filotaxia do tipo oposta cruzada. O girassol mais alto já registrado chegou a 9.17 metros.",

                "História": "Os girassóis são plantas originárias da América do Norte cultivada pelos povos indígenas para alimentação, foram domesticadas por volta do ano 1 000 a.C. Francisco Pizarro encontrou diversos objetos incas e imagens moldadas em ouro que fazem referência aos girassóis como seu deus do Sol.",

                "Utilização": "Dos seus frutos, popularmente chamados sementes, é extraído o óleo de girassol que é comestível. A produção mundial ultrapassa 20 milhões de toneladas anuais de grão. A semente também é usada na alimentação de pássaros em cativeiro além de ser uma das mais utilizadas na alimentação viva."
            }
        },

        "Cats": {
            "img_src": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "content": {
                "História": "Os gatos, assim como todos os felinos, originaram-se da evolução de Miacis, um mamífero predador, que habitou a Terra no Paleoceno, há aproximadamente 55 milhões de anos, época em que surgiram os mais antigos mamíferos carnívoros.",

                "Domesticação": "Os gatos domésticos atuais são uma adaptação evolutiva dos gatos-bravo, com cruzamentos entre diferentes espécimes os tornaram menores e menos agressivos aos humanos. A primeira indicação conhecida à domesticação de um gato-selvagem-africano (F. lybica) foi escavada perto de uma sepultura neolítica humana em Silurocambo, ao sul de Chipre, datando de cerca de 7 500–7 200 a.C.",

                "Descrição": "O gato doméstico tem crânio menor e ossos mais curtos do que o gato-bravo. Tem em média cerca de 46 centímetros (18 polegadas) de comprimento da cabeça ao corpo e 23–25 centímetros (9–10 polegadas) de altura, com cerca de 30 centímetros (12 polegadas) de cauda. Os machos são maiores que as fêmeas."
            },

        },

        "Pipa": {
            "img_src": "https://images.pexels.com/photos/8576384/pexels-photo-8576384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "content": {
                "História": "As pipas nasceram na China antiga. Sabe-se que por volta do ano 1 200 a.C. foram utilizadas como dispositivo de sinalização militar. Os movimentos e as cores das pipas eram mensagens transmitidas à distância entre destacamentos militares.",

                "Cerol": "O cerol é uma mistura cortante de pó de vidro e cola de madeira utilizado na linha da pipa com o objetivo de cortar a linha de outra pipa oponente. Acidentes fatais relacionado com o cerol ocorrem em áreas onde existe a prática com aeronaves, pedestres, ciclistas, motociclistas e paraquedistas que eventualmente tenham contato com a linha.",
                
                "Outras designações": "No Brasil cafifa, papagaio, quadrado, piposa, pandorga (no Rio Grande do Sul e Santa Catarina), arraia ou pepeta (em estados como Acre e Amazonas).",
            }
        },

        "Duendes": {
            "img_src": "https://images.pexels.com/photos/7080417/pexels-photo-7080417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "content": {
                "Sobre": "Um duende é uma criatura do folclore latino-europeu, latino-americano e filipino. O termo espanhol 'duende' originou-se como uma contração da expressão 'dueño de casa' ou 'duen de la casa', que significa 'dono de casa', e foi originalmente conceituado como um espírito travesso que habita uma casa.",

                "Origem": "Sua origem exata é desconhecida, mas as criaturas mais antigas parecidas com os duendes são os goblins, que surgiram junto com elfos e outros seres de lendas das mitologias europeias. As primeiras histórias com a criatura são antigas, mas ele só recebeu esse nome no século XIII, quando a palavra 'duende' passou a incluir-se no vocabulário espanhol.",

                "Poderes mágicos": "Duendes segundo lendas, possuem poderes sobrenaturais, desafiando as leis naturais da física, como: atravessar paredes, se locomover em alta velocidade e até se teletransportar de um lugar para o outro.",
            }
        }
    }

    const AboutValues = Object.values(About)

    return (
        <main>
            {
                AboutValues.map( (value, index) => (
                    <Section key={index} img_src={value.img_src} content={value.content}/>
                ))
            }
        </main>
    )
}