import brand from '../brand.config';
import RotatingBottle from '../components/RotatingBottle';

// SVG content generators — accept brand color
const NAV_TEXT_SVG = `<svg class="nav-text" height="100.329" width="100.327" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano"><defs><clippath id="A"><path d="M0 0h100.327v100.329H0z" fill="${brand.primaryColor}"></path></clippath></defs><g transform="matrix(-1 0 0 -1 100.327 100.329)"><path d="M.223 45.54l4.76.287-4.949 2.851-.034.568 5.668.341.034-.568-4.768-.287 4.957-2.851.034-.568-5.668-.341zm.915-6.079l3.107 2.386 2.177.378-.1.56-2.177-.378-3.732 1.215.11-.632 3.158-.953-2.654-1.953zm5.385-3.283l-.718 2.482 1.158.851-.167.578-4.809-3.548.178-.617 5.958-.425-.167.577zm-.5.033l-3.262.224 2.639 1.93zm-1.586-6.696l.436.178-.6 1.459 4.822 1.967-.215.526-4.821-1.967-.6 1.467-.436-.178zm2.6-4.999l5 2.7-.271.5-2.337-1.263-1.463 2.709 2.337 1.263-.27.5-5-2.7.27-.5 2.244 1.213 1.464-2.709-2.245-1.213zm.936-1.427l.31-.477 4.759 3.098-.31.477zm2.659-3.746l.353-.447 4.457 3.52-.353.447zm5.309-5.806l4.047 3.878-.393.411-3.232-3.1 1.849 4.54-.287.3-4.6-1.643 3.22 3.086-.393.411-4.047-3.878.416-.434 5.009 1.795-2.007-4.928zm4.707-3.942l3.531 4.445-.445.354-1.655-2.079-2.411 1.916 1.653 2.08-.445.354-3.533-4.446.445-.354 1.587 2 2.411-1.915-1.587-2zm2.227-.936l1.137 1.79 1.817-1.154.253.4-1.817 1.154 1.154 1.818 2.023-1.285.253.4-2.5 1.59-3.049-4.8 2.5-1.59.253.4zm9.538.691l-.51.252-4.935-2.889 2.117 4.283-.51.252-2.516-5.091.51-.252 4.932 2.882-2.113-4.275.51-.252zm2.716-7.059l-.534 3.881.75 2.078-.535.193-.75-2.078-2.9-2.64.6-.218 2.392 2.272.382-3.273z" fill="${brand.primaryColor}"></path><g clip-path="url(#A)" fill="${brand.primaryColor}"><path d="M36.96 1.779l.835 3.476c.07.45.315.854.683 1.123a1.48 1.48 0 0 0 1.165.138 1.46 1.46 0 0 0 .969-.646 1.74 1.74 0 0 0 .09-1.313l-.835-3.476.553-.133.833 3.468a2.14 2.14 0 0 1-.175 1.713c-.667.909-1.892 1.205-2.9.7a2.14 2.14 0 0 1-.937-1.446l-.833-3.468zm8.148 2.167c-.196-.155-.318-.385-.337-.634-.042-.444.235-.857.663-.985s.886.063 1.096.457.112.881-.234 1.164-.843.282-1.187-.002m9.4 1.935l-.568-.028L51.034.928 50.801 5.7l-.568-.028L50.51 0l.568.028 2.907 4.917.233-4.763.568.028zm5.799-4.853l-2.351 3.133-.353 2.181-.561-.091.353-2.181L56.138.352l.633.1.988 3.147 1.92-2.673zm3.343 5.349l-2.49-.689-.837 1.168-.58-.16 3.492-4.85.619.171.493 5.953-.58-.16zm-.039-.5l-.261-3.259-1.9 2.66zm6.676-1.665l-.173.438-1.466-.579-1.912 4.844-.529-.209 1.912-4.844-1.473-.582.173-.438zm5.031 2.544l-2.642 5.027-.5-.264 1.236-2.352-2.725-1.433-1.236 2.352-.5-.265 2.642-5.026.5.264-1.187 2.258 2.725 1.433 1.187-2.258zm-1.603 5.715l3.044-4.794.48.305-3.044 4.794zm3.345 2.314l3.47-4.498.451.348-3.47 4.498zm9.338.75l-3.833 4.091-.415-.389 3.061-3.267-4.519 1.9-.3-.283 1.591-4.622-3.049 3.255-.415-.389 3.833-4.091.439.411-1.739 5.028 4.9-2.063zm3.994 4.658l-4.405 3.583-.359-.441 2.061-1.676-1.943-2.389-2.061 1.677-.359-.441 4.406-3.583.359.441-1.979 1.61 1.943 2.389 1.979-1.61zm.96 2.218l-1.777 1.157 1.175 1.8-.395.257-1.175-1.8-1.8 1.175 1.308 2.008-.395.257-1.618-2.485 4.766-3.1 1.618 2.485-.395.257zm-.581 9.547l-.258-.507 2.833-4.968-4.258 2.166-.258-.507 5.062-2.574.258.507-2.825 4.964 4.251-2.162.258.507zm7.089 2.634l-3.887-.49-2.07.774-.2-.533 2.07-.774 2.606-2.935.225.6-2.245 2.418 3.277.344zm.536 1.832l-3.466.875a1.72 1.72 0 0 0-1.115.7 1.48 1.48 0 0 0-.125 1.167 1.46 1.46 0 0 0 .657.961 1.74 1.74 0 0 0 1.313.075l3.466-.874.139.551-3.458.872a2.14 2.14 0 0 1-1.716-.158c-.915-.658-1.222-1.878-.729-2.891a2.14 2.14 0 0 1 1.435-.953l3.458-.872zm-2.08 8.165c.153-.198.381-.322.63-.344.444-.047.859.225.993.651s-.053.887-.445 1.101-.88.121-1.167-.221-.291-.839-.011-1.187m-1.826 9.421l.021-.568 4.892-2.962-4.774-.179.021-.568 5.675.213-.021.568-4.884 2.963 4.766.179-.021.568zm4.92 5.746l-3.16-2.315-2.185-.328.084-.562 2.185.328 3.7-1.3-.1.635-3.136 1.024 2.7 1.892zm-5.309 3.403l.661-2.5-1.177-.824.154-.582 4.889 3.437-.164.62-5.947.561.154-.581zm.5-.044l3.256-.3-2.682-1.869zm1.739 6.652l-.44-.168.562-1.473-4.866-1.856.2-.531 4.866 1.856.565-1.48.44.168zm-2.487 5.065l-5.056-2.585.259-.506 2.365 1.209 1.4-2.741-2.365-1.21.259-.506 5.056 2.585-.259.506-2.271-1.161-1.4 2.741 2.271 1.161zm-6.031-1.057l.299-.484 4.827 2.987-.299.484zM85.5 77.122l.343-.455 4.538 3.419-.343.455zm-.297 8.886l-4.134-3.786.384-.42 3.3 3.023-1.952-4.5.28-.306 4.639 1.538-3.286-3.008.384-.419 4.133 3.789-.406.443-5.048-1.681 2.118 4.881zm-4.62 4.05l-3.633-4.365.437-.364 1.7 2.042 2.367-1.97-1.7-2.042.437-.364 3.632 4.365-.437.364-1.632-1.961-2.367 1.969 1.632 1.961zm-2.201.983l-1.177-1.764-1.791 1.195-.262-.392 1.791-1.2-1.2-1.791-1.993 1.33-.262-.392 2.467-1.646 3.157 4.73-2.466 1.646-.262-.392zm-9.553-.473l.5-.264 5 2.776-2.214-4.233.5-.264 2.632 5.032-.5.264-5-2.769 2.21 4.226-.5.264zm-2.553 7.12l.445-3.892-.8-2.061.53-.205.8 2.061 2.964 2.572-.6.232-2.443-2.217-.307 3.281zm-1.824.556l-.914-3.456c-.08-.449-.335-.847-.709-1.107a1.48 1.48 0 0 0-1.168-.111 1.46 1.46 0 0 0-.954.668c-.192.413-.213.885-.06 1.314l.914 3.456-.55.145-.912-3.448a2.14 2.14 0 0 1 .138-1.717c.647-.923 1.864-1.245 2.883-.763a2.14 2.14 0 0 1 .969 1.424l.912 3.448zm-8.194-1.982a.89.89 0 0 1 .351.626c.052.443-.216.862-.64 1s-.887-.043-1.106-.432-.131-.879.208-1.169.836-.301 1.187-.025m-9.443-1.723l.568.015 3.016 4.859.127-4.775.568.015-.151 5.677-.568-.015-3.017-4.851-.126 4.767-.568-.015zm-5.687 4.983l2.279-3.186.3-2.189.563.078-.3 2.189 1.342 3.688-.636-.088-1.06-3.124-1.861 2.719zm-3.459-5.268l2.5.632.81-1.186.583.147-3.38 4.929-.622-.157-.629-5.94.583.147zm.05.5l.336 3.252 1.838-2.7zm-6.638 1.817l.163-.442 1.479.545 1.8-4.886.534.2-1.8 4.886 1.486.548-.163.442zm-5.089-2.431l2.527-5.086.509.253-1.182 2.379 2.757 1.37 1.182-2.379.509.253-2.527 5.085-.509-.253 1.135-2.284-2.757-1.37-1.135 2.284zm-1.945-1.181l2.936-4.861.487.294-2.936 4.861zm-3.802-2.571l3.368-4.572.458.337-3.368 4.572zm-5.534-4.776l3.739-4.176.424.379-2.983 3.334 4.475-2 .309.276-1.486 4.654 2.975-3.323.424.38-3.739 4.176-.448-.4 1.625-5.066-4.857 2.173zm-4.093-4.567l4.323-3.682.369.433-2.022 1.722 2 2.344 2.022-1.723.369.433-4.327 3.68-.369-.433 1.942-1.654-2-2.344-1.942 1.654zm-1.011-2.2l1.75-1.2-1.215-1.777.389-.266 1.215 1.777 1.777-1.215-1.353-1.978.389-.266 1.674 2.448-4.694 3.21-1.674-2.448.389-.266zm.365-9.553l.269.5-2.719 5.031 4.207-2.262.269.5-5 2.689-.269-.5 2.716-5.027-4.2 2.258-.269-.5zm-7.147-2.471l3.9.4 2.051-.821.211.528-2.052.821-2.538 2.994-.239-.6 2.189-2.468-3.284-.27zm-.579-1.815l3.445-.954c.448-.085.844-.344 1.1-.721a1.48 1.48 0 0 0 .1-1.169 1.46 1.46 0 0 0-.679-.946c-.415-.187-.888-.203-1.315-.045l-3.445.954-.152-.548 3.437-.952a2.14 2.14 0 0 1 1.719.118c.931.635 1.269 1.849.8 2.874a2.14 2.14 0 0 1-1.413.986l-3.437.952zm1.89-8.215a.89.89 0 0 1-.621.358c-.443.058-.865-.205-1.008-.628s.032-.888.419-1.111.877-.142 1.172.194.31.833.038 1.187"></path></g></g></svg>`;

