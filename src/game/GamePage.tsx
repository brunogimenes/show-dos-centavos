
import { Button } from '../shared/components/Button'
import { Screen } from '../shared/components/Screen'

export const GamePage = () => {

    return <Screen>
        <div className="flex flex-col h-full items-center">
            <div className="text-xs font-bold bg-gray-200  p-2 rounded-full">
                Valendo 10 centavos
            </div>
            <div className="font-bold mt-3">
                Qual é o principal objetivo do React, uma das bibliotecas mais usadas no desenvolvimento web?
            </div>
            <div className="flex-1 py-5 flex flex-col justify-center">
                <div className="bg-slate-200 m-2 p-2 rounded-md">Gerenciar o estado de uma aplicação web de forma eficiente.</div>
                <div className="bg-slate-200 m-2 p-2 rounded-md">Criar animações e efeitos visuais avançados.</div>
                <div className="bg-slate-200 m-2 p-2 rounded-md">Desenvolver aplicações mobile nativas.</div>
                <div className="bg-slate-200 m-2 p-2 rounded-md">Construir interfaces de usuário de forma declarativa e baseada em componentes. (Resposta correta)</div>
            </div>
            <div className="flex justify-around w-full">
                <Button variant='secondary'>
                    Pular
                </Button>
                <Button>
                    Responder
                </Button>
            </div>
        </div>
    </Screen>
}