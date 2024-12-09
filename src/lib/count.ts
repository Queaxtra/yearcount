export interface TimeUntilYearEnd {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function endYear(): TimeUntilYearEnd {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const yearEnd = new Date(nextYear, 0, 1, 0, 0, 0);
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