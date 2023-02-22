<template>
  <div class="home">
    <!-- Portfolio -->
    <section class="portfolio">
      <img alt="decoration background" src="/imgs/back/wish.svg" class="background" style="top:25%;left:35%">
      <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:30%;left:5%">
      <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:70%;left:90%">
      <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:20%;left:90%">
      <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:50%;left:10%">
      <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:75%;left:5%">
      <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:55%;left:85%">
      <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:0%;left:68%">
      <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:10%;left:15%">
      <img alt="decoration background" src="/imgs/back/space5.svg" class="background" style="top:76%;left:42%">
      <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:77%;left:20%">
      <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:22%;left:60%">
      <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:45%;left:45%">
      <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:42%;left:90%">
      <img alt="decoration background" src="/imgs/back/wish.svg" class="background"
        style="top:60%;left:32%;transform:rotate(180deg)">
      <div class="container">
        <h1>My Portfolio</h1>
        <div class="row justify-content-center">
          <div v-for="project in portfolio" :key="project._id" class="col-lg-4 col-md-6 col-12 contdiv" data-aos="fade-up"
            data-aos-duration="1000">
            <div class="project">
              <img alt="project thumbnail" :src="project.thumb">
              <div class="overlay" @click="openProject(project.url, project._id)">
                <i class="fas fa-external-link-alt" />
              </div>
              <div class="caption">
                <h4>{{ project.name }}</h4>
                <div class="langs">
                  <div v-for="lang in project.langs" :key="lang" class="img" :title="lang">
                    <img v-if="lang != 'HTML'" :src="`/imgs/skills-icons/${lang.toLowerCase()}.svg`" alt="skill-used" />
                    <img v-else :src="`/imgs/skills-icons/${lang.toLowerCase()}.png`" alt="skill-used" />
                  </div>
                </div>
                <!-- <p>{{ project.langs | formatLangs }}</p> -->
              </div>
              <div class="views">
                <i class="fas fa-eye"></i> {{ project.views }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact -->
    <section class="contact">
      <div class="decoration1"></div>
      <div class="overlay">
        <div class="container">
          <h1>Get In Touch</h1>
          <div class="row">
            <div class="col-md-5">
              <div class="info">
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
                <div class="way">
                  <h4>Mail Me</h4>
                  <i class="fas fa-at" />
                  <span>7assan.3li1998@gmail.com</span>
                </div>
                <div class="way">
                  <h4>Call Me</h4>
                  <i class="fas fa-phone" />
                  <span>+201146321817</span>
                </div>
                <div class="icons">
                  <i class="fab fa-facebook-f" @click="open('https://www.facebook.com/hassan2231998')" />
                  <i class="fab fa-twitter" @click="open('https://www.facebook.com/hassan2231998')" />
                  <i class="fab fa-linkedin-in" @click="open('https://www.linkedin.com/in/hassan1998/')" />
                  <i class="fab fa-github-alt" @click="open('https://github.com/Hassan-98')" />
                </div>
              </div>
            </div>
            <div class="col-md-7 col-12">
              <div class="form">
                <input v-model="name" type="text" placeholder="Full Name" />
                <input v-model="email" type="email" placeholder="Email Address" />
                <textarea v-model="message" cols="30" rows="7" placeholder="Type your message..." />
                <button @click="sendMsg">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="decoration2"></div>
    </section>
  </div>
</template>

<style lang="scss">
img.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  opacity: var(--decoration-opacity);
}

