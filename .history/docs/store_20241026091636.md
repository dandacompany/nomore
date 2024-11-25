# 매장 찾기 페이지 상세

- 구글 지도 API를 사용해 매장 위치를 표시한다.
- 좌측에 너비의 30%는 매장 위치 정보를 표시한다.
- 우측에 너비의 70%는 구글 지도를 표시한다.
- 매장 위치 정보의 내용은 store.json 데이터를 이용한다.
- 매장 위치 정보의 맨 위에는 지역명 찾기와 현위치 찾기 탭 버튼이 있다. 그 바로 아래 시도, 구 드롭다운 선택 버튼이 있고, 검색 버튼이 있다. 그 바로 아래에 매장 목록이 있다.
- 매장목록의 매장카드 정보 : 매장명, 매장주소, 전화번호, 영업시간 정보보가 있다. 각 카드는 배경색과 그림자는 없는 박스이며, 사이에 수평선이 있다.
- 매장목록 상단에는 검색결과 00개가 표시된다.
- 구글지도의 마커는 브랜드 로고로 커스텀 한다.

- 아래는 참고할 javascipt/Html 코드야.

```html
<!DOCTYPE html>
<html lang="ko">
 <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>카페 프랜차이즈 매장 위치</title>
  <link rel="stylesheet" href="section7.css" />

  <script
   type="module"
   src="https://unpkg.com/@googlemaps/extended-component-library@0.6"
  ></script>
  <link
   href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&family=Pretendard:wght@300;400;700&display=swap"
   rel="stylesheet"
  />
 </head>
 <body>
  <div id="section7" class="section-container">
   <header>
    <div class="since">
     <hr />
     <p>SINCE 2011</p>
     <hr />
    </div>
    <div class="title">
     <p>
      전국의 <span>60개 매장</span>과<br />
      함께합니다.
     </p>
    </div>
   </header>
   <main>
    <gmpx-api-loader
     key="AIzaSyCeCh0YoX3E1cyH5VK0jscFGmHQOJBzD7M"
     solution-channel="GMP_GE_mapsandplacesautocomplete_v1"
    >
    </gmpx-api-loader>
    <gmp-map center="36.5,127.5" zoom="7" map-id="DEMO_MAP_ID">
     <div
      slot="control-block-start-inline-start"
      class="place-picker-container"
     ></div>
     <gmp-advanced-marker></gmp-advanced-marker>
    </gmp-map>
    <div id="store-list">
     <input type="text" id="search-input" placeholder="매장명 검색" />
     <ul id="stores">
      <li data-lat="37.5665" data-lng="126.9780">
       <p><strong>동네카페 부평점</strong></p>
       <p>
        <span>서울시 부평구 부평로 123</span><br />
        <span>02-1234-5678</span>
       </p>
       <hr />
      </li>

      <li data-lat="37.4563" data-lng="126.7052">
       <p><strong>동네카페 원주점</strong></p>
       <p>
        <span>강원도 원주시 원주로 456</span><br />
        <span>033-9876-5432</span>
       </p>
       <hr />
      </li>

      <li data-lat="35.8714" data-lng="128.6014">
       <p><strong>동네카페 부평역점</strong></p>
       <p>
        <span>부산시 부평구 부평역로 789</span><br />
        <span>051-2345-6789</span>
       </p>
       <hr />
      </li>
      <li data-lat="35.1796" data-lng="129.0756">
       <p><strong>카페동네 일산점</strong></p>
       <p>
        <span>경기도 고양시 일산동구 일산로 101</span><br />
        <span>031-1234-5678</span>
       </p>
       <hr />
      </li>
      <li data-lat="37.5665" data-lng="126.9780">
       <p><strong>동네카페 강남점</strong></p>
       <p>
        <span>서울시 강남구 강남대로 202</span><br />
        <span>02-2345-6789</span>
       </p>
       <hr />
      </li>
      <li data-lat="37.4563" data-lng="126.7052">
       <p><strong>동네카페 홍대점</strong></p>
       <p>
        <span>서울시 마포구 홍익로 303</span><br />
        <span>02-3456-7890</span>
       </p>
       <hr />
      </li>
      <li data-lat="35.8714" data-lng="128.6014">
       <p><strong>동네카페 부산점</strong></p>
       <p>
        <span>부산시 해운대구 해운대해변로 404</span><br />
        <span>051-4567-8901</span>
       </p>
       <hr />
      </li>
      <li data-lat="35.1796" data-lng="129.0756">
       <p><strong>동네카페 광주점</strong></p>
       <p>
        <span>광주광역시 서구 광천동 505</span><br />
        <span>062-5678-9012</span>
       </p>
       <hr />
      </li>
      <li data-lat="37.1234" data-lng="127.5678">
       <p><strong>동네카페 대전점</strong></p>
       <p>
        <span>대전광역시 유성구 유성대로 606</span><br />
        <span>042-6789-0123</span>
       </p>
       <hr />
      </li>
      <li data-lat="36.7890" data-lng="127.1234">
       <p><strong>동네카페 수원점</strong></p>
       <p>
        <span>경기도 수원시 장안구 장안로 707</span><br />
        <span>031-7890-1234</span>
       </p>
       <hr />
      </li>
      <li data-lat="35.6789" data-lng="128.9876">
       <p><strong>동네카페 울산점</strong></p>
       <p>
        <span>울산광역시 남구 남부대로 808</span><br />
        <span>052-8901-2345</span>
       </p>
       <hr />
      </li>
      <li data-lat="37.6543" data-lng="126.5432">
       <p><strong>동네카페 인천점</strong></p>
       <p>
        <span>인천광역시 남동구 남동대로 909</span><br />
        <span>032-9012-3456</span>
       </p>
       <hr />
      </li>
      <li data-lat="36.5432" data-lng="127.6543">
       <p><strong>동네카페 제주점</strong></p>
       <p>
        <span>제주특별자치도 제원로 1010</span><br />
        <span>064-0123-4567</span>
       </p>
       <hr />
      </li>
      <li data-lat="35.4321" data-lng="128.3210">
       <p><strong>동네카페 여수점</strong></p>
       <p>
        <span>전라남도 여수시 여수대로 1111</span><br />
        <span>061-1234-5678</span>
       </p>
      </li>
     </ul>
    </div>
   </main>
   <script src="map.js"></script>
  </div>
 </body>
</html>

```
