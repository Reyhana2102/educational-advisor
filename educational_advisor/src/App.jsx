import { useState } from 'react'
// import header from './header'

import './App.css'

function App() {
  return (
    <>
      <header>
        <div className='head-left'><img src="../img/Best-Idea.png" alt="" /></div>
        <div className="head-mid">
          <ul>
            <li><a href="#">Universitetlər</a></li>
            <li><a href="#">İxtisaslar</a></li>
            <li><a href="mailto:reyhanamusayeva@gmail.com">Bizimlə əlaqə</a></li>
          </ul>
        </div>
        <div className="head-right">
          <button className='btn1'><a href="#">Daxil ol</a></button>
          <button className='btn2'><a href="#">Qeydiyyatdan keç</a></button>
        </div>
    </header>
    <main>
      <section className='sec1'>
        <h2>Əziz abituriyentlər və valideynlər! Hər birinizi xoş gördük!</h2>
        <p>
  Saytımızın məqsədi ixtisas seçimi ərəfəsində sizə seçmək istədiyiniz universitetlə, ixtisaslarla bağlı qaranlıq qalan sualları cavablandırmaqdır.</p>
<p>
Azərbaycanda 34 dövlət, 10 özəl və 6 xüsusi təyinatlı Ali Təhsil Müəssisəsi fəaliyyət göstərir. Bu universitetlərdə təklif olunan ixtisasların dəqiq sayı müxtəlif mənbələrdən və universitetlərin proqramlarına görə dəyişə bilər. 2024/2025-cü tədris ili üçün Azərbaycanda ali təhsil müəssisələrində ümumilikdə 400-dən çox fərqli ixtisas mövcuddur. Bu ixtisaslar müxtəlif sahələrə aid olub, bakalavr, magistr və doktorantura pillələrində tədris olunur. Təklif olunan ixtisasların sayı və çeşidi universitetdən asılı olaraq dəyişir və hər il yenilənir.</p>
<p>Siz saytda bir sıra universitetlərim müxtəlif ixtisaslarında təhsil alan tələbələrin oxuduqları Ali Təhsil Müəssisələri haqqında fikirlərini öyrənə, onların məsləhətlərindən yararlana bilərsiniz. Həmçinin bəzi ixtisasların tədris proqramı ilə yaxından tanış olacaqsınız.
</p>
      </section>
      <section className='sec2'>
        <h2> Hansı ali təhsil müəssisələri ilə maraqlanırsınız?</h2>
        <p>Giriş hissəsində söz açdığımız ali təhsil müəssisələrinin siyahısını sizlərə təqdim edirik</p>
        <table className='table1'></table>
      </section>
    </main>
    </>
  )
}

export default App
