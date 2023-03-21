import { EstruturaSection,
CenterText,
CenterH2,
CenterH3,
EstruturaContainer,
Box,
Paragraph } from "./styled";

export default function estrutura() {
    return(
        <EstruturaSection id="estrutura">
            <CenterText>
                <CenterH2>Estrutura externa da terra</CenterH2>
                <CenterH3>O que diz respeito à parte externa do planeta Terra, há também uma classificação de sua estrutura.</CenterH3>
            </CenterText>

            <EstruturaContainer>
                <Box>
                    <h4>Atmosfera</h4>
                    <Paragraph>Corresponde a uma camada gasosa que envolve todo o Planeta Terra. Ela é formada por gases mantidos pela gravidade, cuja principal função é proteger o planeta da radiação solar emitida, filtrando-a, além manter a temperatura média da Terra, fazendo com que não haja uma grande amplitude térmica.</Paragraph>
                </Box>

                <Box>
                    <h4>Hidrosfera</h4>
                    <Paragraph>A hidrosfera é de onde o ser humano retira recursos para sua sobrevivência, como água, alimento (peixes e crustáceos), recursos minerais marinhos (petróleo), além de usar os oceanos, mares e rios para o transporte de pessoas e/ou cargas.
                    </Paragraph>
                </Box>

                <Box>
                    <h4>Biosfera</h4>
                    <Paragraph>Corresponde ao conjunto de ecossistemas que compreendem a Terra. Basicamente, diz respeito aos grupos de seres vivos que a habitam. Esses ecossistemas encontram-se desde os pontos mais elevados do planeta até as partes do fundo oceânico.</Paragraph>
                </Box>
            </EstruturaContainer>
        </EstruturaSection>
    ) 
}