interface PastNewYear {
    year: number;
    date: Date;
    daysAgo: number;
}

export function getPastNewYears(limit?: number): PastNewYear[] {
    const today = new Date();
    const currentYear = today.getFullYear();
    const pastNewYears: PastNewYear[] = [];
    const startYear = 1900;

    for (let year = currentYear - 1; year >= startYear; year--) {
        const newYearDate = new Date(year, 11, 31, 23, 59, 59);
        const diffTime = today.getTime() - newYearDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        pastNewYears.push({
            year: year,
            date: newYearDate,
            daysAgo: diffDays
        });

        if (limit && pastNewYears.length >= limit) break;
    }

    return pastNewYears;
}