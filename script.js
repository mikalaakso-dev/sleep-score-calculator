function calculateScore() {
    const totalSleepHours = parseInt(document.getElementById('totalSleepHours').value);
    const totalSleepMinutes = parseInt(document.getElementById('totalSleepMinutes').value);
    const deepSleepHours = parseInt(document.getElementById('deepSleepHours').value);
    const deepSleepMinutes = parseInt(document.getElementById('deepSleepMinutes').value);
    const lightSleepHours = parseInt(document.getElementById('lightSleepHours').value);
    const lightSleepMinutes = parseInt(document.getElementById('lightSleepMinutes').value);
    const awakenings = parseInt(document.getElementById('awakenings').value);

    const totalSleep = (totalSleepHours * 60) + totalSleepMinutes;
    const deepSleep = (deepSleepHours * 60) + deepSleepMinutes;
    const lightSleep = (lightSleepHours * 60) + lightSleepMinutes;

    // Total Duration of Sleep (out of 40 points)
    const idealTotalSleep = 480;
    let totalSleepScore = (totalSleep / idealTotalSleep) * 40;
    if (totalSleepScore > 40) totalSleepScore = 40;

    // Deep Sleep (out of 30 points)
    const idealDeepSleepMin = 96;
    const idealDeepSleepMax = 144;
    let deepSleepScore = 0;
    if (deepSleep >= idealDeepSleepMin && deepSleep <= idealDeepSleepMax) {
        deepSleepScore = 30;
    } else if (deepSleep < idealDeepSleepMin) {
        deepSleepScore = (deepSleep / idealDeepSleepMin) * 30;
    } else {
        deepSleepScore = 30;  // Cap at 30 if it's above the ideal range
    }

    // Light Sleep (out of 20 points)
    const idealLightSleep = 300;  // Average of 50-60% of 8 hours (240 to 288 minutes)
    let lightSleepScore = (lightSleep / idealLightSleep) * 20;
    if (lightSleepScore > 20) lightSleepScore = 20;

    // Awakenings (out of 10 points)
    let awakeningsScore = 10;
    if (awakenings > 0) awakeningsScore = 8;  // Slight reduction for one awakening

    // Total Sleep Score
    const totalScore = totalSleepScore + deepSleepScore + lightSleepScore + awakeningsScore;
    document.getElementById('result').innerText = `Your sleep score is: ${totalScore.toFixed(1)} out of 100`;
}