.portfolio {
  padding: 100px 0;
  position: relative;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Piedra", cursive;
    position: relative;
    margin-bottom: 100px;

    &::after {
      content: "PORTFOLIO";
      opacity: 0.1;
      font-size: 100px;
      width: 100%;
      text-align: center;
      display: block;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      letter-spacing: 10px;

      @include md {
        font-size: 75px;
        top: -20px;
      }

      @include sm {
        font-size: 45px;
        top: -5px;
      }
    }
  }

  .contdiv {
    &:nth-of-type(even) {
      .overlay {
        transform: translateX(-600px);
      }
    }

    &:nth-of-type(odd) {
      .overlay {
        transform: translateX(600px);
      }
    }
  }

  .project {
    box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.3);
    position: relative;
    margin-bottom: 35px;
    overflow: hidden;
    height: 550px;

    @include xs {
      height: 500px;
    }

    &>img {
      border: 5px solid #fff;
      position: relative;
      z-index: 10;
      height: 100%;
      width: 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #3A3C41, $alpha: 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 11;

      i {
        font-size: 40px;
        color: #fff;
      }
    }

    .views {
      position: absolute;
      top: 15px;
      left: -70px;
      display: block;
      width: fit-content;
      margin: 0 auto 15px;
      padding: 2px 10px 0;
      border-radius: 5px;
      background: rgba($color: #000000, $alpha: 0.7);
      color: #ccc;
      z-index: 12;

      i {
        font-size: 16px;
        color: #ccc;
      }
    }

    .caption {
      position: absolute;
      bottom: -100px;
      left: 0;
      z-index: 9;
      width: 100%;
      box-shadow: inset 0 5px 10px rgba($color: #000000, $alpha: 0.2);
      background: rgba($color: #FFB400, $alpha: 0.85);
      border-bottom: 5px solid #aaa;

      h4 {
        text-align: center;
        padding: 15px 0 10px;
        font-weight: bold;
        margin-bottom: 0;
        color: #3A3C41;
        font-family: "Piedra", cursive;
        letter-spacing: 2px;
      }

      .langs {
        margin: 0;
        padding-bottom: 15px;
        text-align: center;
        color: #3a3c41;
        display: flex;
        justify-content: center;

        .img {
          width: 40px;
          height: 40px;
          margin: 0 5px;
          padding: 5px;
          border: 1px solid #f8c141;
          border-radius: 15px;
          background: #f8c141;
          box-shadow: inset 0 0 10px rgba($color: #000000, $alpha: 0.1);

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    &:hover {
      box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.3);

      .views {
        left: 15px;
        z-index: 99;
      }

      .caption {
        bottom: 0px;
        z-index: 99;
      }

      .overlay {
        transform: translateX(0) !important;
      }
    }
  }
}

.contact {
  background: url("/imgs/contact.webp");
  background-size: cover;
  position: relative;

  .decoration1 {
    background: var(--dividers-image);
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
  }

  .decoration2 {
    background: url("/imgs/decoration-black.png");
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transform: rotate(180deg);
    z-index: 99999;
  }

  .overlay {
    padding: 110px 0 170px;
    position: relative;

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-family: "Piedra", cursive;
      position: relative;
      margin-bottom: 60px;
      color: #fff;

      &::after {
        content: "CONTACT";
        opacity: 0.1;
        font-size: 100px;
        width: 100%;
        text-align: center;
        display: block;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 10px;

        @include md {
          font-size: 75px;
          top: -20px;
        }

        @include sm {
          font-size: 45px;
          top: -5px;
        }
      }
    }

    .info {
      @include sm {
        margin-bottom: 30px;
      }

      p {
        margin-top: 0;
        margin-bottom: 20px;
        color: #fff;
      }

      h4 {
        font-family: "Piedra", cursive;
        letter-spacing: 1.5px;
        color: #fff;
      }

      .way {
        margin-bottom: 20px;

        i {
          font-size: 20px;
          padding: 9px;
          background: #fff;
          margin-right: 3px;
          color: #226;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba($color: #000000, $alpha: 0.2);
        }

        span {
          font-size: 18px;
          color: #fff;
        }
      }

      .icons {
        i {
          font-size: 28px;
          cursor: pointer;
          margin: 15px 10px 0 0;
          padding: 7px 8px 7px 9px;
          border-radius: 50%;
          color: #fff;
          box-shadow: 0 2px 6px rgba($color: #000000, $alpha: 0.2);

          &:first-of-type {
            padding: 7px 13px;
            background: $facebook;
          }

          &:nth-of-type(2) {
            padding: 8px;
            background: $twitter;
          }

          &:nth-of-type(3) {
            background: $linkedin;
          }

          &:nth-of-type(4) {
            background: $github;
          }

          &:hover {
            transform: translateY(-2px);
          }
        }
      }
    }

    .form {

      input,
      textarea {
        display: block;
        margin-bottom: 10px;
        background: rgba($color: #000000, $alpha: 0.3);
        width: 100%;
        border-radius: 10px;
        border: 2px double #fff;
        border-top-color: transparent;
        border-bottom-color: transparent;
        box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.1);

        &::placeholder {
          color: #ccc;
        }

        &:focus {
          border-radius: 5px;
          border-style: solid;
          border-color: #ffb400;
        }
      }

      button {
        border-radius: 10px;
        background: #fff;
        color: #000;
        border-color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>

<script>
import Swal from 'sweetalert2'
/* eslint-disable */
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      portfolio: []
    }
  },
  methods: {
    async openProject(link, pid) {
      window.open(link, '_blank')
      await this.$axios.$post(`/api/portfolio/view?pid=${pid}`);
      this.portfolio = this.portfolio.map(project => {
        if (project._id === pid) project.views += 1;
        return project;
      });
    },
    open(link) {
      window.open(link, '_blank')
    },
    async sendMsg(e) {
      e.target.textContent = 'Sending...';

      const { name, email, message } = this;

      if (name == '' || email == '' || message == '') {
        e.target.textContent = 'Send Message';
        return Swal.fire({
          icon: 'error',
          text: 'Please fill all required fields'
        })
      }

      if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
        e.target.textContent = 'Send Message';
        return Swal.fire({
          icon: 'error',
          text: 'Please enter a valid email address'
        })
      }

      if (message.length < 25) {
        e.target.textContent = 'Send Message';
        return Swal.fire({
          icon: 'error',
          text: 'Your message is too short'
        })
      }

      const payload = { fullName: name, email, message }
      var { err } = await this.$axios.post('/api/contact', payload);

      if (err) {
        e.target.textContent = 'Send Message'
        return Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: err
        })
      }

      this.name = '';
      this.email = '';
      this.message = '';

      Swal.fire('', 'Thank You, Your message is delivered', 'success');

      e.target.textContent = 'Send Message'
    }
  },
  mounted() {
    this.$store.commit('endLoading')
  },
  filters: {
    formatLangs(langs) {
      return langs.split(',').join(' | ')
    }
  },
  async asyncData({ $axios }) {
    $axios.defaults.baseURL = "https://v2.api.hassanali.tk";

    const { success: projects } = await $axios.$get('/api/portfolio')

    const portfolio = projects.map(proj => {
      proj.langs = proj.langs.split(",").map(lang => lang.trim())
      return proj;
    })

    return {
      portfolio
    }
  },
}
</script>