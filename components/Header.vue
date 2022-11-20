<template>
  <header>
    <div class="overlay">
      <div id="stars2" />
      <div id="stars3" />
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">H</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item hvr-bounce-to-bottom" :class="{ active: route == 'index' }">
                <a class="nav-link" href="/"><i class="fa-solid fa-house-chimney"></i> Home</a>
              </li>
              <li class="nav-item hvr-bounce-to-bottom" :class="{ active: route == 'portfolio' }">
                <a class="nav-link" href="/portfolio"><i class="fa-solid fa-images"></i> Portfolio</a>
              </li>
              <li class="nav-item hvr-bounce-to-bottom" :class="{ active: route == 'contact' }">
                <a class="nav-link" href="/contact"><i class="fa-solid fa-headset me-1"></i> Contact</a>
              </li>
              <li class="nav-item">
                <button class="nav-link theme_mode" aria-label="Theme Toggeller" @click="toggleMode">
                  <i class="fa-solid fa-sun"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="header">
        <div class="container">
          <h4 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700">
            Hi There!
          </h4>
          <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
            I'm <span />
          </h1>
          <h4 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
            Full-Stack Web Developer
          </h4>
          <div class="social-icons">
            <i class="fab fa-facebook-f" @click="goTo('https://www.facebook.com/hassan2231998')"></i>
            <i class="fab fa-linkedin-in" @click="goTo('https://www.linkedin.com/in/hassan1998/')"></i>
            <i class="fab fa-whatsapp" @click="goTo('https://wa.me/1146321817')"></i>
            <i class="fab fa-github-alt" @click="goTo('https://github.com/Hassan-98')"></i>
          </div>
          <button @click="goTo('/portfolio')">See My Portfolio</button>
        </div>
      </section>
    </div>
    <div class="header_divider dark"></div>
  </header>
</template>

