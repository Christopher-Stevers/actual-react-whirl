import style from './body.module.scss';
const text=`Whirl Creek Farm is an organic family farm in Perth County, Ontario's agricultural heartland. We started working toward chemical free farming  nearly 50 years ago. Now we provide premium meats such as certified organic pork and grassfed beef.

We make it our mission to produce high quality meat for you the consumer. Since 1974 we've been fine tuning our production to offer ever-more nutritious and sustainable products. All our animals are raised in humane surroundings with a focus on organic production. Besides growing the best meat we can, we also produce grains for feed and flour. These include spelt, wheat, corn, soy, and barley. While most of this goes to the animals, we do offer whole spelt kernels and wheat for human consumption. If you grind your own flour this is the place for you!

We offer both delivery and pickup options. Currently delivery is limited to Perth County and Waterloo region, and includes a $40 fee on orders under $300. If you do come out to purchase food from us and would like to take a closer look at the farm please let us know ahead of time and, schedule permitting, we'd be happy to show you how we grow your food.
` ;
function Body() {
    return (<div className={style.body}>
        <article><p className={style.p}>

<img className={style.img} src="src\bodyImg.webp" alt='cow'></img>{text}</p></article>
        </div>
    );
  }
  export default Body;
  