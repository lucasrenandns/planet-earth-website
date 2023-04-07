import { FormacaoSection,
CenterText,
CenterH2,
CenterH3,
FormacaoContainer,
Paragraph } from "./styled";

export default function formação() {
    return(
        <FormacaoSection id="formacao">
            <CenterText>
                <CenterH2>Formação</CenterH2>
                <CenterH3>Estima-se que nosso planeta tenha sido formado há, mais ou menos, 4,6 bilhões de anos.</CenterH3>
            </CenterText>

            <FormacaoContainer>
                <Paragraph>A formação do Sistema Solar foi resultado de um colapso entre grandes estrelas, o que gerou uma grande junção de energia. Essa energia, posteriormente, formou os componentes do sistema, como o Sol e demais planetas. A Terra, há 4,6 bilhões de anos, era uma massa de matéria magmática que, ao longo de milhões de anos, resfriou-se. Esse resfriamento deu origem a uma camada rochosa, a camada litosférica. Esse período é chamado de Era Pré-cambriana.</Paragraph>
            </FormacaoContainer>
        </FormacaoSection>
    )
}