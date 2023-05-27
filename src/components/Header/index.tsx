import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CartContainter, CartConterContainter, HeaderContainer, LocationContainter } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffesQuantityContext'

export function Header() {
    const { coffeQuantities } = useContext(CoffeContext)

    console.log(coffeQuantities)

    return (
        <HeaderContainer>
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
            </nav>

            <section>
                <LocationContainter>
                    <MapPin size={22} color='#4B2995' weight="fill" />
                    <p>Porto Alegre, RS</p>
                </LocationContainter>

                <CartContainter>
                    <nav>
                        <NavLink to="/checkout">
                            <ShoppingCart size={24} color="#C47F17" weight="fill" />
                            <CartConterContainter>
                                {/* <p>{coffeQuantities}</p> */}
                            </CartConterContainter>
                        </NavLink>
                    </nav>
                </CartContainter>
            </section>
        </HeaderContainer>
    )
}