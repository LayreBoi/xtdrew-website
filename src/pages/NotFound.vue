<template>
  <xtdrew-error>
    <p>
      An error has occured when xtdrew was trying to find the page you're
      looking for and returned the status of 404. This website is very new and
      I'll design the 404 page l8r.
      {{
        ((rand) => {
          return rand[Math.floor(Math.random() * rand.length)];
        })([
          "Anyways, umm, how are you today?",
          "I wonder how Gemashy is doing...",
          "Are you trying to predict the future or something?",
          "Hehehehehehe...",
          "*yaaawn*",
          "Well this is kinda... a random moment.",
          "Have we met each other yet?",
          "Did you check out LayreBoi yet?",
          "Huh, what an emptiness...",
          "Meep.",
          "Would you like to hear some dad jokes?",
          ":trol:",
        ])
      }}
    </p>
  </xtdrew-error>
</template>

<style scoped lang="scss">
xtdrew-error {
  p {
    margin: {
      left: 10%;
      right: 10%;
    }
    @media screen and (max-width: 720px) {
      & {
        margin: {
          left: 5%;
          right: 5%;
        }
      }
    }
  }
}
</style>
