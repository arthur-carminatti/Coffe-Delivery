import { createContext, useState, ReactNode} from "react";

interface CoffeContextType {
    coffeQuantities: any,
    setCoffeQuantities: (id: any) => void
}

export const CoffeContext = createContext({} as CoffeContextType)

interface CoffesContextProviderProos {
    children: ReactNode
}

export function CoffeContextProvider({ children }: CoffesContextProviderProos) {
    const [coffeQuantities, setCoffeQuantities] = useState<{ [id: string]: number }>({})

    return (
        <CoffeContext.Provider
            value={{
                coffeQuantities,
                setCoffeQuantities
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}