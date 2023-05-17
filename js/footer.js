const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
   <div class="footer-content">
            <img src="img/logo3.PNG" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">pubicalyx</li>
                    <li><a href="#" class="footer-link">pubicalyx "splash"</a></li>
                    <li><a href="#" class="footer-link">pubicalyx "purple hawaiian"</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">carnosa</li>
                    <li><a href="#" class="footer-link">carnosa "outer-variegated"</a></li>
                    <li><a href="#" class="footer-link">carnosa "hindu rope"</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">khroniana</li>
                    <li><a href="#" class="footer-link">khroniana "super silver"</a></li>
                    <li><a href="#" class="footer-link">khroniana "black"</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about me</p>
        <p class="info">Little House of Hoyas founded 2023</p>
    `;
};

createFooter();
