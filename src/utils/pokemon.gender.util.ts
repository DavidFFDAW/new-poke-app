export function getGenderPercentages(genderRate: number): { female: string, male: string } {
    if (genderRate === -1) {
        return {
            female: "Sin género",
            male: "Sin género"
        };
    }

    const femalePercentage = genderRate * 12.5;
    const malePercentage = 100 - femalePercentage;

    return {
        female: `${femalePercentage.toFixed(2)}%`,
        male: `${malePercentage.toFixed(2)}%`
    };
}