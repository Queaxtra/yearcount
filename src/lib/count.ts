export interface TimeUntilYearEnd {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function endYear(): TimeUntilYearEnd {
    const today = new Date();
    const yearEnd = new Date(today.getFullYear(), 11, 31, 23, 59, 59);
    const diffTime = yearEnd.getTime() - today.getTime();
    
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}