const LOGO_MENU_SVG = `<svg height="33.876" id="MENU" viewBox="0 0 62.354 33.876" width="62.354" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip-path"><rect data-name="Rectangle 6" fill="#ffffff" height="33.876" id="Rectangle_6" width="62.354"></rect></clipPath></defs><g data-name="BUFFALO LOGO" id="BUFFALO_LOGO"><g clip-path="url(#clip-path)" data-name="Group 6" id="Group_6"><path d="M101.538,134.76a16.686,16.686,0,0,1-9.882-3.214,8.138,8.138,0,0,1-.892.424,17.642,17.642,0,0,0,21.548,0,8.08,8.08,0,0,1-.892-.424,16.684,16.684,0,0,1-9.881,3.214" data-name="Path 10" fill="${brand.primaryColor}" id="Path_10" transform="translate(-70.36 -101.766)"></path><path d="M62.362,16.292a16.5,16.5,0,0,1,32.932,0c.311.424.606.821.879,1.177.006-.176.014-.352.014-.53a17.364,17.364,0,0,0-34.718,0c0,.178.008.354.014.53.273-.356.569-.753.879-1.177" data-name="Path 11" fill="${brand.primaryColor}" id="Path_11" transform="translate(-47.651 -0.001)"></path><path d="M118.61,123.078c3.216,0,5.823-.565,5.823-1.263s-2.607-1.263-5.823-1.263-5.823.566-5.823,1.263,2.607,1.263,5.823,1.263" data-name="Path 12" fill="${brand.primaryColor}" id="Path_12" transform="translate(-87.433 -93.261)"></path><path d="M111.674,65.089c-.024-.07-.594-1.7-1.838-1.7a1.1,1.1,0,1,0-.009,2.2c.687.016,1.478.016,1.486.016h.534Z" data-name="Path 13" fill="${brand.primaryColor}" id="Path_13" transform="translate(-84.28 -49.035)"></path><path d="M157.877,64.483a1.109,1.109,0,0,0-1.116-1.1c-1.244,0-1.814,1.635-1.838,1.7l-.173.509h.534c.008,0,.8,0,1.485-.016a1.109,1.109,0,0,0,1.107-1.1" data-name="Path 14" fill="${brand.primaryColor}" id="Path_14" transform="translate(-119.963 -49.035)"></path><path d="M24.593,37.139A5.73,5.73,0,0,1,23.476,33.6a4.939,4.939,0,0,1,.965-2.51,3.2,3.2,0,0,1-1.034-3.3c1.018-3.361,4.447-2.056,6.272-3.822a2.993,2.993,0,0,0,.979-2.208,3.077,3.077,0,0,0-3.114-3.038,3.367,3.367,0,0,0-1.466.411c-3.939,1.793-10.563,12.933-12.731,14.931-2.35,2.166-7.9,2.074-9.59-2.329-2.4-6.253,5.88-10.091,5.88-10.091a9.616,9.616,0,0,0-9.265,7c-2.136,6.894,5.244,14.4,13.35,10.861.983-.429,3.291-1.412,3.291-1.412a5.312,5.312,0,0,0-2.162,3.178,3.95,3.95,0,0,0,.282,2.568s7.709,1.835,9.459-6.7" data-name="Path 15" fill="${brand.primaryColor}" id="Path_15" transform="translate(0 -14.477)"></path><path d="M171.283,28.641a9.616,9.616,0,0,0-9.265-7s8.284,3.838,5.88,10.091c-1.692,4.4-7.239,4.495-9.59,2.329-2.169-2-8.792-13.138-12.731-14.931a3.366,3.366,0,0,0-1.466-.411A3.077,3.077,0,0,0,141,21.752a2.994,2.994,0,0,0,.979,2.208c1.825,1.766,5.254.461,6.272,3.822a3.2,3.2,0,0,1-1.034,3.3,4.937,4.937,0,0,1,.965,2.51,5.729,5.729,0,0,1-1.117,3.544c1.75,8.531,9.459,6.7,9.459,6.7a3.95,3.95,0,0,0,.282-2.569,5.313,5.313,0,0,0-2.162-3.178s2.308.983,3.29,1.412c8.106,3.537,15.487-3.967,13.35-10.861" data-name="Path 16" fill="${brand.primaryColor}" id="Path_16" transform="translate(-109.302 -14.477)"></path><path d="M128.016,50.041a1.81,1.81,0,0,0-1.436-1.433.52.52,0,0,1-.461-.494c-.328-3.119-.341-3.119-.341-3.119H124.55s-.012,0-.341,3.119a.519.519,0,0,1-.461.494,1.811,1.811,0,0,0-1.436,1.433,4.08,4.08,0,0,0-.125.458c-.352,1.651-.94,4.128-.94,4.128a3.619,3.619,0,0,1,3.921.6,3.6,3.6,0,0,1,3.913-.6s-.587-2.477-.94-4.128a3.983,3.983,0,0,0-.125-.458m-2.848,4.171s0,.071,0,.175c0-.086,0-.175,0-.175m0,.343v.14c0-.068,0-.128,0-.14" data-name="Path 17" fill="${brand.primaryColor}" id="Path_17" transform="translate(-93.991 -34.808)"></path><path d="M122.246,92.738a1.473,1.473,0,0,0-.94-2.746,4.4,4.4,0,0,0-2.227,1.185v0a4.411,4.411,0,0,0-2.229-1.187,1.473,1.473,0,0,0-.94,2.746c.94.4,1.41.275,1.692.917a1.135,1.135,0,0,1-1.1,1.535,1.152,1.152,0,0,1-1.161-1.076c-.282-1.559-.911-1.483-.911-1.483l-1.043,4.235a19.687,19.687,0,0,1,5.643-.825h.009c.027,0,.051,0,.08,0a19.682,19.682,0,0,1,5.643.826l-1.023-4.239s-.649-.073-.931,1.486a1.152,1.152,0,0,1-1.161,1.076,1.135,1.135,0,0,1-1.1-1.535c.282-.642.752-.517,1.692-.918" data-name="Path 18" fill="${brand.primaryColor}" id="Path_18" transform="translate(-87.9 -69.614)"></path></g></g></svg>`;

