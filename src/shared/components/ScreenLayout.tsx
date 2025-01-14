
type ScreenLayoutProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const ScreenLayout = (props: ScreenLayoutProps) => {
    const allClasses = `my-4 p-4 w-96 bg-slate-100 mx-auto rounded-md h-[800px] ${props.className ?? ''}`

    return <div
        {...props}
        className={allClasses}
    />
}