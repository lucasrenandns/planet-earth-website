import { Home,
HomeText,
Title,
Paragraph,
HomeImage,
Image } from "./styled"
import home_image from "../../assets/earth.png"
import { HashLink as Link } from "react-router-hash-link"

export default function home() {
   return(
    <Home id="home">
        <HomeText>
            <Title>Planeta terra</Title>
            <Paragraph>O Planeta Terra é um dos planetas que fazem parte do Sistema Solar e é o terceiro planeta mais próximo do Sol. A sua formação ocorreu há bilhões de anos, assim como a existência de vida aqui . Algumas teorias explicam sua origem, como a teoria da nebulosa solar.</Paragraph>
            <Link className="button" smooth to={'#sobre'}>Ver mais</Link>
        </HomeText>

        <HomeImage>
            <Image src={home_image} alt='Home image'/>
        </HomeImage>
    </Home>
   )
}