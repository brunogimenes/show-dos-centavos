type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button className="bg-slate-600 text-white rounded-full px-4 py-2" {...props} />
}