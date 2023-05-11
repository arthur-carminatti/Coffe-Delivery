import logo from '../../assets/logo.svg'
import { CartContainter, HeaderContainer, LocationContainter } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <section>
                <LocationContainter>
                    <MapPin size={22} color='#4B2995' weight="fill" />
                    <p>Porto Alegre, RS</p>
                </LocationContainter>

                <CartContainter>
                    <ShoppingCart size={30} color="#C47F17" weight="fill" />
                </CartContainter>
            </section>
        </HeaderContainer>
    )
}