<template>
  <q-page>
    <q-form @submit="saveSettings">
      <q-input v-model="settings.color" label="Cor do Tema" />
      <q-input v-model="settings.backgroundImage" label="URL da Imagem de Fundo" />
      <q-btn type="submit" label="Salvar" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['settings'])
  },
  methods: {
    ...mapActions(['updateSettings']),
    saveSettings() {
      this.updateSettings(this.settings);
      this.$q.notify({
        type: 'positive',
        message: 'Configurações salvas com sucesso!'
      });
    }
  }
}
</script>
