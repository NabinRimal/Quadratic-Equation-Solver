let btn = document.getElementsByClassName("rootButton")[0];
let coefxsqr = document.getElementById("coffXsquare");
let coefx = document.getElementById("coffX");
let constant = document.getElementById("constant");
let textbox = document.getElementById("thirdbox");

const findroots = () => {
  //converting to number
  let a = parseInt(coefxsqr.value);
  let b = parseInt(coefx.value);
  let c = parseInt(constant.value);

  // -------------------
  textbox.innerHTML = "";
  let text = document.createElement("p");
  textbox.appendChild(text);
  textbox.className = "thirdbox";

  if (
    coefxsqr.value != "" &&
    coefx.value != "" &&
    constant.value != "" &&
    a != 0
  ) {
    //creating new element

    //logic
    let discr = Math.pow(b, 2) - 4 * a * c;
    let sqr = Math.sqrt(discr);
    let proot = (-b + sqr) / (2 * a);
    proot = proot.toFixed(2);
    let nroot = (-b - sqr) / (2 * a);
    nroot = nroot.toFixed(2);

    let realvalue = -b / (2 * a);
    realvalue = realvalue.toFixed(2);
    let imagvalue = Math.sqrt(discr * -1) / (2 * a);
    imagvalue = imagvalue.toFixed(2);

    if (discr >= 0) {
      text.innerHTML = `
      Equation :  ${a}x<sup>2</sup> + ${b}x + ${c} = 0 <br>
      Discriminant = ${discr} <br>
      Roots will be Real <br>
      The Roots are  (${proot} , ${nroot}) `;
    } else if (discr < 0) {
      if (imagvalue > 0) {
        text.innerHTML = ` 
        Equation :  ${a}x<sup>2</sup> + ${b}x + ${c} = 0 <br>
        Discriminant = ${discr}   <br>
        Roots will be Imaginary<br>
        The roots are ( ${realvalue}+${imagvalue}i , ${realvalue}-${imagvalue}i )`;
      }
      if (imagvalue < 0) {
        text.innerHTML = ` 
        Equation :  ${a}x<sup>2</sup> + ${b}x + ${c} = 0 <br>
        Discriminant = ${discr}<br>
        Roots will be Imaginary<br>
        The roots are ( ${realvalue}${imagvalue}i, ${realvalue}+${
          -1 * imagvalue
        }i )`;
      }
    }
  } else if (
    coefxsqr.value == "" ||
    coefx.value == "" ||
    constant.value == ""
  ) {
    text.innerHTML = `
        Please Enter all the coefficients
        `;
  } else if (a == 0 && b != 0 && (c != 0 || c == 0)) {
    let root = -(c / b);
    root = root.toFixed(2);
    text.innerHTML = `
    Since the coefficient of X<sup>2</sup> is zero,
        The root is   ${root} `;
  } else if ((a == 0 && b == 0) || (a == 0 && b == 0 && c == 0)) {
    text.innerHTML = `
     The values of x does not exist `;
  }
};

btn.addEventListener("click", findroots);
