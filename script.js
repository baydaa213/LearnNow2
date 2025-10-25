//الخيارات في الدرس الاول عند اختيار نعم
function select_yes() {
  const div2 = document.getElementById('buy');
  const div1 = document.getElementById('follow');
  var input1=document.getElementById('ask_y');
  if (input1.checked) {
    div1.style.translate = '0px';
    div2.style.translate='1000px';
  } 
  else {
    div1.style.translate = '1000px';
  }
  }
  //الخيارات في الدرس الاول عند اختيار لا
  function select_no() {
    const div1 = document.getElementById('follow');
    const div2 = document.getElementById('buy');
var input2 = document.getElementById('ask_n')
if (input2.checked) {
  div2.style.translate = '0px';
  div1.style.translate='1000px';
  
}
else {
  div.style.translate = '1000px';
}
  }

  var nam_ques=11,nam_right=0,count=1,ques='q';
  var degree=document.getElementById('result');

  //دالة تنفذ عند اختيار الاجابة الصحيحة
  function right_choice(param){
    count++;
    nam_right++;
   param.style.color="rgba(65, 172, 8, 1)";
   go_follow();
   if(count==nam_ques){
    result();
   }
  }

  //دالة تنفذ عند اختيار الاجابة الخاطئة
  function wrong_choice(param){
    count++;
   param.style.color='red';
   go_follow();

   if(count==nam_ques){
    result();
   }
  }
//دالة للانتقال للسؤال التالي
  function go_follow() {
    //اخفاء للسؤال الاول
    setTimeout(function go(){document.getElementById(ques+(count-1)).style.display='none'},300);
   //اظهار السؤال التالي
   setTimeout(function go(){ document.getElementById(ques+count).style.display='block'},300);
   
  }
//دالة لعرض النتائج
  function result() {
    document.getElementById('res').style.display='block';
  setTimeout(function res(){  if(nam_right>7){
    degree.innerHTML='لقد حصلت على '+nam_right+'/10 <br> ممتاز جداً يبدوا أنك متميز!❤ ';
    degree.style.color='rgba(81, 182, 27, 1)';
  }
  else if(nam_right<=7&&nam_right>5){
    degree.innerHTML='لقد حصلت على '+nam_right+'/10 <br>💙رائع حاول مرة أخرى وستتقدم أكثر';
    degree.style.color='rgb(255, 210, 9)';
  }
  else
  {
    degree.innerHTML='لقد حصلت على '+nam_right+ '/10 <br> اوبس ماهذا؟😶 يبدوا أنك لم تدرس بما يكفي راجع دروسك وعد مرة أخرى <br> نحن بانتظارك!😄💜';
    degree.style.color='rgb(255, 6, 6)';
  }document.getElementById('goToMain').style.display='block'; },2000);
  }

  function openFullscreen(img) {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");
    overlayImg.src = img.src;
    overlay.style.display = "flex";
  }
  function closeFullscreen() {
    document.getElementById("overlay").style.display = "none";
  }

//= Scroll to Top Button ===== -->

document.addEventListener("DOMContentLoaded", function () {
  // إنشاء الزر تلقائيًا إذا لم يكن موجود
  const btn = document.createElement("button");
  btn.id = "scrollTopBtn";
  btn.innerHTML = '<img src="/icons/-noup-arrow_18533951.png" alt="" style="width: 30px;height: 30px;">';
  document.body.appendChild(btn);

  // تنسيق الزر (داكن وفخم)
  const style = document.createElement("style");
  style.innerHTML = `
    #scrollTopBtn {
      position: fixed;
      bottom: 25px;
      right: 25px;
      z-index: 9999;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(145deg, #1a1a1a, #111);
      border: 1px solid #2d2d2d;
      color: #ffd700;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 12px rgba(255, 215, 0, 0.2);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease-in-out;
    }

    #scrollTopBtn.show {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    #scrollTopBtn i {
      transition: transform 0.3s;
    }

    #scrollTopBtn:hover {
      background: linear-gradient(145deg, #222, #111);
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
      transform: translateY(-5px);
    }

    #scrollTopBtn:hover i {
      transform: translateY(-3px);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // إظهار الزر عند النزول
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // عند الضغط عليه
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});


  
