import { Button } from '../shared/components/Button';
import { Screen } from '../shared/components/Screen';

export const HomePage = () => {
    return <Screen>
        <div className="text-center">
            <h1 className="text-gray-900 text-2xl text-center">Show dos Centavos</h1>
            <hr className="my-4" />
            <Button>
                Iniciar
            </Button>
        </div>
    </Screen>
}