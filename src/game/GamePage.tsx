import { useNavigate } from 'react-router';
import { Button } from '../shared/components/Button'
import { Screen } from '../shared/components/Screen'

export const GamePage = () => {
    const naviate = useNavigate();
    return <Screen>
        <h1>Game Page</h1>
        <hr />

        <Button onClick={() => {
            naviate('/');
        }}>Ir pra home</Button>
    </Screen>
}