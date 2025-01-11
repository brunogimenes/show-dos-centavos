import { useNavigate } from 'react-router';
import { Button } from '../shared/components/Button';
import { Screen } from '../shared/components/Screen';

export const HomePage = () => {

    const navigate = useNavigate();

    return <Screen>
        <div className="text-center">
            <h1 className="text-gray-900 text-2xl text-center">Show dos Centavos</h1>
            <hr className="my-4" />
            <Button onClick={() => {
                console.log('Iniciar');
                // navegue para a tela do jogo
                navigate('/game');
            }}>
                Iniciar
            </Button>
        </div>
    </Screen>
}