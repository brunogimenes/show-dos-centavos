type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

export const Button = (props: ButtonProps) => {
    const { variant = 'primary' } = props;
    const bgcolor = variant === 'primary' ? 'bg-slate-600' : 'bg-slate-200';
    const textColor = variant === 'primary' ? 'text-white' : 'text-slate-600';

    const classNames = `rounded-full px-4 py-2 ${bgcolor} ${textColor}`;

    return <button className={classNames} {...props} />
}