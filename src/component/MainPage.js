import React, {Component} from 'react';
import Axios from 'axios';
import NavBar from "./customview/NavBar";
import Footer from './customview/footer';
import '../css/customview/main.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    key: '1',
    text: '5 мая 2017 году утверждена Концепция Публичной нефинансовой отчетности'
  },
  {
    key: '2',
    text: '37% обследуемых госкомпаний используют м/н стандарты'
  },
  {
    key: '3',
    text: '955 компаний обследовано в 2017 году '
  },
  {
    key: '4',
    text: '550 компаний не выпустили отчеты в 2017 году'
  },
  {
    key: '5',
    text: '50 компаний использовали м/н стандарты в 2017 году'
  },
  {
    key: '6',
    text: 'Антикоррупционная деятельность и Закупки раскрываются наиболее полно'
  }

];


const dataUser = [{
  "_id": "5a36ff62a434022548fe3e30",
  "name": "Смешанный",
  "stratDate": "2017-12-17T23:36:02.329Z",
  "startBalance": 0,
  "realBalance": 0,
  "currency": "",
  "__v": 0,
  "tickets": [
    {
      "_id": "5a36ff62a434022548fe3e2d",
      "title": "Alfa",
      "type": "asdftyqwwer",
      "value": 234,
      "count": 2,
      "percent": 0,
      "__v": 0
    },
    {
      "_id": "5a36ff62a434022548fe3e2e",
      "title": "Apple",
      "type": "asdftyqwwer",
      "value": 123,
      "count": 2,
      "percent": 1,
      "__v": 0
    },
    {
      "_id": "5a36ff62a434022548fe3e2f",
      "title": "Tinkof",
      "type": "asdftyqwwer",
      "value": 321,
      "count": 2,
      "percent": 2,
      "__v": 0
    }
  ]
},
  {
    "_id": "5a36ff62a434022548fe3e30",
    "name": "Агресивный",
    "stratDate": "2017-12-17T23:36:02.329Z",
    "startBalance": 0,
    "realBalance": 0,
    "currency": "",
    "__v": 0,
    "tickets": [
      {
        "_id": "5a36ff62a434022548fe3e2d",
        "title": "Alfa",
        "type": "asdftyqwwer",
        "value": 32,
        "count": 2,
        "percent": 0,
        "__v": 0
      },
      {
        "_id": "5a36ff62a434022548fe3e2e",
        "title": "Upple",
        "type": "asdftyqwwer",
        "value": 123,
        "count": 2,
        "percent": 1,
        "__v": 0
      },
      {
        "_id": "5a36ff62a434022548fe3e2f",
        "title": "Pinkof",
        "type": "asdftyqwwer",
        "value": 44,
        "count": 2,
        "percent": 2,
        "__v": 0
      }
    ]
  }
]


//Your React component
// fetchExternalHTML: function (fileName) {
//   Ajax.getJSON('/myAPI/getExternalHTML/' + fileName).then(
//     response => {
//       this.setState({
//         extHTML: response
//       });
//     }, err => {
//       //handle your error here
//     }
//   );
// }

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  };


  onExiting() {
    this.animating = true;
  };

  onExited() {
    this.animating = false;
  };

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  };

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  };

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({activeIndex: newIndex});
  };

  onChangeItem = (index) => {
    console.log("index now :" + this.state.currentItem);
    this.setState({currentItem: index});
  };

  render() {

    const {activeIndex} = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem className='slider-block container-fluid px-0'
                      onExiting={this.onExiting}
                      onExited={this.onExited}
                      key={item.text}>
          <h5>
            {item.text}
          </h5>
        </CarouselItem>
      );
    });

    return (
      <div className='MainDiv'>
        <NavBar currenPage="mainPage"/>
        <div className='content'>
          <br/>
          <br/>
          <div className='container-fluid'>
            <h4>Новости</h4>
            <div className='row'>
              <div className='col-4'>
                some
              </div>
              <div className='col-4'>
                some
              </div>
              <div className='col-4'>
                some
              </div>
            </div>
          </div>
          <br/>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-4 text-justify'>
                <h4>О портале</h4>
                <p className='text_about'>
                  Корпоративная прозрачность и информационная открытость являются важными составляющими
                  бизнес-привлекательности и общественной приемлимости компаний. Национальное исследование крупнейших
                  российских компаний ежегодно обследует прозрачность российских организаций, а партнеры исследования
                  занимаются мониторингом тенденций в сфере корпоративной прозрачности в России и за рубежом.
                </p>
                <p>
                  Будьте в центре
                  <br/>
                  корпоративной прозрачности
                  <br/>
                  вместе с нами.
                </p>
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}>
                  {slides}
                  <CarouselIndicators className='position-relative' items={items} activeIndex={activeIndex}
                                      onClickHandler={this.goToIndex}/>
                </Carousel>
              </div>
              <div className='col-8'>
                <h4>Текущий рейтинг</h4>
              </div>
            </div>
          </div>
        </div>

        <Footer/>

        {/*<Row>*/}
        {/*<Col xs="3" md="3" lg={{size: 2, offset: 1}}>*/}
        {/*<MenuContainer*/}
        {/*onChangeItem={this.onChangeItem}*/}
        {/*data={dataUser}/>*/}
        {/*</Col>*/}
        {/*<Col xs="1" md="9" lg={{size: 6, offset: 1}}>*/}
        {/*<PortfolioContainer*/}
        {/*data={dataUser[this.state.currentItem]}/>*/}
        {/*</Col>*/}
        {/*</Row>*/}
      </div>
    );
  }
}

export default MainPage;
