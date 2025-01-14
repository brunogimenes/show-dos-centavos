import { useLocation } from "react-router";

export const useGetAmount = () => {
    const location = useLocation();
    const amount = location.state?.amount ?? 0;
    return amount;
}