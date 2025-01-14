import { useNavigate } from "react-router";
import { Button } from "../shared/components/Button";
import { ScreenLayout } from "../shared/components/ScreenLayout"
import { useGetAmount } from "../shared/hooks/use-get-amount";

export const GameOverPage = () => {
    const navigate = useNavigate();
    const amount = useGetAmount();

    const onContinue = () => {
        navigate('/leaderboard', {
            state: {
                amount
            }
        });
    }

    return (
        <ScreenLayout className="text-center">
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-4xl">Acabooooou!!!</h1>
                <hr className="my-6" />
                <p>Você ganhou {amount} centavos!!</p>
                <hr className="my-6" />

                <img src="https://media.tenor.com/-OATBuvUe60AAAAM/money-sniff.gif" />
            </div>
            <Button onClick={onContinue}>
                Continuar
            </Button>
        </ScreenLayout>
    );
}