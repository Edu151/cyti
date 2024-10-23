<template>
  <q-page padding class="bg-light">
    <!-- Cabeçalho -->
    <q-header class="text-white bg-primary">
      <q-toolbar>
        <q-toolbar-title>
          Clínica Dra. Janaína
        </q-toolbar-title>
        <q-btn flat label="Home" @click="scrollToSection('home')" />
        <q-btn flat label="Serviços" @click="scrollToSection('services')" />
        <q-btn flat label="Contato" @click="scrollToSection('contact')" />
      </q-toolbar>
    </q-header>

    <!-- Carrossel de Imagens -->
    <q-img src="src/assets/111.jpg"/>
    <q-card class="q-my-md" >
      <q-card-section>
        <h4>Clique aqui e fale Conosco! atendimento imediato</h4>
        <div class="q-mt-md text-center">
          <q-btn
            color="green"
            icon="fab fa-whatsapp"
            label="Entre em contato via WhatsApp"
            @click="openWhatsApp"
          />
        </div>
      </q-card-section>
    </q-card>

    <!-- Seção de Serviços -->
    <div id="services" class="q-pa-md">
      <q-banner class="q-mb-md">
        <h2>Nossos Serviços</h2>
        <h5>
          Oferecemos uma ampla gama de serviços médicos personalizados para você.
        </h5>
      </q-banner>
      <q-card class="q-my-md" v-for="(service, index) in services" :key="index">
        <q-card-section>
          <h3>{{ service.name }}</h3>
          <h4>{{ service.description }}</h4>
          <div class="q-mt-md text-center">
            <q-btn
              color="green"
              icon="fab fa-whatsapp"
              label="Entre em contato via WhatsApp"
              @click="openWhatsApp"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Sobre a Clínica -->
    <div id="about" class="q-pa-md bg-grey-3">
      <h3>Sobre a Clínica</h3>
      <p>A Clínica Dra. Janaína oferece serviços de alta qualidade...</p>
    </div>

    <!-- Seção de Contato -->
    <div id="contact" class="q-pa-md">
      <h2>Contato</h2>
      <q-btn
        flat
        color="green"
        icon="fab fa-whatsapp"
        label="WhatsApp"
        @click="openWhatsApp"
      />
      <q-form @submit="submitContact">
        <q-input v-model="form.name" label="Nome" filled /><br>
        <q-input v-model="form.email" label="Email" filled type="email" /><br>
        <q-input v-model="form.message" label="Mensagem" filled type="textarea" /><br>
        <q-btn label="Enviar" type="submit" color="green" />
      </q-form>

      <!-- Botão de WhatsApp -->

    </div>

    <!-- Rodapé -->
    <q-footer class="text-center bg-dark text-white q-pa-md">
      <div>
        <span>&copy; 2023 Clínica Dra. Janaína - Todos os direitos reservados</span>
      </div>
      <q-btn
        flat
        color="green"
        icon="fab fa-whatsapp"
        label="WhatsApp"
        @click="openWhatsApp"
      />
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      images: [
        'https://via.placeholder.com/1200x400?text=Imagem+1',
        'https://via.placeholder.com/1200x400?text=Imagem+2',
        'https://via.placeholder.com/1200x400?text=Imagem+3',
      ],
      services: [
        { name: 'Gravidez indesejada', description: 'Pare agora sua Gravidez.' },
        { name: 'Exames Clínicos', description: 'Exames clínicos de última geração.' },
        { name: 'Cirurgias Ambulatoriais', description: 'Procedimentos cirúrgicos com segurança.' },
      ],
      form: {
        name: '',
        email: '',
        message: '',
      }
    }
  },
  methods: {
    scrollToSection(section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    submitContact() {
      // Lógica para envio do formulário
      alert('Mensagem enviada com sucesso!');
    },
    openWhatsApp() {
      const phoneNumber = '5562996109765'; // Substitua pelo número da clínica
      const message = encodeURIComponent('Olá, gostaria de mais informações sobre os serviços (cytotec).');
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(url, '_blank');
    }
  }
}
</script>

<style>
.bg-light {
  background-color: #f9f9f9;
}

.bg-primary {
  background-color: #007bff;
}

.bg-grey-3 {
  background-color: #e0e0e0;
}

.bg-dark {
  background-color: #343a40;
}

.text-center {
  text-align: center;
}
</style>
