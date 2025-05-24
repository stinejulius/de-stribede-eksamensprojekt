<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    gender: {
        type: String,
        required: true,
    },
    league: {
        type: Number,
        required: true,
    },
    season: {
        type: Number,
        required: true,
    },
    team: {
        type: Number,
        required: true,
    },
})

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
    const response = await fetch(`https://proxy.binau.dev/api/proxy/football/fixtures?league=${props.league}&season=${props.season}&team=${props.team}&next=1`, {
        method: "GET",
        headers: {
            "x-apisports-key": "10c1dce6b1c7f7e049a53bdbc7f8d164",
        },
    })
    const result = await response.json();

    // Updates Game Info
    const gameObject = result.response[0];

    // If no match was found, function stops here
    if (gameObject === undefined) {
        countdownDays.value = 'X';
        countdownHours.value = 'X';
        countdownMinutes.value = 'X';
        countdownSeconds.value = 'X';
        awayTeamName.value = 'Ukendt'
        homeTeamName.value = 'Ukendt'
        return;
    }

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

// Formats GameDate, to either "Ingen kommende match" or Using Intl.DateTimeFormat on the real match date.
// Will automatically update, when gameDate updates. Because it's a computed ref.
const formattedGameDate = computed(() => {
    if (gameDate.value === null) {
        return 'Ingen kommende match';
    }

    return new Intl.DateTimeFormat("da-DK", {
        dateStyle: "full",
        timeStyle: "short",
    }).format(gameDate.value);
})
</script>

<template>
    <div id="countdown-content">
        <h2 class="white-color"> Næste {{ gender }} Kamp </h2>
        <div id="teams-info">
            <div class="team">
                <img v-if="homeTeamLogo" class="team-logo" :src="homeTeamLogo" alt="Team logo">
                <!-- : makes it possible to "grab" homeTeamLogo from script -->
                <p class="bold white-color"> {{ homeTeamName }} </p>
            </div>
            <div>
                <p class="bold white-color"> VS </p>
            </div>
            <div class="team">
                <img v-if="awayTeamLogo" class="team-logo" :src="awayTeamLogo" alt="Team logo">
                <p class="bold white-color"> {{ awayTeamName }} </p>
            </div>
        </div>
        <p class="small white-color"> {{ formattedGameDate }} </p>
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
    width: 100%;
    justify-content: space-evenly;
}

.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 120px;
    height: 100px;
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