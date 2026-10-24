# 말씀결 소개 사이트 (GitHub Pages)

Play 스토어에 필요한 공개 페이지 세 가지를 담은 정적 사이트이다.

- `index.html`: 앱 소개. Play 등록정보의 **개발자 웹사이트**로 쓴다.
- `privacy.html`: 개인정보처리방침. Play Console의 **개인정보처리방침 URL**로 쓴다.
- `app-ads.txt`: AdMob 판매자 확인 파일. 도메인 **루트**에 있어야 한다.

## 게시 방법 (무료)

`app-ads.txt`는 도메인 루트(`https://도메인/app-ads.txt`)에 있어야 하므로, 저장소 하위 경로가 붙는
프로젝트 페이지(`ashegyu.github.io/저장소/`)가 아니라 **사용자 사이트**를 쓴다.

1. GitHub에서 공개 저장소 `ashegyu.github.io`를 만든다(이름이 정확히 `GitHub아이디.github.io`여야 한다).
2. 이 폴더의 파일(`.nojekyll` 포함)을 그 저장소 최상위에 올린다.
3. 저장소 Settings → Pages에서 Branch를 `main` / `(root)`로 두고 저장한다.
4. 몇 분 뒤 다음 주소가 열리는지 확인한다.
   - https://ashegyu.github.io/
   - https://ashegyu.github.io/privacy.html
   - https://ashegyu.github.io/app-ads.txt
5. Play Console → 스토어 등록정보 → 연락처 세부정보의 웹사이트에 `https://ashegyu.github.io`,
   앱 콘텐츠 → 개인정보처리방침에 `https://ashegyu.github.io/privacy.html`을 넣는다.
6. AdMob → 앱 → app-ads.txt 탭에서 확인(크롤링에 최대 24시간 정도 걸린다).

게시 전 `index.html`, `privacy.html`의 (운영자 이름)·(연락 이메일)·(날짜)를 채운다. 공개 페이지이므로 공개해도 되는 연락처를 쓴다.
