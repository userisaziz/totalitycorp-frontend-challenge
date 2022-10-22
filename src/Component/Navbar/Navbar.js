import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar_container">
        <ul class="nav_list">
          <li class="nav_items">
            <a href="">
              <svg
                fill="#f5f5f7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                class="apple_logo"
              >
                <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z" />
              </svg>
            </a>
          </li>
          <li class="nav_items">
            <a href="">Store</a>
          </li>
          <li class="nav_items">
            <a href="">Mac</a>
          </li>
          <li class="nav_items">
            <a href="">iPad</a>
          </li>
          <li class="nav_items">
            <a href="">iPhone</a>
          </li>
          <li class="nav_items">
            <a href="">Watch</a>
          </li>
          <li class="nav_items">
            <a href="">AirPods</a>
          </li>
          <li class="nav_items">
            <a href="">TV & Home</a>
          </li>
          <li class="nav_items">
            <a href="">Only on Apple</a>
          </li>
          <li class="nav_items">
            <a href="">Accessories</a>
          </li>
          <li class="nav_items">
            <a href="">Support</a>
          </li>
          <li class="nav_items">
            <a href="">
              <svg
                fill="#f5f5f7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="20px"
                height="20px"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
              </svg>
            </a>
          </li>
          <li class="nav_items">
            <a href="">
              <svg
                fill="#f5f5f7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="20px"
                height="20px"
              >
                <path d="M 8 1 C 6.351563 1 5 2.351563 5 4 L 3 4 C 2.734375 4 2.515625 4.207031 2.5 4.472656 L 2 13.472656 C 1.992188 13.609375 2.042969 13.746094 2.136719 13.84375 C 2.230469 13.945313 2.363281 14 2.5 14 L 13.5 14 C 13.636719 14 13.769531 13.945313 13.863281 13.84375 C 13.957031 13.746094 14.007813 13.609375 14 13.472656 L 13.5 4.472656 C 13.484375 4.207031 13.265625 4 13 4 L 11 4 C 11 2.351563 9.648438 1 8 1 Z M 8 2 C 9.101563 2 10 2.898438 10 4 L 6 4 C 6 2.898438 6.898438 2 8 2 Z M 3.472656 5 L 5 5 L 5 7 L 6 7 L 6 5 L 10 5 L 10 7 L 11 7 L 11 5 L 12.527344 5 L 12.96875 13 L 3.03125 13 Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <nav class="mobile_navbar_container">
        <ul class="mobile_navbar_list">
          <li class="mobile_nav_items">
            <a class="menu_button" onclick="openMenu(this)">
              <div class="line1"></div>
              <div class="line2"></div>
            </a>
          </li>
          <li class="mobile_nav_items">
            <a href="">
              <svg
                fill="#f5f5f7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                class="apple_logo"
              >
                <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z" />
              </svg>
            </a>
          </li>
          <li class="mobile_nav_items">
            <a href="">
              <svg
                fill="#f5f5f7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="20px"
                height="20px"
              >
                <path d="M 8 1 C 6.351563 1 5 2.351563 5 4 L 3 4 C 2.734375 4 2.515625 4.207031 2.5 4.472656 L 2 13.472656 C 1.992188 13.609375 2.042969 13.746094 2.136719 13.84375 C 2.230469 13.945313 2.363281 14 2.5 14 L 13.5 14 C 13.636719 14 13.769531 13.945313 13.863281 13.84375 C 13.957031 13.746094 14.007813 13.609375 14 13.472656 L 13.5 4.472656 C 13.484375 4.207031 13.265625 4 13 4 L 11 4 C 11 2.351563 9.648438 1 8 1 Z M 8 2 C 9.101563 2 10 2.898438 10 4 L 6 4 C 6 2.898438 6.898438 2 8 2 Z M 3.472656 5 L 5 5 L 5 7 L 6 7 L 6 5 L 10 5 L 10 7 L 11 7 L 11 5 L 12.527344 5 L 12.96875 13 L 3.03125 13 Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <div class="expansionMenu">
        <div class="searchBar_Container">
          <form action="" class="searchForm">
            <div class="searchFormWrapper">
              <button class="searchSubmitButton" type="submit">
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="18px"
                  height="18px"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                </svg>
              </button>
              <input
                type="text"
                name="search"
                id="search"
                class="searchInput"
              />
              <button class="searchResetButton" type="reset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="18px"
                  height="18px"
                >
                  <polygon
                    fill="#ffffff"
                    points="20.58496,8.00195 15,13.58606 9.41504,8.00195 8.00098,9.41602 13.58582,15 8.00098,20.58398 9.41504,21.99805 15,16.41394 20.58496,21.99805 21.99902,20.58398 16.41418,15 21.99902,9.41602"
                  />
                  <path
                    fill="#ffffff"
                    d="M15,0C6.72852,0,0,6.72852,0,15s6.72852,15,15,15s15-6.72852,15-15S23.27148,0,15,0z M15,28 C7.83203,28,2,22.16797,2,15S7.83203,2,15,2s13,5.83203,13,13S22.16797,28,15,28z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div class="mobile_item_menu_container">
          <ul class="mobile_item_menu">
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                Store
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                Mac
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                iPad
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                iPhone
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                Watch
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                AirPods
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                TV & Home
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                Only on Apple
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                Accessories
              </a>
            </li>
            <li class="mobile_menu_items">
              <a href="" class="mobile_menu_item_links">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
