import React from 'react';
import { svgImages } from '../../../img';
import { robogirl } from '../../../img';
import { Link } from 'react-scroll';

function Main() {
  return (
    <main className="App-main">
      <section className="Greetings" id="about">
        <div className="Firstly-spans">
          <span>Дзвоню сам</span>
          <span>Приймаю дзвінки</span>
        </div>
        <div className="Main-title">
          <p>EMET - РОБОТ-ОПЕРАТОР. КОМУНІКАЦІЇ НОВОГО ПОКОЛІННЯ</p>
          <h1>
            Emet поговорить із клієнтом, автоматично зафіксує інформацію,
            сформує звіт та передасть відповідальному співробітнику на обробку у
            готовому вигляді
          </h1>
          <div>
            <Link
              to="details"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="Menu-button"
            >
              замовити послугу
            </Link>
          </div>
        </div>
        <span className="Lastly-span">Слухаю й аналізую інші дзвінки</span>
      </section>
      <section className="Usage">
        <div>
          <p id="forwhom">
            як використовувати<span>.</span>
          </p>
          <h2>
            система EMET дозволяє повністю імітувати людину у телефонних
            розмовах
          </h2>

          <ul>
            <li>Робот звільняє операторів для складніших завдань</li>
            <li>
              EMET миттєво масштабується під ваші потреби. На відміну від
              операторів, він не обідає/не хворіє/не ходить у відпустку, а найм
              та навчання йому не потрібно – все, що потрібно, він вже має
            </li>
            <li>
              Робот не робить помилок. Він завжди правильно відпрацює закладений
              у нього скрипт
            </li>
            <li>
              Не злиться і не нервує. 5 спроб або 10 – він виконає та повторить
              все, що потрібно
            </li>
            <li>
              EMET кмітливий – він може говорити цифри та дати, вулиці та імена
              та читати прізвища. А ще він вміє розуміти та запам’ятовувати
              відповіді!
            </li>
            <li>
              Завдяки точній транскрибації голосу в текст, ви зможете вирішити
              багато завдань бізнесу
            </li>
          </ul>
        </div>

        <div>
          <img src={robogirl} alt="" />
        </div>
      </section>
      <section className="Example" id="example">
        <div>
          <p>приклад застосування Emet</p>
          <h2>
            клієнти, які спілкуються з EMET’ом,{' '}
            <span>
              не можуть <br /> відрізнити{' '}
            </span>
            його<span> від живого оператора</span>
          </h2>
          <audio
            controls
            src="https://4service.group/wp-content/uploads/2022/04/EMET_NPS_UKRPOST_3.mp3"
          ></audio>
        </div>
      </section>
      <section className="Areas-of-use">
        <div>
          <p>
            області застосування EMET<span id="areasofuse">.</span>
          </p>
          <h2>
            <span>ЕМЕТ. </span>
            Система-робот із високим рівнем «людяності» з легкістю
            <br /> <span>розвантажить або замінить операторів </span>
            Call-центру
            <br /> допоможе вам <span>проконтролювати та проаналізувати </span>
            роботу операторів
          </h2>
        </div>
        <div>
          <ul>
            <li>
              <img src={svgImages.telephone} alt="" />
              <p>
                ПРИЙМАННЯ ЗАМОВЛЕНЬ АБО ПРОДАЖІ
                <br />
                <span>
                  Ви можете автоматизувати холодні дзвінки або отримання
                  замовлень, доручивши додзвон та первинну пропозицію ЕМЕТУ
                </span>
              </p>
            </li>
            <li>
              <img src={svgImages.mouthpiece} alt="" />
              <p>
                ІНФОРМУВАННЯ АБО ЗАЛУЧЕННЯ <br />
                <span>
                  Сповіщення про заборгованість, інформування про нові продукти
                  або зміну в розкладі роботи – та робота з якою робот
                  справляється найкраще
                </span>
              </p>
            </li>
            <li>
              <img src={svgImages.headphones} alt="" />
              <p>
                АКТУАЛІЗАЦІЯ ДАНИХ І ДОВІДКА, ПІДТРИМКА КЛІЄНТІВ
                <br />
                <span>
                  Ці завдання вирішуються за допомогою розпізнавання голосу. У
                  будь-якому часовому поясі робота завжди виконана «на
                  відмінно». База відповідей доступна до розвантаження у
                  зручному форматі
                </span>
              </p>
            </li>
            <li>
              <img src={svgImages.mail} alt="" />
              <p>
                РОЗПІЗНАННЯ МОВИ
                <br />
                <span>
                  Система постійно оцінює великий діапазон стану бесіди, веде
                  розмову, майже не відрізняється від людини
                </span>
              </p>
            </li>
            <li>
              <img src={svgImages.clocks} alt="" />
              <p>
                КОНТРОЛЬ І АНАЛІЗ РОБОТИ ЖИВИХ ОПЕРАТОРІВ
                <br />
                <span>
                  В Call-центр, відділі продажу, технічній підтримці, відділі
                  контролю якості чи службі безпеки
                </span>
              </p>
            </li>
            <li>
              <img src={svgImages.questioning} alt="" />
              <p>
                ОПИТУВАННЯ й АНКЕТУВАННЯ
                <br />
                <span>
                  індивідуальної, і, якщо необхідно, знеособленої роботи з
                  клієнтом Відмінний інструмент для продуктивної,
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="Advances">
        <p>
          безперечні переваги ЕМЕТА перед живими операторами
          <span id="benefits">.</span>
        </p>
        <div>
          <ul>
            <li>
              <span>
                ДОБРА <br /> ПАМ’ЯТЬ
              </span>
              <span>
                пам’ятає все, що було сказано у розмові та будує свої відповіді
                виходячи з отриманих даних
              </span>
            </li>
            <li>
              <span>
                РОЗУМНА <br /> СИСТЕМА
              </span>
              <span>
                навчається при кожному дзвінку, з кожним разом стає ще
                розумнішим
              </span>
            </li>
            <li>
              <span>
                ГЕТЬ <br /> ШАБЛОННІСТЬ
              </span>
              <span>
                веде нелінійний діалог, відповідаючи на запитання клієнтів
              </span>
            </li>
            <li>
              <span>
                ВИНОСЛИВА <br /> РОБОЧА <br /> КОНЯЧКА{' '}
              </span>
              <span>може повністю взяти на себе вхідні та вихідні дзвінки</span>
            </li>
            <li>
              <span>
                ВСЕ <br /> СХОПЛЕНО
              </span>
              <span>фіксує всю інформацію, отриману від клієнта</span>
            </li>
            <li>
              <span>
                СВОБОДА <br /> ПОЛЬОТУ
              </span>
              <span>приймає та здійснює необмежену кількість дзвінків</span>
            </li>
          </ul>
        </div>

        <Link
          to="technicaladvantages"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          &#8595; техничнi переваги
        </Link>
      </section>
      <section className="Capabilities">
        <p>
          які проблеми вирішує<span id="capabilities">.</span>
        </p>
        <div>
          <ul>
            <li>
              <p>Пошук проблемних діалогів</p>
              <p>
                Знаходьте проблеми за ключовими словами або відхилення
                кількісних параметрів від норми
              </p>
            </li>
            <li>
              <p>Підвищення дисципліни</p>
              <p>
                Оператори починають працювати краще, коли знають, що дзвінки
                аналізуються
              </p>
            </li>
            <li>
              <p>Захист від витоків інформації</p>
              <p>
                Знаходьте загрози відведення клієнтів за ключовими словами:
                «Відправлю номер», «Запишіть номер», «Перезвоню з мобільного» і
                т.д.
              </p>
            </li>
            <li>
              <p>Аналіз роботи операторів</p>
              <p>
                Контролюйте операторів, у розмовах із якими клієнти зазнають
                складнощів
              </p>
            </li>
            <li>
              <p>Зниження непрофільного навантаження</p>
              <p>
                Аналізуйте причини затягнутих розмов, систематизуйте теми
                звернень
              </p>
            </li>
            <li>
              <p>Пошук точок зростання</p>
              <p>Клієнти самі розповідають про свої проблеми та побажання</p>
            </li>
            <li>
              <p>Скорочення кількості повторних звернень</p>
              <p>
                Розширюйте скрипти операторів та базу знань компанії на основі
                даних із діалогів
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="Technical-advantages" id="technicaladvantages">
        <p>
          технічні переваги<span>.</span>
        </p>
        <ul>
          <li>
            <span>
              МАСШТАБОВА <br /> НІСТЬ
            </span>
            <span>
              навчається при кожному дзвінку, з кожним разом стає ще розумнішим
            </span>
          </li>
          <li>
            <span>
              НЕЙРОННІ <br /> МЕРЕЖІ
            </span>
            <span>може повністю взяти на себе вхідні та вихідні дзвінки</span>
          </li>
          <li>
            <span>
              ГНУЧКА <br /> ЗВІТНІСТЬ
            </span>
            <span>приймає та здійснює необмежену кількість дзвінків</span>
          </li>
          <li>
            <span>ІНТЕГРАЦІЯ</span>
            <span>з більшістю корпоративних систем</span>
          </li>
        </ul>
        <Link
          to="benefits"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          &#8593;безперечні переваги
        </Link>
      </section>
      <section className="Buttons">
        <ul>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="details"
            >
              замовити послугу
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="details"
            >
              уточнити деталі
            </Link>
          </li>
        </ul>
      </section>
      <section className="Form" id="details">
        <div>
          <h2>
            Ми будемо <br /> раді <br /> допомогти <br /> Вам <br />{' '}
            <span className="Form-title">покращити </span>
            <span>
              <br />
              бізнес
            </span>
          </h2>
        </div>
        <div>
          <ul>
            <li>
              <p>Имя</p>
              <input type="text" />
            </li>
            <li>
              <p>Компания</p>
              <input type="text" />
            </li>
            <li>
              <p>Номер телефона</p>
              <input type="tel" />
            </li>
            <li>
              <p>Email</p>
              <input type="email" />
            </li>
            <li>
              <p>Ваш вопрос</p>
              <textarea rows="3"></textarea>
            </li>
          </ul>
        </div>
      </section>
      <section className="Form-button">
        <input type="submit" value="Отправить"></input>
      </section>
    </main>
  );
}

export default Main;
