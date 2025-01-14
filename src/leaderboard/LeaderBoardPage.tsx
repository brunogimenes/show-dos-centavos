import { useEffect, useState } from "react"
import { Button } from "../shared/components/Button"
import { ScreenLayout } from "../shared/components/ScreenLayout"
import { LeaderBoardService } from "./services/leaderboard-service"
import { LeaderBoardItemModel } from "./models/leaderboard.model"
import { useGetAmount } from "../shared/hooks/use-get-amount"
import { useNavigate } from "react-router"

export const LeaderBoardPage = () => {
    const navigate = useNavigate();
    const [leaderboards, setLeaderboards] = useState<LeaderBoardItemModel[]>([]);
    const [nameText, setNameText] = useState('');
    const [hasAlreadySent, sethasAlreadySent] = useState(false);
    const amount = useGetAmount();


    const fetchData = () => {
        const leaderboards = LeaderBoardService.getAll();
        setLeaderboards(leaderboards.sort((a, b) => b.amount - a.amount));
    }

    useEffect(fetchData, []);

    const onSave = () => {

        if (!nameText.trim()) {
            return;
        }

        LeaderBoardService.saveResult({
            name: nameText,
            amount
        });

        sethasAlreadySent(true);
        fetchData();
        navigate('/leaderboard', {
            state: {

            }
        })
    }

    return <ScreenLayout>
        <div className="flex flex-col h-full text-center">
            <h1 className="text-4xl mb-8">
                Os melhores!!!!
            </h1>
            {!hasAlreadySent && amount > 0 && <div className="flex flex-row items-center gap-2 p-4">
                <input
                    value={nameText}
                    onChange={e => setNameText(e.target.value)}
                    className="flex-1 border p-2 rounded" placeholder="Digite um nome" />
                <Button onClick={onSave} >Enviar</Button>
            </div>}
            <div className="flex-1 overflow-y-auto">
                <ul>
                    {leaderboards.map((item, index) =>
                        <li
                            key={`leaderboard-item-${index}`}
                            className="flex justify-between p-2 border-b">
                            <span>{item.name}</span>
                            <span>{item.amount} centavos</span>
                        </li>)}
                </ul>
                {!leaderboards.length && <div className="flex flex-col justify-center h-full items-center">
                    <h2 className="4xl m-4">
                        Caraio, ninguem jogou ainda 😢
                    </h2>
                </div>}
            </div>
        </div>
    </ScreenLayout>
}