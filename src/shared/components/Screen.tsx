type ScreenProps = {
    children: React.ReactNode;
}

export const Screen = (props: ScreenProps) => {
    const { children } = props;

    return <div className="my-4 p-4 w-96 bg-slate-100 mx-auto rounded-md h-[800px]">
        {children}
    </div>
}