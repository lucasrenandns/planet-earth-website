import { HashLink as Link } from "react-router-hash-link"
import home_image from "../../assets/earth.jpg"

import { Home,
HomeText,
Title,
Paragraph,
Button,
HomeImage,
Image } from "./styled"

export default function home() {
   return(
    <Home id="home">
        <HomeText>
            <Title>Planeta terra</Title>
            <Paragraph>O Planeta Terra é um dos planetas que fazem parte do Sistema Solar e é o terceiro planeta mais próximo do Sol. A sua formação ocorreu há bilhões de anos, assim como a existência de vida aqui . Algumas teorias explicam sua origem, como a teoria da nebulosa solar.</Paragraph>
            <Link smooth to={'#sobre'}><Button>Ver mais</Button></Link>
        </HomeText>

        <HomeImage>
            <Image src={home_image}></Image>
        </HomeImage>
    </Home>
   )
}