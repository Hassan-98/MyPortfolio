<template>
  <!-- eslint-disable -->
  <div class="home">
    <PictureModal v-if="$store.state.openPicModal" />
    <!-- ABOUT ME -->
    <section class="aboutMe">
      <div class="background-icons">
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background" style="top:25%;left:35%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:30%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:70%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:20%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:50%;left:10%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:75%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:55%;left:85%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:0%;left:68%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:10%;left:15%" />
        <img alt="decoration background" src="/imgs/back/space5.svg" class="background" style="top:76%;left:42%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:77%;left:20%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:22%;left:60%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:45%;left:53%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:42%;left:90%" />
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background"
          style="top:60%;left:32%;transform:rotate(180deg)" />
      </div>
      <div class="container">
        <h1>About Me</h1>
        <div class="row align-items-center">
          <div class="col-md-6 col-12 mb-5">
            <h4 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
              ABOUT ME
            </h4>
            <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
              I'm Hassan Ali
            </h2>
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
              MERN-Stack developer from Egypt, I was born on 22<sup>nd</sup> March 1998, I am a friendly, helpful and
              hard working person. I am a good timekeeper, always willing to learn new skills. I am able to work
              independently in busy environments and also within a team setting. I am outgoing and tactful, and able to
              listen effectively when solving problems.
            </p>
            <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="550" @click="goToContactPage">
              <i class="fas fa-phone-square-alt" /> Hire Me
            </button>
          </div>
          <div class="col-md-6 col-12 image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <img alt="my picture" class="myPic" src="/imgs/avatarDark.png" />
          </div>
        </div>
      </div>
    </section>
    <!-- Numbers & Stats -->
    <section class="numbers">
      <div class="background-icons">
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background" style="top:25%;left:35%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:30%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:20%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:0%;left:15%" />
        <img alt="decoration background" src="/imgs/back/space5.svg" class="background" style="top:76%;left:42%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:77%;left:70%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:0%;left:60%" />
      </div>
      <div class="container">
        <div class="row">
          <div v-for="stat in PageData.stats" :key="stat._id" class="col-md-3 col-sm-6 col-6 coldiv">
            <div class="part">
              <img alt="statstic image" :src="stat.picture" class="icon" />
              <h1 class="timer" data-from="0" :data-to="stat.number" data-speed="3000">
                {{ stat.number }}
              </h1>
              <h4>{{ stat.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services -->
    <section class="services">
      <div class="backgroundIMG" />
      <div class="container">
        <h1>Services</h1>
        <div class="row">
          <div class="col-md-4 col-sm-6 col-12">
            <div class="service" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
              <img alt="service" src="/imgs/fastcoding.svg" />
              <h3>SEO</h3>
              <p>
                I write SEO friendly code that helps search engines find and rank your website
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="service" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="150">
              <img alt="service" src="/imgs/shield.svg" />
              <h3>Clean Code</h3>
              <p>
                I write clean and organized code that makes website fast and easy to maintain
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="service" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="150">
              <img alt="service" src="/imgs/development.svg" />
              <h3>Development</h3>
              <p>
                I'm expert at developing and building any kind of websites or web applications
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="service" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
              <img alt="service" src="/imgs/screen.svg" />
              <h3>Responsive Design</h3>
              <p>
                I'm expert at developing and building responsive websites that suites all screens
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="service" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
              <img alt="service" src="/imgs/brain.svg" />
              <h3>Creative Work</h3>
              <p>
                I'm love creating bright websites ideas and develop & build it to be real websites
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-12">
            <div class="service" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
              <img alt="service" src="/imgs/support.svg" />
              <h3>Support</h3>
              <p>
                I always support and help my clients to make the best web development service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Skills -->
    <section class="skills">
      <div class="background-icons">
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background" style="top:25%;left:35%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:30%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:70%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:20%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:50%;left:10%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:75%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:55%;left:85%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:0%;left:68%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:10%;left:15%" />
        <img alt="decoration background" src="/imgs/back/space5.svg" class="background" style="top:76%;left:42%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:77%;left:20%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:22%;left:60%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:45%;left:45%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:42%;left:90%" />
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background"
          style="top:60%;left:32%;transform:rotate(180deg)" />
      </div>
      <div class="container">
        <h1>Skills</h1>
        <div class="row justify-content-center">
          <div v-for="skill in PageData.skills" :key="skill._id" class="col-lg-2 col-md-3 col-4" data-aos="zoom-in"
            data-aos-duration="1000">
            <div class="skill">
              <div class="img">
                <img alt="skill logo" :src="skill.logo" />
              </div>
              <h4>{{ skill.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Clients -->
    <section class="clients">
      <div class="decoration1"></div>
      <div class="overlay">
        <div class="container">
          <h1>HAPPY CLIENTS</h1>
          <client-only>
            <carousel :autoplay="true" :autoplayTimeout="5000" :perPageCustom="[[0, 1], [992, 2]]"
              :paginationEnabled="false" :loop="true" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <slide v-for="client in PageData.clients" :key="client._id">
                <div class="slide">
                  <i class="fas fa-quote-right" />
                  <p>{{ client.details }}</p>
                  <h4>{{ client.name }}</h4>
                  <img alt="client picture" :src="client.picture" />
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
      <div class="decoration2"></div>
    </section>
    <!-- Portfolio -->
    <section class="portfolio">
      <div class="background-icons">
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background" style="top:25%;left:35%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:30%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:70%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:20%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:50%;left:10%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:75%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:55%;left:85%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:0%;left:68%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:10%;left:15%" />
        <img alt="decoration background" src="/imgs/back/space5.svg" class="background" style="top:76%;left:42%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:77%;left:20%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:22%;left:60%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:45%;left:45%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:42%;left:90%" />
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background"
          style="top:60%;left:32%;transform:rotate(180deg)" />
      </div>
      <div class="container">
        <h1>Portfolio</h1>
        <div class="row">
          <div v-for="project in PageData.portfolio" :key="project._id" class="col-lg-4 col-md-6 col-12 contdiv"
            data-aos="fade-up" data-aos-duration="1000">
            <div class="project">
              <img alt="project thumbnail" :src="project.thumb" />
              <div class="overlay" @click="openProject(project.url, project._id)">
                <i class="fas fa-external-link-alt" />
              </div>
              <div class="caption">
                <h4>{{ project.name }}</h4>
                <div class="langs">
                  <div v-for="lang in project.langs" :key="lang" :title="lang" class="img">
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
        <button @click="open('/portfolio', false)">
          View More
          <i class="fas fa-long-arrow-alt-right" />
        </button>
      </div>
    </section>
    <!-- Experience -->
    <section class="experince">
      <div class="background-icons">
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background" style="top:25%;left:35%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:30%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space.svg" class="background" style="top:70%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:20%;left:90%" />
        <img alt="decoration background" src="/imgs/back/space2.svg" class="background" style="top:50%;left:10%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:75%;left:5%" />
        <img alt="decoration background" src="/imgs/back/space3.svg" class="background" style="top:55%;left:85%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:0%;left:68%" />
        <img alt="decoration background" src="/imgs/back/space4.svg" class="background" style="top:10%;left:15%" />
        <img alt="decoration background" src="/imgs/back/space5.svg" class="background" style="top:76%;left:42%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:77%;left:20%" />
        <img alt="decoration background" src="/imgs/back/missile.svg" class="background" style="top:22%;left:60%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:45%;left:45%" />
        <img alt="decoration background" src="/imgs/back/asteroid.svg" class="background" style="top:42%;left:90%" />
        <img alt="decoration background" src="/imgs/back/wish.svg" class="background"
          style="top:60%;left:32%;transform:rotate(180deg)" />
      </div>
      <div class="container">
        <h1>Experience & Education</h1>
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="row exp">
              <div v-for="exp in PageData.exps" v-if="exp.type == 'experince'" :key="exp._id" class="col-12"
                data-aos="fade-up" data-aos-duration="1000">
                <span>
                  {{ exp.dateFrom }}
                  {{ exp.dateTo == "" ? "- Now" : `- ${exp.dateTo}` }}
                </span>
                <h3>{{ exp.name }}</h3>
                <p>{{ exp.details }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="row edu">
              <div v-for="exp in PageData.exps" v-if="exp.type == 'education'" :key="exp._id" class="col-12"
                data-aos="fade-up" data-aos-duration="1000">
                <span>
                  {{ exp.dateFrom }}
                  {{ exp.dateTo == "" ? "" : `- ${exp.dateTo}` }}
                </span>
                <h3>{{ exp.name }}</h3>
                <p>{{ exp.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Certificates -->
    <section class="certificates">
      <div class="background-icons">
        <img alt="decoration background" src="/imgs/back/dotsarrow.svg" class="background" style="top:60%;left:8%" />
        <img alt="decoration background" src="/imgs/back/blur.svg" class="background" style="top:30%;left:5%" />
        <img alt="decoration background" src="/imgs/back/blur.svg" class="background" style="top:75%;left:84%" />
        <img alt="decoration background" src="/imgs/back/medal.svg" class="background" style="top:35%;left:85%" />
        <img alt="decoration background" src="/imgs/back/medal.svg" class="background" style="top:50%;left:45%" />
        <img alt="decoration background" src="/imgs/back/medal.svg" class="background" style="top:80%;left:5%" />
        <img alt="decoration background" src="/imgs/back/winner.svg" class="background" style="top:75%;left:60%" />
        <img alt="decoration background" src="/imgs/back/winner.svg" class="background" style="top:15%;left:15%" />
        <img alt="decoration background" src="/imgs/back/winner.svg" class="background" style="top:58%;left:90%" />
      </div>
      <div class="container">
        <h1>Certificates</h1>
        <div class="row">
          <div v-for="cert in PageData.certs" :key="cert._id" class="col-lg-4 col-md-6 col-12" data-aos="zoom-in"
            data-aos-duration="1200">
            <div class="cert">
              <img alt="certificate" :src="cert.cert" />
              <div class="overlay" @click="showCertificate($event, cert._id)">
                <i class="far fa-eye" />
              </div>
              <div class="views">
                <i class="fas fa-eye"></i> {{ cert.views }}
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
.home {
  position: relative;
}

img.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  opacity: var(--decoration-opacity);
}

.aboutMe {
  padding: 100px 0;
  position: relative;

  @include xs {
    padding: 70px 15px;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Piedra", cursive;
    position: relative;
    margin-bottom: 100px;

    @include xs {
      margin-bottom: 50px;
    }

    &::after {
      content: "ABOUT ME";
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

  h2 {
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 15px;
    color: #ffb400;
    font-size: 48px;

    @include xs {
      font-size: 40px;
    }
  }

  p {
    line-height: 1.8;
    font-size: 16px;

    @include md {
      line-height: 25px;
    }
  }

  button {
    border-radius: 5px;
    padding: 12px 60px;
    font-size: 16px;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-top: 15px;
    background: var(--buttons-color);
    border-color: transparent;
    transition: all 0.3s ease-in-out !important;
    font-weight: bold;

    @include xs {
      padding: 8px 40px;
      font-size: 15px;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  .image {
    text-align: right;

    img.myPic {
      width: 476px;
      height: 443px;

      @include xs {
        height: 300px;
      }
    }
  }
}

.numbers {
  position: relative;
  padding: 150px 0 100px;

  @include xs {
    padding: 100px 10px 0px;
  }

  .coldiv {
    @include xs {
      margin-bottom: 120px;
    }
  }

  .part {
    position: relative;
    text-align: center;

    @include sm {
      margin-bottom: 160px;
    }

    @include xs {
      margin-bottom: 40px;
    }

    img {
      border: 3px double #ffb400;
      padding: 15px;
      border-radius: 30px;
      position: absolute;
      width: 150px;
      height: 150px;
      opacity: 0.75;
      top: -125px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;

      @include xs {
        width: 120px;
        height: 120px;
      }
    }

    h1 {
      position: relative;
      z-index: 2;
      font-family: "Piedra", cursive;
      font-weight: normal;
      margin: 0;
    }

    h4 {
      text-transform: uppercase;
      font-family: "Piedra", cursive;
      font-weight: normal;

      @include xs {
        margin-top: 0;
      }
    }
  }
}

.services {
  position: relative;
  padding: 100px 0;

  @include sm {
    padding: 30px 0;
  }

  .backgroundIMG {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/imgs/3ndBack.png");
    background-size: 100% 100%;
    opacity: 0.4;
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Piedra", cursive;
    position: relative;
    margin-bottom: 100px;

    @include xs {
      margin-bottom: 70px;
    }

    &::after {
      content: "SERVICES";
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

  .service {
    background: var(--services-bg-color);
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05), 0 0 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out !important;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 6px 6px rgba($color: #000000, $alpha: 0.2);
    }

    img {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }

    h3 {
      font-family: "Piedra", cursive;
      margin: 5px 0 0;
    }

    p {
      margin: 5px 0 0;
    }
  }
}

.skills {
  padding: 80px 0 120px;
  position: relative;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Piedra", cursive;
    position: relative;
    margin-bottom: 100px;

    @include xs {
      margin-bottom: 50px;
    }

    &::after {
      content: "SKILLS";
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

  .skill {
    text-align: center;
    margin-bottom: 25px;

    @include xs {
      margin-bottom: 40px;
    }

    .img {
      width: 128px;
      height: 128px;
      // border-radius: 50%;
      border-radius: 42% 58% 23% 77% / 57% 22% 78% 43%;
      background: transparent;
      padding: 25px;
      box-shadow: inset 0 0 5px rgba($color: #000000, $alpha: 0.2);
      overflow: hidden;
      display: inline-block;
      margin: 0;

      img {
        width: 100%;
        height: 100%;
      }

      @include xs {
        width: 100px;
        height: 100px;
        padding: 15px;
      }
    }

    h4 {
      font-family: "Piedra", cursive;

      @include xs {
        margin-top: 0;
      }
    }
  }

  .skill-cir {
    text-align: center;

    @include xs {
      display: none;
    }

    h2 {
      font-family: "Piedra", cursive;
      margin-bottom: 50px;
    }
  }

  .skill-line {
    padding: 0 0 20px;

    h4 {
      font-family: "Piedra", cursive;
      margin: 5px 0 10px;
    }
  }
}

.clients {
  background: url("/imgs/clients.webp");
  background-size: cover;
  position: relative;

  .decoration1 {
    background: var(--dividers-image);
    background-size: cover;
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 60px;
  }

  .decoration2 {
    background: var(--dividers-image);
    background-size: cover;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 60px;
    transform: rotate(180deg);
  }

  .overlay {
    padding: 120px 0 160px;
    position: relative;

    @include xs {
      padding: 100px 0 150px;
    }

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-family: "Piedra", cursive;
      position: relative;
      margin-bottom: 60px;
      color: #fff;
      ;

      &::after {
        content: "CLIENTS";
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

    .slide {
      padding: 25px;
      background: var(--clients-bg-color);
      margin: 0 5px;
      border-radius: 7px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);

      i {
        font-size: 45px;
      }

      img {
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        padding: 5px;
        background: #fff;
        bottom: -30px;
        right: -30px;
        z-index: 1;
        opacity: 0.7;
      }

      p {
        position: relative;
        z-index: 2;
      }

      h4 {
        position: relative;
        z-index: 2;
        font-family: "Piedra", cursive;
        letter-spacing: 2px;
      }
    }
  }
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

    @include xs {
      margin-bottom: 50px;
    }

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
      border: 10px solid var(--portfolio-borders);
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
      background: rgba($color: #3a3c41, $alpha: 0.6);
      display: flex;
      flex-wrap: wrap;
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
      bottom: -200px;
      left: 0;
      z-index: 9;
      width: 100%;
      box-shadow: inset 0 5px 10px rgba($color: #000000, $alpha: 0.2);
      background: rgba($color: #ffb400, $alpha: 0.85);
      border-bottom: 5px solid #aaa;

      h4 {
        text-align: center;
        padding: 15px 0 10px;
        font-weight: bold;
        margin-bottom: 0;
        color: #3a3c41;
        font-family: "Piedra", cursive;
        letter-spacing: 2px;
      }

      .langs {
        margin: 0;
        padding-bottom: 10px;
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

  button {
    margin: 30px auto;
    background: var(--buttons-color);
    border-color: transparent;
    font-size: 18px;

    i {
      margin-left: 5px;
    }

    &:hover {
      transform: none;

      i {
        padding-left: 6px;
        color: #ffb400;
      }
    }
  }
}

.experince {
  padding: 70px 0 100px;
  position: relative;

  @include sm {
    padding: 0px 0 100px 0;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Piedra", cursive;
    position: relative;
    margin-bottom: 100px;

    @include xs {
      margin-bottom: 50px;
    }

    &::after {
      content: "EXPERINCE";
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

  .exp,
  .edu {
    @include sm {
      padding-left: 35px;
    }

    span {
      background: var(--services-bg-color);
      padding: 5px 10px;
      border-radius: 10px;
      box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
    }

    h3 {
      letter-spacing: 1.5px;
      font-family: "Piedra", cursive;
      color: #ffb400;
    }

    .col-12 {
      margin-bottom: 40px;
      border-left: 1px solid #ffb400;
      padding-left: 30px;
      position: relative;
    }
  }

  .exp {
    @include sm {
      margin-bottom: 50px;
    }

    .col-12 {
      &::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f0b1";
        border-radius: 50%;
        background: #ffb400;
        color: #fff;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        left: -20px;
      }
    }
  }

  .edu {
    .col-12 {
      &::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f19d";
        border-radius: 50%;
        color: #fff;
        background: #ffb400;
        padding: 8px 10px;
        position: absolute;
        top: 0;
        left: -20px;
      }
    }
  }
}

.certificates {
  padding: 70px 0 100px;
  position: relative;

  @include sm {
    padding: 0px 0 100px 0;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Piedra", cursive;
    position: relative;
    margin-bottom: 120px;

    @include xs {
      margin-bottom: 50px;
    }

    &::after {
      content: "CERTIFICATES";
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
        font-size: 40px;
        top: -5px;
      }
    }
  }

  .cert {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;

    img {
      border: 5px solid #ededed;
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
      background: rgba($color: #3a3c41, $alpha: 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transform: translateX(-700px);
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
      background: rgba($color: #000000, $alpha: 0.3);
      color: #ccc;
      z-index: 12;

      i {
        font-size: 16px;
        color: #ccc;
      }
    }

    &:hover {
      box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.3);

      .overlay {
        transform: translateX(0) !important;
      }

      .views {
        left: 15px;
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
    top: -1px;
    left: 0;
    width: 100%;
    height: 60px;
  }

  .decoration2 {
    background: url("/imgs/decoration-black.png");
    background-size: cover;
    position: absolute;
    bottom: -1px;
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

.swal2-html-container {
  color: #595959;
}
</style>

<script>
/* eslint-disable */
import Swal from 'sweetalert2'
import PictureModal from '../components/PictureModal.vue'

export default {
  components: {
    PictureModal
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      PageData: {
        portfolio: [],
        skills: [],
        stats: [],
        certs: [],
        clients: [],
        exps: []
      }
    };
  },
  methods: {
    async openProject(link, pid) {
      window.open(link, "_blank");
      await this.$axios.$post(`/api/portfolio/view?pid=${pid}`);
      this.PageData.portfolio = this.PageData.portfolio.map(project => {
        if (project._id === pid) project.views += 1;
        return project;
      });
    },
    open(link, blank) {
      if (blank) {
        window.open(link, "_blank");
      } else {
        location.href = link;
      }
    },
    async showCertificate(e, cid) {
      var img = null;
      if (e.target.classList.contains("overlay")) img = e.target.previousElementSibling.src;
      else img = e.target.parentElement.previousElementSibling.src;
      this.$store.commit("openPicModal", img);
      await this.$axios.$post(`/api/certs/view?cid=${cid}`);
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

      Swal.fire('', 'Thank You, Your message delivered', 'success');

      e.target.textContent = 'Send Message'
    },
    goToContactPage() {
      window.location.href = '/contact'
    }
  },
  mounted() {
    $(".numbers").on("inview", function (e, visible) {
      if (visible == true) {
        $(".timer").countTo("restart");
      }
    });
    this.$store.commit("endLoading");
  },
  filters: {
    formatLangs(langs) {
      return langs.split(",");
    }
  },
  async asyncData({ $axios }) {
    $axios.defaults.baseURL = "https://v2.api.hassanali.tk";

    // const { success: projects } = await $axios.$get("/api/portfolio?limit=6");
    // const { success: skills } = await $axios.$get("/api/skills");
    // const { success: stats } = await $axios.$get("/api/stats");
    // const { success: certs } = await $axios.$get("/api/certs");
    // const { success: clients } = await $axios.$get("/api/clients");
    // const { success: exps } = await $axios.$get("/api/exps");

    let resources = [
      $axios.$get("/api/portfolio?limit=6"),
      $axios.$get("/api/skills"),
      $axios.$get("/api/stats"),
      $axios.$get("/api/certs"),
      $axios.$get("/api/clients"),
      $axios.$get("/api/exps")
    ];

    const responses = await Promise.all(resources);

    const [projectsRes, skillsRes, statsRes, certsRes, clientsRes, expsRes] = responses;

    const portfolio = projectsRes.success.map(project => {
      project.langs = project.langs.split(",").map(lang => lang.trim())
      return project;
    });

    return {
      PageData: {
        portfolio,
        skills: skillsRes.success,
        stats: statsRes.success,
        certs: certsRes.success,
        clients: clientsRes.success,
        exps: expsRes.success
      }
    }
  },
};
</script>