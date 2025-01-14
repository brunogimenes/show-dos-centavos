import { useNavigate } from 'react-router';
import { Button } from '../shared/components/Button';
import { ScreenLayout } from '../shared/components/ScreenLayout';

export const HomePage = () => {

    const navigate = useNavigate();

    return <ScreenLayout className="flex flex-col">
        <h1 className="text-gray-900 text-2xl text-center">Show dos Centavos</h1>
        <div className="text-center flex-1 flex flex-col justify-center items-center">
            <hr className="my-4" />
            <img src="https://i.pinimg.com/originals/e6/6c/0e/e66c0eb66aa2851c92a8a9773fa02fd8.gif" />
        </div>
        <div className="flex flex-col space-y-4">
            <Button
                variant="secondary"
                onClick={() => {
                    navigate('/leaderboard');
                }}>
                Leaderboard
            </Button>
            <Button onClick={() => {
                navigate('/game');
            }}>
                Iniciar
            </Button>
        </div>
    </ScreenLayout>
}