const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
   
        <div class="nav">
            <img src="./img/logo2.PNG" class="brand-logo" alt="logo for little house of hoyas">
             <h1 id="page-name">Little House of Hoyas</h1>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search plants">
                    <button class="search-btn">search</button>
                    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    <a href="#"><i class="fa-solid fa-user"></i></a>
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item>"><a href="#" class="link">Home</a></li>
            <li class="link-item>"><a href="#" class="link">Carnosa</a></li>
            <li class="link-item>"><a href="#" class="link">Australis</a></li>
            <li class="link-item>"><a href="#" class="link">Wayetti</a></li>
            <li class="link-item>"><a href="#" class="link">Pubicalyx</a></li>
            <li class="link-item>"><a href="#" class="link">Khroniana</a></li>
        </ul>
    
`;
};
createNav();
