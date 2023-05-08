import globo_image from '../../assets/globo.png'
import { CuriosidadeSection,
CenterText,
CenterTextH2,
CenterTextH3,
CuriosidadeContainer,
LeftSide,
Image,
RightSide,
RightSideList,
List } from "./styled";

export default function curiosidade() {
    return(
        <CuriosidadeSection id="curiosidade">
            <CenterText>
                <CenterTextH2>Curiosidade</CenterTextH2>
                <CenterTextH3>Algumas curiosidades sobre o nosso planeta</CenterTextH3>
            </CenterText>

            <CuriosidadeContainer>
                <LeftSide>
                    <Image src={globo_image} alt='Globo image'/>
                </LeftSide>

                <RightSide>
                    <RightSideList>
                        <List>A Terra é o único planeta do Sistema Solar que não recebeu o nome de um deus. Os outros planetas — Mercúrio, Vênus, Marte, Júpiter, Saturno, Urano e Netuno — receberam nomes de deuses romanos.</List>

                        <List>A Terra é o único planeta do Sistema Solar em que a água pode ser encontrada nos três estados: sólido, líquido e gasoso.</List>

                        <List>Ocorrem terremotos a cada dois minutos no planeta.</List>

                        <List>Nosso planeta é chamado de Terra, mas 70% de sua superfície são cobertos de água: os oceanos.</List>
                    </RightSideList>
                </RightSide>
            </CuriosidadeContainer>
        </CuriosidadeSection>
    )
}