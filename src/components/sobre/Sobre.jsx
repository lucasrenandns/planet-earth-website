import { Sobre,
CenterText,
CenterH2,
CenterH3,
SobreContainer,
Paragraph } from "./styled";

export default function feature() {
    return(
        <Sobre id="sobre">
            <CenterText>
                <CenterH2>Característica</CenterH2>
                <CenterH3>Conhecido também como planeta água, é o maior dentre os quatro planetas rochosos que fazem parte do Sistema Solar.</CenterH3>
            </CenterText>

            <SobreContainer>
                <Paragraph>O Planeta Terra, também conhecido como mundo, planeta azul ou planeta água, tem cerca de 70% da sua superfície coberta por água. A existência dessa substância em seu estado líquido, juntamente à presença do oxigênio e a capacidade de reciclar gás carbônico fazem da Terra um planeta com características únicas. Apesar das grandes descobertas astronômicas, não há ainda como afirmar que exista um planeta com características tão peculiares capaz de propiciar a existência dos seres vivos. E a Terra não é “viva” apenas sob a ótica biológica, mas também sob a ótica atmosférica, geológica e física, uma vez que tudo isso está em constante transformação.</Paragraph>
            </SobreContainer>
        </Sobre>
    )
}