import { useCallback, useMemo } from 'react';

export const useCalculateAge = (dateOfBirth: number): number => {
    const calculateAge = useCallback((dateOfBirth: number) => {
        const today = new Date();
        const birthday = new Date(dateOfBirth);
        let age = today.getFullYear() - birthday.getFullYear();
        const m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
    }, []);
    return useMemo(() => calculateAge(dateOfBirth), [calculateAge, dateOfBirth]);
};