const BRAND_STYLES = `
  .bottle { pointer-events: none; }
  .bottle-wrapper--proxy, .bottle-wrapper--three { position: absolute; transform-origin: 50% 50%; will-change: transform, opacity; }
  .bottle-wrapper--proxy { overflow: hidden; pointer-events: none; visibility: hidden; }
  .bottle-wrapper--three { aspect-ratio: 685 / 1028; opacity: 0; width: auto; }
  .bottle-three { width: 100%; height: 100%; opacity: 0; transition: opacity 500ms ease; }
  .bottle-three.is-loaded { opacity: 1; }
  .bottle-three canvas { display: block; width: 100%; height: 100%; }
  .brand-link:hover { width: 12.19em; }
  .brand-link:hover .b-logo-w { opacity: 1; }
  .text-color-primary, .history-heading-sm, .history-text-sm, .history-heading, .history-heading-lg, .taste-heading, .taste-heading-sm, .taste-heading-2, .taste-heading-4, .arr-down, .fa-icon { color: ${brand.primaryColor} !important; }
  .divider { background-color: ${brand.primaryColor} !important; }
  .brand-link:hover { background-color: ${brand.primaryColor} !important; }
  .submit-button { background-color: ${brand.primaryColor} !important; }
`;

export default function Home() {
  const htmlContent = `
    <div class="w-embed">
      <style>
        ${BRAND_STYLES}
      </style>
    </div>

    <!-- Navigation Bar -->
    <div class="navbar w-nav" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-w-id="9f7c94a4-7d71-f47d-8d79-81a437ab8baa" role="banner">
      <div class="nav-container">
        <div class="nav-wrap">
          <a class="brand w-nav-brand" data-w-id="9f7c94a4-7d71-f47d-8d79-81a437ab8bac" href="#">
            <img alt="" class="logo" loading="lazy" src="${brand.assets.logo}"/>
            <div class="nav-text w-embed" data-w-id="176ab12c-8bc6-4c54-ce50-4450992dc23e">
              ${NAV_TEXT_SVG}
            </div>
            <div class="nav-logo w-embed">
              ${LOGO_MENU_SVG}
            </div>
          </a>
          <nav class="nav-menu w-nav-menu" role="navigation">
            <div class="nav-list">
              <a class="nav-link" href="#about-us">About Us</a>
              <a class="nav-link" href="#Nyathi">${brand.name}</a>
              <a class="nav-link" href="#Beer">Beer</a>
              <a class="nav-link" href="#contact">Contact Us</a>
            </div>
            <div class="nav-menu-r">
              <a class="brand-link w-inline-block" href="#">
                <div class="logo-wrap">
                  <img alt="" class="b-logo" loading="lazy" src="${brand.assets.bLogo}"/>
                  <img alt="" class="b-logo-w" loading="lazy" src="${brand.assets.bLogoW}"/>
                </div>
                <div class="brand-link-text">View ${brand.companyName}</div>
              </a>
              <div class="en-toggle">
                <div class="text-block-2">en</div>
              </div>
            </div>
          </nav>
          <div class="menu-button w-nav-button">
            <div class="menu-wrap--icon">
              <img alt="" class="m-bg" loading="lazy" src="${brand.assets.rotateTextSvg}"/>
              <div class="menu-lines">
                <div class="m-line"></div>
                <div class="m-line-2"></div>
                <div class="m-line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Page Content -->
    <div class="page-wrap" id="top">
      
      <!-- Hero Snap Section -->
      <div class="header s-scroll wf-section" data-w-id="31ddbbd8-b368-2c39-9119-de17e6afaef8">
        <div class="container-large">
          <div class="header-wrap">
            <div class="header-info">
              <h1 class="heading">${brand.content.hero.heading}</h1>
              <div class="lottie-animation" data-animation-type="lottie" data-autoplay="1" data-default-duration="11.5" data-direction="1" data-duration="0" data-is-ix2-target="0" data-loop="1" data-renderer="svg" data-src="${brand.assets.txtsLottie}" data-w-id="dad30eec-fe06-1799-4c4c-e2c6655bd02b"></div>
            </div>
          </div>
        </div>
        <a class="scroll-down w-inline-block" href="#about-us">
          <div class="scroll-down-text">scroll down</div>
          <div class="arr-down"></div>
        </a>
      </div>

      <!-- History Snap Section -->
      <div class="section s-scroll wf-section" data-w-id="e60236a9-0ed0-e42c-be5e-1f11450751a5" id="about-us">
        <div class="image-holder">
          <img alt="" class="img-fluid history-bg" loading="lazy" sizes="(max-width: 479px) 0px, 100vw" src="${brand.assets.historyBg}" />
          <img alt="" class="img-fluid history-bg-mb" loading="lazy" sizes="(max-width: 479px) 0px, 100vw" src="${brand.assets.historyBgMb}" />
          <img alt="" class="img-fluid history-bg-mb-2" loading="lazy" sizes="100vw" src="${brand.assets.historyBgMb2}"/>
        </div>
        <div class="container-large h100">
          <div class="section-wrap">
            <div class="section-holder sc1-holder">
              <div class="heading-holder">
                <h2 class="history-heading-sm">${brand.content.history.heading1}</h2>
                <h2 class="history-text-sm is-text">${brand.content.history.heading2}</h2>
                <h2 class="history-heading">${brand.content.history.heading3}</h2>
                <h2 class="history-heading-lg">${brand.content.history.heading4}</h2>
              </div>
              <div class="content-holder">
                <h3 class="text-color-primary">${brand.content.history.title}</h3>
                <div class="divider"></div>
                <p>${brand.content.history.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Story Snap Section -->
      <div class="section s-scroll section-3 wf-section" data-w-id="9f86b16e-250f-161d-d60a-a073688ff29c" id="${brand.name}">
        <div class="container-large h100">
          <div class="section-wrap section-2-wrap">
            <div class="holder-center">
              <div class="heading-holder-2">
                <h2 class="story-heading-1">${brand.content.story.heading1}</h2>
                <h2 class="story-heading-2">${brand.content.story.heading2}</h2>
                <h2 class="story-heading-3">${brand.content.story.heading3}</h2>
              </div>
              <div class="content-holder content-holder-2" data-w-id="d48a7ea5-1fa0-b1ad-2a24-b71e53a45f3b">
                <h3 class="text-color-primary">${brand.content.story.title}</h3>
                <div class="divider"></div>
                <p class="text-color-white">${brand.content.story.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hand">
          <img alt="" class="hand-img" loading="lazy" sizes="(max-width: 479px) 0px, (max-width: 991px) 100vw, 90vw" src="${brand.assets.handImg}" />
          <img alt="" class="hand-img-mb" loading="lazy" src="${brand.assets.handImgMb}"/>
        </div>
        <div class="bg">
          <img alt="" class="img-fluid" loading="lazy" sizes="100vw" src="${brand.assets.storyBg}" />
        </div>
      </div>

      <!-- Brand snap section -->
      <div class="section s-scroll section-4 wf-section" data-w-id="88010252-f470-901e-81e1-e5271892f48d" id="Beer">
        <div class="container-large h100">
          <div class="section-wrap bottom">
            <div class="sc-holder">
              <div class="heading-holder-2-w">
                <h2 class="h2-heading-sm">${brand.content.brand.heading1}</h2>
                <h2 class="history-heading">${brand.content.brand.heading2}</h2>
                <h2 class="history-heading-lg">${brand.content.brand.heading3}</h2>
              </div>
              <div class="content-holder">
                <h3 class="text-color-primary">${brand.content.brand.title}</h3>
                <div class="divider"></div>
                <p class="text-color-white">${brand.content.brand.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sc4-bg">
          <img alt="" class="full-wd sc4-bg-img" loading="lazy" sizes="(max-width: 479px) 0px, (max-width: 991px) 100vw, 65vw" src="${brand.assets.brandBg}" />
          <img alt="" class="sc4-bg-img-mb" loading="lazy" sizes="100vw" src="${brand.assets.brandBgMb}"/>
        </div>
        <div class="boys">
          <div class="boys-image">
            <img alt="" class="full-wd" loading="lazy" sizes="(max-width: 991px) 100vw, 55vw" src="${brand.assets.boysImg}" />
          </div>
          <div class="drump">
            <img alt="" class="drump-img" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 25vw, (max-width: 991px) 20vw, 15vw" src="${brand.assets.drumImg}" />
          </div>
        </div>
      </div>

      <!-- Recipe snap section -->
      <div class="section s-scroll section-5 wf-section" data-w-id="872eb63c-8407-c1b6-5c4a-33caf430983c">
        <div class="container-large h100 static">
          <div class="section-wrap center">
            <div class="row-1">
              <div class="stats">
                <div class="stat-c1">
                  <h5>${brand.content.recipe.stat1.title}</h5>
                  <p class="text-sm">${brand.content.recipe.stat1.desc}</p>
                </div>
                <div class="stat-c2">
                  <h5 class="stat-lg">${brand.content.recipe.stat2.title}</h5>
                  <p class="text-sm">${brand.content.recipe.stat2.desc}</p>
                </div>
              </div>
              <div class="heading-holder-5">
                <h2 class="taste-heading-sm">${brand.content.recipe.heading1}</h2>
                <h2 class="taste-heading">${brand.content.recipe.heading2}</h2>
                <h2 class="taste-heading-4">${brand.content.recipe.heading3}</h2>
                <h2 class="taste-heading-2">${brand.content.recipe.heading4}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="bg">
          <img alt="" class="img-fluid" loading="lazy" sizes="100vw" src="${brand.assets.storyBg}" />
        </div>
      </div>

      <!-- Brewery snap section -->
      <div class="section s-scroll section-6 wf-section" data-w-id="4db6becd-94dc-bb5c-f479-1a4a8388b5df">
        <div class="container-large h100 static">
          <div class="section-wrap">
            <div class="row-info">
              <div class="heading-holder-6">
                <h2 class="b-heading">${brand.content.brewery.heading1}</h2>
                <h2 class="b-heading-2">${brand.content.brewery.heading2}</h2>
              </div>
              <div class="content-holder">
                <div class="divider"></div>
                <div class="text-grid">
                  <p>${brand.content.brewery.paragraph1}</p>
                  <p>${brand.content.brewery.paragraph2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Storage / Shake It Snap Section (Section 7) -->
      <div class="section s-scroll section-7 wf-section" data-w-id="18553703-9c64-c608-4e7a-fa2c092cd9d5">
        <div class="container-large h100 static">
          <div class="section-wrap section-wrap-5">
            <div class="row">
              <div class="stat-c3">
                <h5>${brand.content.usage.storage.title}</h5>
                <p class="text-sm">${brand.content.usage.storage.desc}</p>
              </div>
              <div class="stat-c4">
                <h5>${brand.content.usage.shake.title}</h5>
                <p class="text-sm">${brand.content.usage.shake.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-left">
          <img alt="" class="full-wd" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 60vw, (max-width: 991px) 80vw, 60vw" src="${brand.assets.storageLeftBg}" />
        </div>
        <div class="bg-right">
          <img alt="" class="full-wd" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 70vw, (max-width: 991px) 80vw, 60vw" src="${brand.assets.storageRightBg}" />
        </div>
      </div>

      <!-- Contact Us snap section -->
      <div class="section s-scroll contact-section wf-section" id="contact">
        <div class="container-large h100">
          <div class="section-wrap">
            <div class="contact-heading-holder">
              <h2 class="contact-heading-sm">${brand.content.contact.heading1}</h2>
              <h2 class="contact-heading">${brand.content.contact.heading2}</h2>
              <h2 class="contact-heading-2">${brand.content.contact.heading3}</h2>
            </div>
            <div class="contact-wrap">
              <div class="contact-form-w">
                <div class="form-block w-form">
                  <form data-name="Email Form" id="email-form" method="get" name="email-form">
                    <div class="form-control">
                      <label class="field-label" for="name">NAME</label>
                      <input class="text-field w-input" data-name="Name" id="name" maxlength="256" name="name" placeholder="Enter your name here" required="" type="text"/>
                    </div>
                    <div class="form-control">
                      <label class="field-label" for="Email">EMAIL</label>
                      <input class="text-field w-input" data-name="Email" id="Email" maxlength="256" name="Email" placeholder="Enter your email here" required="" type="email"/>
                    </div>
                    <div class="form-control">
                      <label class="field-label" for="Message">MESSAGE</label>
                      <input class="text-field w-input" data-name="Message" id="Message" maxlength="256" name="Message" placeholder="Enter your message here" required="" type="text"/>
                    </div>
                    <div class="submit-w">
                      <input class="submit-button w-button" data-wait="Please wait..." type="submit" value="Submit"/>
                    </div>
                  </form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div class="contact-info">
                <div class="contact-info-list">
                  <div class="contact-info-item">
                    <div class="label-wrap">
                      <div class="text-block">Phone:</div>
                    </div>
                    <a class="link" href="tel:${brand.content.contact.phone.replace(/\s+/g, '')}">${brand.content.contact.phone}</a>
                  </div>
                  <div class="contact-info-item">
                    <div class="label-wrap">
                      <div class="text-block">Email:</div>
                    </div>
                    <a class="link" href="mailto:${brand.content.contact.email}">${brand.content.contact.email}</a>
                  </div>
                  <div class="contact-info-item">
                    <div class="label-wrap">
                      <div class="text-block">Address:</div>
                    </div>
                    <a class="link" href="mailto:${brand.content.contact.email}">${brand.content.contact.address}</a>
                  </div>
                </div>
                <div class="socials">
                  <div class="text-block">SOCIAL MEDIA</div>
                  <div class="socials-links">
                    <a class="social-link w-inline-block" href="${brand.socials.facebook}" target="_blank">
                      <div class="fa-icon"></div>
                    </a>
                    <a class="social-link w-inline-block" href="${brand.socials.twitter}" target="_blank">
                      <div class="fa-icon"></div>
                    </a>
                    <a class="social-link w-inline-block" href="${brand.socials.instagram}">
                      <div class="fa-icon"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-wrap">
              <div class="footer-inner">
                <p class="footer-text">${brand.content.contact.copyright}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg">
          <img alt="" class="img-fluid" loading="lazy" sizes="100vw" src="${brand.assets.storyBg}" />
        </div>
        <a class="to-up w-inline-block" href="#top">
          <div class="text-block-3"></div>
        </a>
      </div>

    </div>
  `;

  return (
    <>
      <div
        style={{ display: 'contents' }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <RotatingBottle lottieSrc={brand.assets.bottleLottie} src={brand.assets.bottleGlb} />
    </>
  );
}
