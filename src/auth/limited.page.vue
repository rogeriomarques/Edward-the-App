<template>
  <div class="wrap">
    <div class="warning">
      <h1>Welcome.</h1>
      <p>
        <strong>This is a limited account.</strong>
      </p>
      <p>
        Your data is stored on your computer, not on our servers. You won't be able to access it on multiple computers, and it will be deleted if you reinstall your browser, clear your browsing data, or wipe your hard drive.
      </p>
      <p>
        You can use your limited account for as long as you want and export as many documents as you want. A premium Author account costs $2.46 a month and includes permanent storage on our servers.
      </p>
    </div>
    <div class="fill"></div>
    <div class="actions">
      <button class="continue-button button-green" @click="noPremium()">
        Continue to the app
      </button>
      <button class="button-link" @click="goPremium()">
        Upgrade to an Author account
      </button>
    </div>
  </div>
</template>

<script>
import { goToApp } from './shared'

export default {
  components: {},
  computed: {},
  data () {
    return {}
  },
  methods: {
    goPremium () {
      this.$router.push('/premium')
    },
    noPremium () {
      goToApp()
    }
  },
  props: {}
}
</script>

<style scoped>
.wrap {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
}

.warning {
  padding: 0 50px;
}

.fill {
  flex: 1;
}

.actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px 0;
  width: 300px;
}

.continue-button {
  margin-bottom: 8px;
}
</style>
