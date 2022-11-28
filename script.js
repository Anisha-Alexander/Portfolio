import data from './data.json' assert{type: "json"}
const header =  document.getElementById('header')
const liarr = data.header.nav
console.log(data);

header.innerHTML=`
    <div class="container">
        <nav>
            <img src="images/namelogo.png">
            <ul id="nav-cont">${renderHead()}
            </ul>
        </nav>
  </div>
     
`


renderHead()