<style lang="scss">
header {
  background: var(--header-bg);
  background-position: 100%;
  background-size: cover;
  height: 80vh;
  @include lg {
    background-position: 90%;
  }
  @include md {
    background-position: 90%;
    text-align: center;
  }
  @include xs {
    background-position: 95%;
    text-align: center;
  }
  .overlay {
    height: 100%;
    overflow: hidden;
    background: var(--header-overlay);
    #stars2 {
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 209px 17905px #fff, 248px 597px #fff, 993px 297px #fff,
        1624px 14px #fff, 249px 1028px #fff, 1164px 865px #fff, 406px 840px #fff,
        1411px 1688px #fff, 1616px 669px #fff, 1629px 1483px #fff,
        1759px 1617px #fff, 94px 1172px #fff, 243px 796px #fff,
        1735px 1021px #fff, 896px 1228px #fff, 899px 601px #fff,
        1371px 225px #fff, 256px 1842px #fff, 1516px 1699px #fff,
        1282px 880px #fff, 1828px 47px #fff, 1424px 769px #fff,
        1788px 594px #fff, 1809px 1519px #fff, 132px 500px #fff,
        1218px 1755px #fff, 614px 1275px #fff, 1272px 1462px #fff,
        1427px 961px #fff, 1923px 60px #fff, 1052px 948px #fff, 339px 383px #fff,
        504px 1712px #fff, 1614px 1504px #fff, 438px 1618px #fff,
        1992px 1414px #fff, 973px 441px #fff, 498px 927px #fff,
        315px 1216px #fff, 181px 1275px #fff, 652px 137px #fff,
        1187px 1232px #fff, 1316px 1521px #fff, 1544px 1889px #fff,
        1688px 39px #fff, 809px 1857px #fff, 1984px 424px #fff,
        415px 1007px #fff, 550px 366px #fff, 1594px 1825px #fff, 680px 84px #fff,
        742px 653px #fff, 1284px 241px #fff, 1809px 1876px #fff,
        295px 1854px #fff, 1494px 669px #fff, 1388px 1126px #fff,
        1684px 252px #fff, 426px 1784px #fff, 848px 717px #fff, 24px 833px #fff,
        549px 1428px #fff, 129px 1036px #fff, 1310px 462px #fff,
        266px 995px #fff, 185px 1714px #fff, 1379px 1956px #fff,
        579px 1875px #fff, 1205px 634px #fff, 88px 1418px #fff, 189px 736px #fff,
        213px 258px #fff, 256px 691px #fff, 223px 1379px #fff, 1122px 776px #fff,
        1902px 343px #fff, 1493px 154px #fff, 1694px 1332px #fff,
        525px 160px #fff, 326px 1965px #fff, 1431px 888px #fff,
        1080px 1418px #fff, 508px 473px #fff, 1764px 161px #fff,
        1462px 586px #fff, 881px 348px #fff, 908px 984px #fff, 472px 556px #fff,
        1854px 799px #fff, 783px 1328px #fff, 1688px 276px #fff,
        1616px 482px #fff, 534px 1546px #fff, 1687px 872px #fff,
        1658px 1741px #fff, 725px 728px #fff, 1239px 254px #fff,
        1429px 1766px #fff, 561px 572px #fff, 1763px 1097px #fff,
        1864px 655px #fff, 1732px 205px #fff, 1428px 217px #fff,
        366px 556px #fff, 998px 1454px #fff, 213px 647px #fff, 966px 1352px #fff,
        54px 1023px #fff, 1854px 1022px #fff, 639px 1155px #fff,
        1421px 1271px #fff, 1397px 1393px #fff, 1964px 540px #fff,
        1477px 334px #fff, 1948px 1850px #fff, 1842px 1418px #fff,
        713px 1823px #fff, 1191px 876px #fff, 22px 711px #fff, 379px 1660px #fff,
        562px 1885px #fff, 130px 713px #fff, 51px 62px #fff, 1818px 335px #fff,
        1221px 1850px #fff, 88px 1942px #fff, 1028px 1358px #fff,
        1962px 1678px #fff, 1123px 1760px #fff, 275px 1255px #fff,
        469px 299px #fff, 1502px 169px #fff, 952px 935px #fff, 1595px 358px #fff,
        657px 1066px #fff, 1633px 1380px #fff, 1110px 1793px #fff,
        743px 169px #fff, 1346px 555px #fff, 1590px 1148px #fff,
        1253px 1034px #fff, 652px 733px #fff, 291px 883px #fff, 173px 355px #fff,
        40px 446px #fff, 1437px 617px #fff, 1092px 1507px #fff, 932px 306px #fff,
        1580px 1774px #fff, 1346px 576px #fff, 1186px 1811px #fff,
        1810px 1564px #fff, 1602px 1390px #fff, 1001px 385px #fff,
        429px 618px #fff, 1238px 479px #fff, 496px 582px #fff, 674px 1959px #fff,
        1694px 1705px #fff, 515px 565px #fff, 753px 463px #fff,
        422px 1638px #fff, 1322px 192px #fff, 900px 553px #fff,
        160px 1519px #fff, 836px 160px #fff, 67px 1863px #fff,
        1437px 1407px #fff, 1846px 1824px #fff, 927px 1594px #fff,
        715px 13px #fff, 1149px 1603px #fff, 343px 217px #fff, 261px 1111px #fff,
        658px 1583px #fff, 227px 346px #fff, 360px 1940px #fff,
        1737px 840px #fff, 1667px 311px #fff, 235px 298px #fff,
        1003px 189px #fff, 995px 587px #fff, 708px 1984px #fff, 886px 249px #fff,
        533px 513px #fff, 1069px 368px #fff, 111px 1476px #fff,
        1867px 323px #fff, 1723px 816px #fff, 320px 512px #fff,
        1834px 1073px #fff, 1721px 1390px #fff, 1950px 932px #fff,
        1867px 88px #fff, 1108px 437px #fff, 423px 1700px #fff,
        443px 1644px #fff, 1642px 1392px #fff, 493px 1652px #fff,
        250px 1708px #fff;
      animation: animStar 100s linear infinite;
    }
    #stars2:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      background: transparent;
      box-shadow: 209px 17905px #fff, 248px 597px #fff, 993px 297px #fff,
        1624px 14px #fff, 249px 1028px #fff, 1164px 865px #fff, 406px 840px #fff,
        1411px 1688px #fff, 1616px 669px #fff, 1629px 1483px #fff,
        1759px 1617px #fff, 94px 1172px #fff, 243px 796px #fff,
        1735px 1021px #fff, 896px 1228px #fff, 899px 601px #fff,
        1371px 225px #fff, 256px 1842px #fff, 1516px 1699px #fff,
        1282px 880px #fff, 1828px 47px #fff, 1424px 769px #fff,
        1788px 594px #fff, 1809px 1519px #fff, 132px 500px #fff,
        1218px 1755px #fff, 614px 1275px #fff, 1272px 1462px #fff,
        1427px 961px #fff, 1923px 60px #fff, 1052px 948px #fff, 339px 383px #fff,
        504px 1712px #fff, 1614px 1504px #fff, 438px 1618px #fff,
        1992px 1414px #fff, 973px 441px #fff, 498px 927px #fff,
        315px 1216px #fff, 181px 1275px #fff, 652px 137px #fff,
        1187px 1232px #fff, 1316px 1521px #fff, 1544px 1889px #fff,
        1688px 39px #fff, 809px 1857px #fff, 1984px 424px #fff,
        415px 1007px #fff, 550px 366px #fff, 1594px 1825px #fff, 680px 84px #fff,
        742px 653px #fff, 1284px 241px #fff, 1809px 1876px #fff,
        295px 1854px #fff, 1494px 669px #fff, 1388px 1126px #fff,
        1684px 252px #fff, 426px 1784px #fff, 848px 717px #fff, 24px 833px #fff,
        549px 1428px #fff, 129px 1036px #fff, 1310px 462px #fff,
        266px 995px #fff, 185px 1714px #fff, 1379px 1956px #fff,
        579px 1875px #fff, 1205px 634px #fff, 88px 1418px #fff, 189px 736px #fff,
        213px 258px #fff, 256px 691px #fff, 223px 1379px #fff, 1122px 776px #fff,
        1902px 343px #fff, 1493px 154px #fff, 1694px 1332px #fff,
        525px 160px #fff, 326px 1965px #fff, 1431px 888px #fff,
        1080px 1418px #fff, 508px 473px #fff, 1764px 161px #fff,
        1462px 586px #fff, 881px 348px #fff, 908px 984px #fff, 472px 556px #fff,
        1854px 799px #fff, 783px 1328px #fff, 1688px 276px #fff,
        1616px 482px #fff, 534px 1546px #fff, 1687px 872px #fff,
        1658px 1741px #fff, 725px 728px #fff, 1239px 254px #fff,
        1429px 1766px #fff, 561px 572px #fff, 1763px 1097px #fff,
        1864px 655px #fff, 1732px 205px #fff, 1428px 217px #fff,
        366px 556px #fff, 998px 1454px #fff, 213px 647px #fff, 966px 1352px #fff,
        54px 1023px #fff, 1854px 1022px #fff, 639px 1155px #fff,
        1421px 1271px #fff, 1397px 1393px #fff, 1964px 540px #fff,
        1477px 334px #fff, 1948px 1850px #fff, 1842px 1418px #fff,
        713px 1823px #fff, 1191px 876px #fff, 22px 711px #fff, 379px 1660px #fff,
        562px 1885px #fff, 130px 713px #fff, 51px 62px #fff, 1818px 335px #fff,
        1221px 1850px #fff, 88px 1942px #fff, 1028px 1358px #fff,
        1962px 1678px #fff, 1123px 1760px #fff, 275px 1255px #fff,
        469px 299px #fff, 1502px 169px #fff, 952px 935px #fff, 1595px 358px #fff,
        657px 1066px #fff, 1633px 1380px #fff, 1110px 1793px #fff,
        743px 169px #fff, 1346px 555px #fff, 1590px 1148px #fff,
        1253px 1034px #fff, 652px 733px #fff, 291px 883px #fff, 173px 355px #fff,
        40px 446px #fff, 1437px 617px #fff, 1092px 1507px #fff, 932px 306px #fff,
        1580px 1774px #fff, 1346px 576px #fff, 1186px 1811px #fff,
        1810px 1564px #fff, 1602px 1390px #fff, 1001px 385px #fff,
        429px 618px #fff, 1238px 479px #fff, 496px 582px #fff, 674px 1959px #fff,
        1694px 1705px #fff, 515px 565px #fff, 753px 463px #fff,
        422px 1638px #fff, 1322px 192px #fff, 900px 553px #fff,
        160px 1519px #fff, 836px 160px #fff, 67px 1863px #fff,
        1437px 1407px #fff, 1846px 1824px #fff, 927px 1594px #fff,
        715px 13px #fff, 1149px 1603px #fff, 343px 217px #fff, 261px 1111px #fff,
        658px 1583px #fff, 227px 346px #fff, 360px 1940px #fff,
        1737px 840px #fff, 1667px 311px #fff, 235px 298px #fff,
        1003px 189px #fff, 995px 587px #fff, 708px 1984px #fff, 886px 249px #fff,
        533px 513px #fff, 1069px 368px #fff, 111px 1476px #fff,
        1867px 323px #fff, 1723px 816px #fff, 320px 512px #fff,
        1834px 1073px #fff, 1721px 1390px #fff, 1950px 932px #fff,
        1867px 88px #fff, 1108px 437px #fff, 423px 1700px #fff,
        443px 1644px #fff, 1642px 1392px #fff, 493px 1652px #fff,
        250px 1708px #fff;
    }

    #stars3 {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: transparent;
      box-shadow: 1613px 9003px #fff, 814px 136px #fff, 654px 125px #fff,
        1539px 412px #fff, 735px 88px #fff, 99px 563px #fff, 1293px 1432px #fff,
        849px 431px #fff, 121px 302px #fff, 1494px 1859px #fff,
        1798px 1786px #fff, 1064px 1699px #fff, 660px 1093px #fff,
        1185px 575px #fff, 361px 402px #fff, 374px 1971px #fff,
        1821px 1651px #fff, 1361px 1380px #fff, 1274px 283px #fff,
        893px 856px #fff, 1527px 1627px #fff, 851px 1964px #fff,
        1454px 267px #fff, 141px 724px #fff, 1120px 1243px #fff,
        461px 613px #fff, 194px 717px #fff, 255px 1677px #fff,
        1247px 1394px #fff, 791px 182px #fff, 1273px 115px #fff,
        360px 122px #fff, 802px 478px #fff, 926px 1682px #fff, 899px 1482px #fff,
        906px 1876px #fff, 140px 668px #fff, 1086px 893px #fff,
        620px 1529px #fff, 773px 767px #fff, 353px 57px #fff, 237px 1302px #fff,
        343px 527px #fff, 184px 1459px #fff, 553px 961px #fff, 41px 815px #fff,
        1277px 842px #fff, 1525px 1062px #fff, 1156px 57px #fff,
        1811px 1945px #fff, 205px 1771px #fff, 818px 1312px #fff,
        1577px 1732px #fff, 103px 1930px #fff, 113px 1805px #fff,
        609px 1410px #fff, 1717px 16px #fff, 1353px 1848px #fff,
        193px 233px #fff, 1955px 581px #fff, 1076px 1542px #fff,
        1106px 1636px #fff, 858px 1159px #fff, 320px 1212px #fff,
        614px 601px #fff, 263px 913px #fff, 1089px 1174px #fff,
        1003px 663px #fff, 452px 25px #fff, 1752px 1674px #fff, 840px 786px #fff,
        535px 1830px #fff, 115px 454px #fff, 728px 1968px #fff, 696px 634px #fff,
        1009px 371px #fff, 268px 914px #fff, 785px 1245px #fff,
        1354px 1849px #fff, 693px 825px #fff, 1846px 1401px #fff,
        300px 1952px #fff, 1012px 148px #fff, 607px 227px #fff,
        1057px 119px #fff, 1163px 1296px #fff, 1358px 1419px #fff,
        1915px 1371px #fff, 871px 1198px #fff, 498px 1709px #fff,
        207px 1284px #fff, 736px 1172px #fff, 259px 1399px #fff,
        1227px 1913px #fff, 121px 1804px #fff, 600px 1037px #fff,
        1728px 1167px #fff, 1329px 1483px #fff, 1727px 623px #fff,
        1629px 626px #fff;
      animation: animStar 150s linear infinite;
    }
    #stars3:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 1613px 9003px #fff, 814px 136px #fff, 654px 125px #fff,
        1539px 412px #fff, 735px 88px #fff, 99px 563px #fff, 1293px 1432px #fff,
        849px 431px #fff, 121px 302px #fff, 1494px 1859px #fff,
        1798px 1786px #fff, 1064px 1699px #fff, 660px 1093px #fff,
        1185px 575px #fff, 361px 402px #fff, 374px 1971px #fff,
        1821px 1651px #fff, 1361px 1380px #fff, 1274px 283px #fff,
        893px 856px #fff, 1527px 1627px #fff, 851px 1964px #fff,
        1454px 267px #fff, 141px 724px #fff, 1120px 1243px #fff,
        461px 613px #fff, 194px 717px #fff, 255px 1677px #fff,
        1247px 1394px #fff, 791px 182px #fff, 1273px 115px #fff,
        360px 122px #fff, 802px 478px #fff, 926px 1682px #fff, 899px 1482px #fff,
        906px 1876px #fff, 140px 668px #fff, 1086px 893px #fff,
        620px 1529px #fff, 773px 767px #fff, 353px 57px #fff, 237px 1302px #fff,
        343px 527px #fff, 184px 1459px #fff, 553px 961px #fff, 41px 815px #fff,
        1277px 842px #fff, 1525px 1062px #fff, 1156px 57px #fff,
        1811px 1945px #fff, 205px 1771px #fff, 818px 1312px #fff,
        1577px 1732px #fff, 103px 1930px #fff, 113px 1805px #fff,
        609px 1410px #fff, 1717px 16px #fff, 1353px 1848px #fff,
        193px 233px #fff, 1955px 581px #fff, 1076px 1542px #fff,
        1106px 1636px #fff, 858px 1159px #fff, 320px 1212px #fff,
        614px 601px #fff, 263px 913px #fff, 1089px 1174px #fff,
        1003px 663px #fff, 452px 25px #fff, 1752px 1674px #fff, 840px 786px #fff,
        535px 1830px #fff, 115px 454px #fff, 728px 1968px #fff, 696px 634px #fff,
        1009px 371px #fff, 268px 914px #fff, 785px 1245px #fff,
        1354px 1849px #fff, 693px 825px #fff, 1846px 1401px #fff,
        300px 1952px #fff, 1012px 148px #fff, 607px 227px #fff,
        1057px 119px #fff, 1163px 1296px #fff, 1358px 1419px #fff,
        1915px 1371px #fff, 871px 1198px #fff, 498px 1709px #fff,
        207px 1284px #fff, 736px 1172px #fff, 259px 1399px #fff,
        1227px 1913px #fff, 121px 1804px #fff, 600px 1037px #fff,
        1728px 1167px #fff, 1329px 1483px #fff, 1727px 623px #fff,
        1629px 626px #fff;
    }

    @keyframes animStar {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-2000px);
      }
    }

    nav.bg-dark {
      background: transparent !important;
      padding: 0px;
      @include xs {
        padding: 0 30px;
      }
      .navbar-brand {
        font-family: "Piedra", cursive !important;
        font-size: 50px;
        transform: rotate(-10deg);
      }
      .navbar-collapse {
        @include md {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          z-index: 1;
          background: rgba(8, 8, 8, 0.8);
          padding: 10px 0;
          border-radius: 0 0 5px 5px;
        }
      }
      .nav-item {
        margin-left: 5px;
        text-align: center;
        .nav-link {
          padding: 5px 15px 0;
          font-size: 18px;
          text-transform: uppercase;
          font-weight: bold;
          border-bottom: 3px solid transparent;

          @include xs {
            text-align: left;
            padding: 5px 25px 0;
          }

          &.theme_mode {
            // padding: 12px;
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f8e21e29;
            color: #ffe500;
            border: 0.5px solid #f8e21e1c;
            outline: none;
            transition: all 0.3s ease;
            position: relative;
            left: 3px;

            &.light {
              background: rgba($color: #fff, $alpha: 0.2);
              color: #fff;
              border: 0.5px solid #ffffff3d;
            }

            @include md {
              display: block;
              margin: 5px auto;
            }

            i {
              position: relative;
              top: -2px;
            }

            &:hover {
              transform: none;
            }
          }
        }
        &.hvr-bounce-to-bottom:before {
          background: #ffb400;
          border-radius: 15px;
        }
        &.active {
          .nav-link {
            color: #ffb400;
          }
        }
        &:hover {
          .nav-link {
            color: #fff;
          }
        }
      }
    }
    .header {
      padding: 120px 0;
      color: #fff;
      @include xs {
        padding: 80px 0;
      }
      h4 {
        font-family: "Piedra", serif;
        text-transform: uppercase;
        color: var(--header-colors);
      }
      h1 {
        font-size: 60px;
        text-transform: uppercase;
        font-family: "Piedra", cursive !important;
        color: var(--header-colors);
        span {
          font-family: "Piedra", cursive !important;
          color: #ffb40057;
          -webkit-text-stroke: 1px #ffb400;
        }
        @include md {
          font-size: 40px;
        }
        @include xs {
          font-size: 38px;
        }
      }
      .social-icons {
        i {
          margin: 15px 5px 25px;
          box-shadow: 0 3px 8px rgba($color: #000, $alpha: 0.2);
          font-size: 22px;
          &:first-of-type {
            background: $facebook;
            padding: 8px 12px;
          }
          &:nth-of-type(2) {
            background: $linkedin;
            padding: 8px 9.5px;
          }
          &:nth-of-type(3) {
            background: $whatsapp;
            padding: 8px 9.5px;
          }
          &:nth-of-type(4) {
            background: $github;
            padding: 8px;
          }
          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 8px rgba($color: #000, $alpha: 0.4);
          }
        }
      }
      button {
        border-radius: 10px;
        text-transform: uppercase;
        border: none;
        background: rgba($color: #fff, $alpha: 0.7);
        color: #000;
        box-shadow: 0 8px 8px rgba($color: #000, $alpha: 0.4);
        font-weight: bold;
        &:hover {
          transform: none;
          background: #fff;
          box-shadow: 0 8px 8px rgba($color: #000, $alpha: 0.1);
        }
      }
      p {
        font-size: 16px;
        width: 50%;
        color: #f9f9f9;
        @include md {
          margin: auto;
          width: 80%;
        }
        @include xs {
          margin: auto;
          width: 100%;
          font-size: 14px;
        }
      }
    }
  }
}

.header_divider {
  overflow: hidden;

  &::before {
    content: "";
    font-family: "shape divider from ShapeDividers.com";
    position: absolute;
    bottom: 160px;
    left: -1px;
    right: -1px;
    top: -1px;
    z-index: 3;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: 100% 118px;
    background-position: 50% 100%;
    background-image: var(--header-divider);
    @include sm {
      bottom: 100px;
    }
    @include xs {
      bottom: 75px;
    }
  }

  &.dark::before {
    background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z" fill="%233a3c41"/><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" opacity=".5" fill="%233a3c41"/><path d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z" opacity=".5" fill="%233a3c41"/></svg>');
  }

  &.light::before {
    background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z" fill="%23ffffff"/><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" opacity=".5" fill="%23ffffff"/><path d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z" opacity=".5" fill="%23ffffff"/></svg>');
  }
}
</style>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      isDark: true
    }
  },
  computed: {
    route() {
      return this.$store.state.ROUTE;
    },
  },
  methods: {
    goTo(link) {
      if (link.startsWith("/")) {
        window.location.pathname = link;
      } else {
        window.open(link, "_blank");
      }
    },
    toggleMode(e) {
      var isDark = this.isDark;

      if (isDark) {
        document.querySelector(".theme_mode").closest(".nav-item").querySelector("i").classList.remove("fa-sun");
        document.querySelector(".theme_mode").closest(".nav-item").querySelector("i").classList.add("fa-moon");
        document.querySelector('.theme_mode').classList.add('light');

        // Set Light Mode
        const ROOT_STYLE = document.querySelector(":root").style;

        ROOT_STYLE.setProperty("--text-color", `#3E4148`);
        ROOT_STYLE.setProperty("--header-bg", `url("/imgs/headerLight.webp")`);
        ROOT_STYLE.setProperty("--header-overlay", `rgba(0, 0, 0, 0.2)`);
        ROOT_STYLE.setProperty("--header-colors", `#8a9ae1`);
        ROOT_STYLE.setProperty("--decoration-opacity", `0.05`);
        ROOT_STYLE.setProperty("--buttons-color", `#eee`);
        ROOT_STYLE.setProperty("--services-bg-color", `#fff`);
        ROOT_STYLE.setProperty("--clients-bg-color", `rgba(255,255,255,0.85)`);
        ROOT_STYLE.setProperty("--dividers-image", `url("/imgs/decorationLight.png")`);
        ROOT_STYLE.setProperty("--portfolio-borders", `#f6f6f6`);

        // Change Body Background
        document.body.style.setProperty("background", `#fff`);

        // Change Header Divider
        document.querySelector(".header_divider").classList.add("light");
        document.querySelector(".header_divider").classList.remove("dark");

        // Change About Me Image
        const ABOUT_ME_IMAGE = document.querySelector(".myPic");
        if (ABOUT_ME_IMAGE) ABOUT_ME_IMAGE.src = "/imgs/avatarLight.png";

        // Save To LocalStorage
        window.localStorage.setItem("portfolio_theme_mode", "light");

        this.isDark = false;
      } else {
        document.querySelector(".theme_mode").closest(".nav-item").querySelector("i").classList.remove("fa-moon");
        document.querySelector(".theme_mode").closest(".nav-item").querySelector("i").classList.add("fa-sun");
        document.querySelector('.theme_mode').classList.remove('light');
        
        // Set Dark Mode
        const ROOT_STYLE = document.querySelector(":root").style;

        ROOT_STYLE.setProperty("--text-color", `#fff`);
        ROOT_STYLE.setProperty("--header-bg", `url("/imgs/headerDark.webp")`);
        ROOT_STYLE.setProperty("--header-overlay", `rgba(0, 0, 0, 0.4)`);
        ROOT_STYLE.setProperty("--header-colors", `#fff`);
        ROOT_STYLE.setProperty("--decoration-opacity", `1`);
        ROOT_STYLE.setProperty("--buttons-color", `#3E4148`);
        ROOT_STYLE.setProperty("--services-bg-color", `#3E4148`);
        ROOT_STYLE.setProperty("--clients-bg-color", `rgba(58, 60, 65, 0.85)`);
        ROOT_STYLE.setProperty("--dividers-image", `url("/imgs/decorationDark.png")`);
        ROOT_STYLE.setProperty("--portfolio-borders", `#3E4148`);

        // Change Body Background
        document.body.style.setProperty("background", `#3A3C41`);

        // Change Header Divider
        document.querySelector(".header_divider").classList.remove("light");
        document.querySelector(".header_divider").classList.add("dark");

        // Change About Me Image
        const ABOUT_ME_IMAGE = document.querySelector(".myPic");
        if (ABOUT_ME_IMAGE) ABOUT_ME_IMAGE.src = "/imgs/avatarDark.png";

        // Save To LocalStorage
        window.localStorage.setItem("portfolio_theme_mode", "dark");

        this.isDark = true;
      }
    }
  },
  mounted() {
    // Get Theme Mode From LocalStorage
    const theme_mode = window.localStorage.getItem("portfolio_theme_mode");

    if (theme_mode == "light") this.toggleMode()

    const options = {
      strings: ["Hassan Ali", "Web Developer"],
      stringsElement: null,
      // typing speed
      typeSpeed: 25,
      // time before typing starts
      startDelay: 10,
      // backspacing speed
      backSpeed: 40,
      // time before backspacing
      backDelay: 3000,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: false,
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: "text",
    };

    new Typed(".header h1 span", options);
  }
};
</script>
