<script setup>
import { ref } from 'vue';

const homeTeamName = ref(null);
const homeTeamLogo = ref(null);
const awayTeamName = ref(null);
const awayTeamLogo = ref(null);
const gameDate = ref(null);

const countdownDays = ref(null);
const countdownHours = ref(null);
const countdownMinutes = ref(null);
const countdownSeconds = ref(null);

/**
 * Async. fetches data for the next football game (w. specific team, league and season).
 * Updates ref variables (logo, name and date).
 * Calls SetupCountdown function.
 */
async function GetData() {
    const response = await fetch("https://proxy.binau.dev/api/proxy/football/fixtures?league=120&season=2024&team=405&next=1", {
        method: "GET",
        headers: {
            "x-apisports-key": "10c1dce6b1c7f7e049a53bdbc7f8d164",
        },
    })
    const result = await response.json();

    // Updates Game Info
    const gameObject = result.response[0];

    homeTeamName.value = gameObject.teams.home.name; // Changes the variables value - finds name in object
    homeTeamLogo.value = gameObject.teams.home.logo;

    awayTeamName.value = gameObject.teams.away.name;
    awayTeamLogo.value = gameObject.teams.away.logo;

    gameDate.value = new Date(gameObject.fixture.date);

    SetupCountdown(); // Calls SetupCountdown() when data has been fetched and placed
}
GetData();

/**
 * Sets an interval that runs every second.
 * Interval calculates and updates the countdown.
 */
function SetupCountdown() {
    setInterval(() => {
        const todaysDate = new Date().getTime(); // Get and keep the current date
        const distanceBetween = gameDate.value.getTime() - todaysDate; // FInd the distance between now and the game date

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distanceBetween / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distanceBetween % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distanceBetween % (1000 * 60)) / 1000);

        // Update info in variables
        countdownDays.value = days;
        countdownHours.value = hours;
        countdownMinutes.value = minutes;
        countdownSeconds.value = seconds;
    }, 1000)
}
</script>

<template>
    <div id="countdown-content">
        <h2 class="white-color"> Næste Herre Kamp </h2>
        <div id="teams-info">
            <div class="team">
                <img class="team-logo" :src="homeTeamLogo" alt="Team logo">
                <!-- : makes it possible to "grab" homeTeamLogo from script -->
                <p class="bold white-color"> {{ homeTeamName }} </p>
            </div>
            <div>
                <p class="bold white-color"> VS </p>
            </div>
            <div class="team">
                <img class="team-logo" :src="awayTeamLogo" alt="Team logo">
                <p class="bold white-color"> {{ awayTeamName }} </p>
            </div>
        </div>
        <p class="small white-color"> {{ new Intl.DateTimeFormat("da-DK", {
            dateStyle: "full",
            timeStyle: "short",
        }).format(gameDate) }} </p>
        <div id="countdown-time-section">
            <div class="countdown-single-num-name">
                <p class="countdown-numbers"> {{ countdownDays }} </p>
                <p class="white-color"> Dage </p>
            </div>
            <div class="countdown-single-num-name">
                <p class="countdown-numbers"> {{ countdownHours }} </p>
                <p class="white-color"> Timer </p>
            </div>
            <div class="countdown-single-num-name"> 
                <p class="countdown-numbers"> {{ countdownMinutes }} </p>
                <p class="white-color"> Minutter </p>
            </div>
            <div class="countdown-single-num-name">
                <p class="countdown-numbers"> {{ countdownSeconds }} </p>
                <p class="white-color"> Sekunder </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/style/base' as *;

p.countdown-numbers {
    font-family: $arsenal;
    font-size: 26px;
    font-weight: 700;
    color: $secondary-text;
}

#countdown-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0px;
    gap: 22px;

    border-radius: 10px;
    background-color: $primary;
}

#teams-info {
    display: flex;
    align-items: center;
    gap: 45px;
}

.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.team-logo {
    max-width: 70px;
    width: 100%;
}

#countdown-time-section {
    display: flex;
    align-items: center;
    gap: 22px;
}

.countdown-single-num-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
</style>