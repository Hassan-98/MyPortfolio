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
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item hvr-bounce-to-bottom" :class="{active: route == 'index'}">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item hvr-bounce-to-bottom" :class="{active: route == 'portfolio'}">
                <a class="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li class="nav-item hvr-bounce-to-bottom" :class="{active: route == 'contact'}">
                <a class="nav-link" href="/contact">Contact</a>
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
  </header>
</template>

<style lang="scss">
header {
  background: url("/imgs/header.jpg");
  background-size: cover;
  height: 100vh;
  @include md {
    background-position: 70%;
    text-align: center;
  }
  @include xs {
    background-position: 76%;
    text-align: center;
  }
  .overlay {
    height: 100%;
    overflow: hidden;
    #stars2 {
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 209px 17905px #FFF , 248px 597px #FFF , 993px 297px #FFF , 1624px 14px #FFF , 249px 1028px #FFF , 1164px 865px #FFF , 406px 840px #FFF , 1411px 1688px #FFF , 1616px 669px #FFF , 1629px 1483px #FFF , 1759px 1617px #FFF , 94px 1172px #FFF , 243px 796px #FFF , 1735px 1021px #FFF , 896px 1228px #FFF , 899px 601px #FFF , 1371px 225px #FFF , 256px 1842px #FFF , 1516px 1699px #FFF , 1282px 880px #FFF , 1828px 47px #FFF , 1424px 769px #FFF , 1788px 594px #FFF , 1809px 1519px #FFF , 132px 500px #FFF , 1218px 1755px #FFF , 614px 1275px #FFF , 1272px 1462px #FFF , 1427px 961px #FFF , 1923px 60px #FFF , 1052px 948px #FFF , 339px 383px #FFF , 504px 1712px #FFF , 1614px 1504px #FFF , 438px 1618px #FFF , 1992px 1414px #FFF , 973px 441px #FFF , 498px 927px #FFF , 315px 1216px #FFF , 181px 1275px #FFF , 652px 137px #FFF , 1187px 1232px #FFF , 1316px 1521px #FFF , 1544px 1889px #FFF , 1688px 39px #FFF , 809px 1857px #FFF , 1984px 424px #FFF , 415px 1007px #FFF , 550px 366px #FFF , 1594px 1825px #FFF , 680px 84px #FFF , 742px 653px #FFF , 1284px 241px #FFF , 1809px 1876px #FFF , 295px 1854px #FFF , 1494px 669px #FFF , 1388px 1126px #FFF , 1684px 252px #FFF , 426px 1784px #FFF , 848px 717px #FFF , 24px 833px #FFF , 549px 1428px #FFF , 129px 1036px #FFF , 1310px 462px #FFF , 266px 995px #FFF , 185px 1714px #FFF , 1379px 1956px #FFF , 579px 1875px #FFF , 1205px 634px #FFF , 88px 1418px #FFF , 189px 736px #FFF , 213px 258px #FFF , 256px 691px #FFF , 223px 1379px #FFF , 1122px 776px #FFF , 1902px 343px #FFF , 1493px 154px #FFF , 1694px 1332px #FFF , 525px 160px #FFF , 326px 1965px #FFF , 1431px 888px #FFF , 1080px 1418px #FFF , 508px 473px #FFF , 1764px 161px #FFF , 1462px 586px #FFF , 881px 348px #FFF , 908px 984px #FFF , 472px 556px #FFF , 1854px 799px #FFF , 783px 1328px #FFF , 1688px 276px #FFF , 1616px 482px #FFF , 534px 1546px #FFF , 1687px 872px #FFF , 1658px 1741px #FFF , 725px 728px #FFF , 1239px 254px #FFF , 1429px 1766px #FFF , 561px 572px #FFF , 1763px 1097px #FFF , 1864px 655px #FFF , 1732px 205px #FFF , 1428px 217px #FFF , 366px 556px #FFF , 998px 1454px #FFF , 213px 647px #FFF , 966px 1352px #FFF , 54px 1023px #FFF , 1854px 1022px #FFF , 639px 1155px #FFF , 1421px 1271px #FFF , 1397px 1393px #FFF , 1964px 540px #FFF , 1477px 334px #FFF , 1948px 1850px #FFF , 1842px 1418px #FFF , 713px 1823px #FFF , 1191px 876px #FFF , 22px 711px #FFF , 379px 1660px #FFF , 562px 1885px #FFF , 130px 713px #FFF , 51px 62px #FFF , 1818px 335px #FFF , 1221px 1850px #FFF , 88px 1942px #FFF , 1028px 1358px #FFF , 1962px 1678px #FFF , 1123px 1760px #FFF , 275px 1255px #FFF , 469px 299px #FFF , 1502px 169px #FFF , 952px 935px #FFF , 1595px 358px #FFF , 657px 1066px #FFF , 1633px 1380px #FFF , 1110px 1793px #FFF , 743px 169px #FFF , 1346px 555px #FFF , 1590px 1148px #FFF , 1253px 1034px #FFF , 652px 733px #FFF , 291px 883px #FFF , 173px 355px #FFF , 40px 446px #FFF , 1437px 617px #FFF , 1092px 1507px #FFF , 932px 306px #FFF , 1580px 1774px #FFF , 1346px 576px #FFF , 1186px 1811px #FFF , 1810px 1564px #FFF , 1602px 1390px #FFF , 1001px 385px #FFF , 429px 618px #FFF , 1238px 479px #FFF , 496px 582px #FFF , 674px 1959px #FFF , 1694px 1705px #FFF , 515px 565px #FFF , 753px 463px #FFF , 422px 1638px #FFF , 1322px 192px #FFF , 900px 553px #FFF , 160px 1519px #FFF , 836px 160px #FFF , 67px 1863px #FFF , 1437px 1407px #FFF , 1846px 1824px #FFF , 927px 1594px #FFF , 715px 13px #FFF , 1149px 1603px #FFF , 343px 217px #FFF , 261px 1111px #FFF , 658px 1583px #FFF , 227px 346px #FFF , 360px 1940px #FFF , 1737px 840px #FFF , 1667px 311px #FFF , 235px 298px #FFF , 1003px 189px #FFF , 995px 587px #FFF , 708px 1984px #FFF , 886px 249px #FFF , 533px 513px #FFF , 1069px 368px #FFF , 111px 1476px #FFF , 1867px 323px #FFF , 1723px 816px #FFF , 320px 512px #FFF , 1834px 1073px #FFF , 1721px 1390px #FFF , 1950px 932px #FFF , 1867px 88px #FFF , 1108px 437px #FFF , 423px 1700px #FFF , 443px 1644px #FFF , 1642px 1392px #FFF , 493px 1652px #FFF , 250px 1708px #FFF;
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
      box-shadow: 209px 17905px #FFF , 248px 597px #FFF , 993px 297px #FFF , 1624px 14px #FFF , 249px 1028px #FFF , 1164px 865px #FFF , 406px 840px #FFF , 1411px 1688px #FFF , 1616px 669px #FFF , 1629px 1483px #FFF , 1759px 1617px #FFF , 94px 1172px #FFF , 243px 796px #FFF , 1735px 1021px #FFF , 896px 1228px #FFF , 899px 601px #FFF , 1371px 225px #FFF , 256px 1842px #FFF , 1516px 1699px #FFF , 1282px 880px #FFF , 1828px 47px #FFF , 1424px 769px #FFF , 1788px 594px #FFF , 1809px 1519px #FFF , 132px 500px #FFF , 1218px 1755px #FFF , 614px 1275px #FFF , 1272px 1462px #FFF , 1427px 961px #FFF , 1923px 60px #FFF , 1052px 948px #FFF , 339px 383px #FFF , 504px 1712px #FFF , 1614px 1504px #FFF , 438px 1618px #FFF , 1992px 1414px #FFF , 973px 441px #FFF , 498px 927px #FFF , 315px 1216px #FFF , 181px 1275px #FFF , 652px 137px #FFF , 1187px 1232px #FFF , 1316px 1521px #FFF , 1544px 1889px #FFF , 1688px 39px #FFF , 809px 1857px #FFF , 1984px 424px #FFF , 415px 1007px #FFF , 550px 366px #FFF , 1594px 1825px #FFF , 680px 84px #FFF , 742px 653px #FFF , 1284px 241px #FFF , 1809px 1876px #FFF , 295px 1854px #FFF , 1494px 669px #FFF , 1388px 1126px #FFF , 1684px 252px #FFF , 426px 1784px #FFF , 848px 717px #FFF , 24px 833px #FFF , 549px 1428px #FFF , 129px 1036px #FFF , 1310px 462px #FFF , 266px 995px #FFF , 185px 1714px #FFF , 1379px 1956px #FFF , 579px 1875px #FFF , 1205px 634px #FFF , 88px 1418px #FFF , 189px 736px #FFF , 213px 258px #FFF , 256px 691px #FFF , 223px 1379px #FFF , 1122px 776px #FFF , 1902px 343px #FFF , 1493px 154px #FFF , 1694px 1332px #FFF , 525px 160px #FFF , 326px 1965px #FFF , 1431px 888px #FFF , 1080px 1418px #FFF , 508px 473px #FFF , 1764px 161px #FFF , 1462px 586px #FFF , 881px 348px #FFF , 908px 984px #FFF , 472px 556px #FFF , 1854px 799px #FFF , 783px 1328px #FFF , 1688px 276px #FFF , 1616px 482px #FFF , 534px 1546px #FFF , 1687px 872px #FFF , 1658px 1741px #FFF , 725px 728px #FFF , 1239px 254px #FFF , 1429px 1766px #FFF , 561px 572px #FFF , 1763px 1097px #FFF , 1864px 655px #FFF , 1732px 205px #FFF , 1428px 217px #FFF , 366px 556px #FFF , 998px 1454px #FFF , 213px 647px #FFF , 966px 1352px #FFF , 54px 1023px #FFF , 1854px 1022px #FFF , 639px 1155px #FFF , 1421px 1271px #FFF , 1397px 1393px #FFF , 1964px 540px #FFF , 1477px 334px #FFF , 1948px 1850px #FFF , 1842px 1418px #FFF , 713px 1823px #FFF , 1191px 876px #FFF , 22px 711px #FFF , 379px 1660px #FFF , 562px 1885px #FFF , 130px 713px #FFF , 51px 62px #FFF , 1818px 335px #FFF , 1221px 1850px #FFF , 88px 1942px #FFF , 1028px 1358px #FFF , 1962px 1678px #FFF , 1123px 1760px #FFF , 275px 1255px #FFF , 469px 299px #FFF , 1502px 169px #FFF , 952px 935px #FFF , 1595px 358px #FFF , 657px 1066px #FFF , 1633px 1380px #FFF , 1110px 1793px #FFF , 743px 169px #FFF , 1346px 555px #FFF , 1590px 1148px #FFF , 1253px 1034px #FFF , 652px 733px #FFF , 291px 883px #FFF , 173px 355px #FFF , 40px 446px #FFF , 1437px 617px #FFF , 1092px 1507px #FFF , 932px 306px #FFF , 1580px 1774px #FFF , 1346px 576px #FFF , 1186px 1811px #FFF , 1810px 1564px #FFF , 1602px 1390px #FFF , 1001px 385px #FFF , 429px 618px #FFF , 1238px 479px #FFF , 496px 582px #FFF , 674px 1959px #FFF , 1694px 1705px #FFF , 515px 565px #FFF , 753px 463px #FFF , 422px 1638px #FFF , 1322px 192px #FFF , 900px 553px #FFF , 160px 1519px #FFF , 836px 160px #FFF , 67px 1863px #FFF , 1437px 1407px #FFF , 1846px 1824px #FFF , 927px 1594px #FFF , 715px 13px #FFF , 1149px 1603px #FFF , 343px 217px #FFF , 261px 1111px #FFF , 658px 1583px #FFF , 227px 346px #FFF , 360px 1940px #FFF , 1737px 840px #FFF , 1667px 311px #FFF , 235px 298px #FFF , 1003px 189px #FFF , 995px 587px #FFF , 708px 1984px #FFF , 886px 249px #FFF , 533px 513px #FFF , 1069px 368px #FFF , 111px 1476px #FFF , 1867px 323px #FFF , 1723px 816px #FFF , 320px 512px #FFF , 1834px 1073px #FFF , 1721px 1390px #FFF , 1950px 932px #FFF , 1867px 88px #FFF , 1108px 437px #FFF , 423px 1700px #FFF , 443px 1644px #FFF , 1642px 1392px #FFF , 493px 1652px #FFF , 250px 1708px #FFF;
    }

    #stars3 {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: transparent;
      box-shadow: 1613px 9003px #FFF , 814px 136px #FFF , 654px 125px #FFF , 1539px 412px #FFF , 735px 88px #FFF , 99px 563px #FFF , 1293px 1432px #FFF , 849px 431px #FFF , 121px 302px #FFF , 1494px 1859px #FFF , 1798px 1786px #FFF , 1064px 1699px #FFF , 660px 1093px #FFF , 1185px 575px #FFF , 361px 402px #FFF , 374px 1971px #FFF , 1821px 1651px #FFF , 1361px 1380px #FFF , 1274px 283px #FFF , 893px 856px #FFF , 1527px 1627px #FFF , 851px 1964px #FFF , 1454px 267px #FFF , 141px 724px #FFF , 1120px 1243px #FFF , 461px 613px #FFF , 194px 717px #FFF , 255px 1677px #FFF , 1247px 1394px #FFF , 791px 182px #FFF , 1273px 115px #FFF , 360px 122px #FFF , 802px 478px #FFF , 926px 1682px #FFF , 899px 1482px #FFF , 906px 1876px #FFF , 140px 668px #FFF , 1086px 893px #FFF , 620px 1529px #FFF , 773px 767px #FFF , 353px 57px #FFF , 237px 1302px #FFF , 343px 527px #FFF , 184px 1459px #FFF , 553px 961px #FFF , 41px 815px #FFF , 1277px 842px #FFF , 1525px 1062px #FFF , 1156px 57px #FFF , 1811px 1945px #FFF , 205px 1771px #FFF , 818px 1312px #FFF , 1577px 1732px #FFF , 103px 1930px #FFF , 113px 1805px #FFF , 609px 1410px #FFF , 1717px 16px #FFF , 1353px 1848px #FFF , 193px 233px #FFF , 1955px 581px #FFF , 1076px 1542px #FFF , 1106px 1636px #FFF , 858px 1159px #FFF , 320px 1212px #FFF , 614px 601px #FFF , 263px 913px #FFF , 1089px 1174px #FFF , 1003px 663px #FFF , 452px 25px #FFF , 1752px 1674px #FFF , 840px 786px #FFF , 535px 1830px #FFF , 115px 454px #FFF , 728px 1968px #FFF , 696px 634px #FFF , 1009px 371px #FFF , 268px 914px #FFF , 785px 1245px #FFF , 1354px 1849px #FFF , 693px 825px #FFF , 1846px 1401px #FFF , 300px 1952px #FFF , 1012px 148px #FFF , 607px 227px #FFF , 1057px 119px #FFF , 1163px 1296px #FFF , 1358px 1419px #FFF , 1915px 1371px #FFF , 871px 1198px #FFF , 498px 1709px #FFF , 207px 1284px #FFF , 736px 1172px #FFF , 259px 1399px #FFF , 1227px 1913px #FFF , 121px 1804px #FFF , 600px 1037px #FFF , 1728px 1167px #FFF , 1329px 1483px #FFF , 1727px 623px #FFF , 1629px 626px #FFF;
      animation: animStar 150s linear infinite;
    }
    #stars3:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 1613px 9003px #FFF , 814px 136px #FFF , 654px 125px #FFF , 1539px 412px #FFF , 735px 88px #FFF , 99px 563px #FFF , 1293px 1432px #FFF , 849px 431px #FFF , 121px 302px #FFF , 1494px 1859px #FFF , 1798px 1786px #FFF , 1064px 1699px #FFF , 660px 1093px #FFF , 1185px 575px #FFF , 361px 402px #FFF , 374px 1971px #FFF , 1821px 1651px #FFF , 1361px 1380px #FFF , 1274px 283px #FFF , 893px 856px #FFF , 1527px 1627px #FFF , 851px 1964px #FFF , 1454px 267px #FFF , 141px 724px #FFF , 1120px 1243px #FFF , 461px 613px #FFF , 194px 717px #FFF , 255px 1677px #FFF , 1247px 1394px #FFF , 791px 182px #FFF , 1273px 115px #FFF , 360px 122px #FFF , 802px 478px #FFF , 926px 1682px #FFF , 899px 1482px #FFF , 906px 1876px #FFF , 140px 668px #FFF , 1086px 893px #FFF , 620px 1529px #FFF , 773px 767px #FFF , 353px 57px #FFF , 237px 1302px #FFF , 343px 527px #FFF , 184px 1459px #FFF , 553px 961px #FFF , 41px 815px #FFF , 1277px 842px #FFF , 1525px 1062px #FFF , 1156px 57px #FFF , 1811px 1945px #FFF , 205px 1771px #FFF , 818px 1312px #FFF , 1577px 1732px #FFF , 103px 1930px #FFF , 113px 1805px #FFF , 609px 1410px #FFF , 1717px 16px #FFF , 1353px 1848px #FFF , 193px 233px #FFF , 1955px 581px #FFF , 1076px 1542px #FFF , 1106px 1636px #FFF , 858px 1159px #FFF , 320px 1212px #FFF , 614px 601px #FFF , 263px 913px #FFF , 1089px 1174px #FFF , 1003px 663px #FFF , 452px 25px #FFF , 1752px 1674px #FFF , 840px 786px #FFF , 535px 1830px #FFF , 115px 454px #FFF , 728px 1968px #FFF , 696px 634px #FFF , 1009px 371px #FFF , 268px 914px #FFF , 785px 1245px #FFF , 1354px 1849px #FFF , 693px 825px #FFF , 1846px 1401px #FFF , 300px 1952px #FFF , 1012px 148px #FFF , 607px 227px #FFF , 1057px 119px #FFF , 1163px 1296px #FFF , 1358px 1419px #FFF , 1915px 1371px #FFF , 871px 1198px #FFF , 498px 1709px #FFF , 207px 1284px #FFF , 736px 1172px #FFF , 259px 1399px #FFF , 1227px 1913px #FFF , 121px 1804px #FFF , 600px 1037px #FFF , 1728px 1167px #FFF , 1329px 1483px #FFF , 1727px 623px #FFF , 1629px 626px #FFF;
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
      .nav-item {
        .nav-link {
          padding: 0 15px;
          font-size: 18px;
          text-transform: uppercase;
          font-weight: bold;
          border-bottom: 3px solid transparent;
        }
        &.hvr-bounce-to-bottom:before {
          background: #ffb400;
        }
        &.active {
          .nav-link {
            color: #ffb400;
          }
        }
        &:hover {
          .nav-link {
            color: #fff;
            border-bottom: 3px solid #ffb400;
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
        font-family: 'Piedra', serif;
        text-transform: uppercase;
      }
      h1 {
        font-size: 60px;
        text-transform: uppercase;
          font-family: "Piedra", cursive !important;
        span {
          font-family: "Piedra", cursive !important;
          color: #ffb400;
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
            padding: 9px 13px;
          }
          &:nth-of-type(2) {
            background: $linkedin;
            padding: 9px;
          }
          &:nth-of-type(3) {
            background: $whatsapp;
            padding: 9px;
          }
          &:nth-of-type(4) {
            background: $github;
            padding: 9px;
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
</style>

<script>
/* eslint-disable */
import TypeIt from "typeit";

export default {
  computed: {
    route () {
      return this.$store.state.ROUTE
    }
  },
  methods: {
    goTo (link) {
      if (link.startsWith("/")) {
        window.location.pathname = link
      } else {
        window.open(link, "_blank")
      }
    }
  }
};
</script>
