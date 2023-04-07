import { CamadasSection,
CenterText,
CenterTextH2,
CenterTextH3,
CamadasContainer,
Box,
Paragraph } from "./styled";

export default function camadas() {
    return(
        <CamadasSection id="camadas">
            <CenterText>
                <CenterTextH2>Camadas da Terra</CenterTextH2>
                <CenterTextH3>As camadas da Terra são a crosta terrestre, o manto e o núcleo</CenterTextH3>
            </CenterText>

            <CamadasContainer>
                <Box>
                    <h4>Crosta</h4>
                    <Paragraph>A crosta, a casca externa do planeta, é a camada superficial, podendo ser chamada de litosfera. É nessa camada que estamos, que se localizam relevos, oceanos, mares, rios, biosfera, e outros. Para os seres humanos, é a camada em que há o desenvolvimento da vida. Para ter-se uma ideia, a espessura da crosta pode variar de 5 km a 70 km. Mesmo com esse tamanho, ela é só a “casca” do planeta, o que revela a imensidão dele.</Paragraph>
                </Box>

                <Box>
                    <h4>Manto</h4>
                    <Paragraph>O manto está situado a uma profundidade que pode variar de 70 km a 2900 km. Nessa grande área, está localizado o magma, uma camada viscosa que envolve o núcleo e é responsável pela movimentação das placas tectônicas, situadas na litosfera. Na passagem da crosta para o manto, a velocidade das ondas sísmicas primárias sofre brusca elevação.</Paragraph>
                </Box>

                <Box>
                    <h4>Núcleo</h4>
                    <Paragraph>O núcleo é a camada mais profunda do planeta, chegando a 6700 km. O núcleo interno é sólido, com vários compostos minerais, entre eles níquel e ferro. Essa camada é responsável pelo campo magnético que existe ao redor do planeta. Já o núcleo externo é líquido, tendo uma espessura de, aproximadamente, 1600 km. A temperatura nessa região pode chegar a 6500 ºC.</Paragraph>
                </Box>
            </CamadasContainer>
        </CamadasSection>
    )
}