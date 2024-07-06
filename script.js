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
    let deepSleepScore = 0;
    if (deepSleep >= 96 && deepSleep <= 144) {
        deepSleepScore = 30;
    } else if (deepSleep < 96) {
        deepSleepScore = (deepSleep / 96) * 30;
    }

    // Light Sleep (out of 20 points)
    const idealLightSleep = 300;
    let lightSleepScore = (lightSleep / idealLightSleep) * 20;
    if (lightSleepScore > 20) lightSleepScore = 20;

    // Awakenings (out of 10 points)
    let awakeningsScore = 10;
    if (awakenings > 0) awakeningsScore = 0;

    // Total Sleep Score
    const totalScore = totalSleepScore + deepSleepScore + lightSleepScore + awakeningsScore;
    document.getElementById('result').innerText = `Your sleep score is: ${totalScore.toFixed(1)} out of 100`;
}
