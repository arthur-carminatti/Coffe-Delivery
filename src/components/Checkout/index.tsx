import { FrameOne } from "./FrameOne";
import { FrameTwo } from "./FrameTwo";
import { CheckoutComponentContainer } from "./styles";

export function CheckoutComponent() {
    return (
        <CheckoutComponentContainer>
            <FrameOne />
            <FrameTwo />
        </CheckoutComponentContainer>
    )
}