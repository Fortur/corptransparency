import React, {Component} from 'react';
import NavBar from "./customview/NavBar";
import Footer from './customview/footer';
import '../css/customview/main.css';
import '../css/arrow.css';
import mapImg from '../img/map.jpg'
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

class AboutUsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {activeIndex: 0};
  }

  render() {

    return (
      <div className='MainDiv'>
        <NavBar currenPage="aboutUs"/>

        <div className='content'>
          <div className='mx-5 text-center'>
            <h1>О РСС и исследовании</h1>
            <img className='img-responsive' src={mapImg}/>
            <div className='text-justify'>
              <p>
                Региональные сети являются элементом инфраструктуры Международного совета по интегрированной
                отчетности (МСИО). Они созданы в 14 странах мира (Австралия, Англия, Бразилия, Германия, Индия, Испания,
                Россия, Голландия, Швейцария, США, Турция, Франция, ЮАР и Япония). Сети предназначены для создания
                механизмов поддержки качества отчетности в разных странах мира и продвижения интегрированной отчетности.
                Региональные сети взаимодействуют с МСИО, в том числе в процессе разработки и совершенствования
                Международного стандарта по интегрированной отчетности (The International Integrated Reporting
                Framework), Стандарт «ИО» вышел в декабре 2013 года. Региональные сети представляют собой
                профессиональные объединения людей и организаций, заинтересованных в повышении качества корпоративной
                отчетности. Участниками таких общественных объединений являются представители бизнеса (компаний и
                бизнес-ассоциаций), профессиональных организаций экспертов, аудиторов и консультантов, образовательных
                учреждений, финансовых учреждений (инвестиционное сообщество), бирж, органов власти и др.
              </p>
              <p>
                Российская региональная сеть по интегрированной отчетности (РРС) создана в 2012 году. Проводятся
                заседания Делового клуба РРС, совместно с партнерами реализауется ряд проектов (Ежемесячный Новостной
                Дайджест, Национальный реест интегрированной отчетности, Ежегодное исследование корпоративной
                прозрачности
                крупнейших российских компаний и др.). Создан официальный сайт РРС (www.ir.org.ru), на котором
                публикуются
                материалы, связанные с интегрированной отчетностью: новости, анонсы мероприятий РРС и МСИО, нормативные
                документы, методические материалы и др.
              </p>
              <p>
                Официальным партнером РРС является ГК «Да-Стратегией», которая в 2012 году инициировала общественный
                проект профессионального сообщества - исследование корпоративной прозрачности крупнейших российских
                компаний. Настоящее исследование направлено на ежегодный обзор и анализ состояния прозрачности
                крупнейших
                российских компаний. Задачи исследования:
              </p>
              <ul>
                <li> обследование корпоративной прозрачности крупнейших российских компаний;
                </li>
                <li> выявление лучших практик корпоративной прозрачности, в том числе раскрытия информации через
                  механизмы отчетности;
                </li>
                <li> составление рейтинга и субрейтингов корпоративной прозрачности.
                </li>
              </ul>
              <p> Одной из специфических характеристик данного исследования является отсутствие жюри, члены которого
                проводят оценку отчетности. Причина - стремление минимизировать степень субъективности оценок. В данном
                исследовании по принципу «Да/Нет» фиксируется наличие/отсутствие той или иной информации в отчетах или
                на корпоративных сайтах.
                <br/>
                Проект ежегодно совершенствуется и расширяется.
              </p>
            </div>
            <div id='arrow' className='row text-left mx-0'>
              <div className="col-3">
                <div className='arrow-right'></div>
                <div>
                  <p> 2013</p>
                  <p> Исследование РРС</p>
                  <p> Партнеры: ДаС, Downstream</p>
                  <p> Выборка: 100 компаний</p>
                  <p> 3 заключения на модель и методи</p>
                </div>
              </div>
              <div className="col-3">
                <div className='arrow-right'></div>
                <div>
                  <p> 2014</p>
                  <p> Исследование РРС</p>
                  <p> Партнеры: ДаС, Downstream, Нексиа Пачоли</p>
                  <p> Верификация с компаний, экспертами</p>
                  <p> Аудит</p>
                  <p> Выборка: 721 компаний</p>
                </div>
              </div>
              <div className="col-3">
                <div className='arrow-right'></div>
                <div>
                  <p> 2015</p>
                  <p> Исследование РРС</p>
                  <p> Партнеры: ДаС, Downstream, Нексиа Пачоли, РАН (ИНЭС)</p>
                  <p> Введены уровни прозрачности</p>
                  <p> Верификация с компаний, экспертами</p>
                  <p> Аудит</p>
                  <p> Перевод на анг. (на сайте МСИО)</p>
                  <p> Выборка: 700 компаний</p>
                </div>
              </div>
              <div className="col-3">
                <div className='arrow-right'></div>
                <div>
                  <p> 2016</p>
                  <p> Исследование РРС</p>
                  <p> Партнеры: ДаС, Downstream, Нексиа Пачоли, РАН (ИНЭС)</p>
                  <p> Взаимодействие с Клубом разработчиков рейтингов</p>
                  <p> Введена сокращенная методика для III уровня, новый уровень, индексы раскрытия информации</p>
                  <p> Верификация с компаний, экспертами</p>
                  <p> Аудит</p>
                  <p> Перевод на анг. (на сайте МСИО)</p>
                  <p> Выборка: 854 компаний</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default AboutUsPage;
