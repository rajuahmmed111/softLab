import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  banners = [
    {
      image: '../../assets/01.jpg',
      title: 'Special Offers',
      description:
        'Some of the most common toppings are cheese, sausages, pepperoni.',
    },
    {
      image: '../../assets/02.jpg',
      title: 'A salad is a consisting of mixed vegetables',
      description: 'They are typically served chilled or at served warm.',
    },
    {
      image: '../../assets/03.png',
      title: 'Desserts can be defined as a concludes.',
      description: 'This definition includes ranging from fruits.',
    },
    {
      image: '../../assets/04.jpg',
      title: 'A burger is a patty a bun',
      description: 'Slices of raw onion, lettuce, bacon, mayonnaise.',
    },
    {
      image: '../../assets/05.png',
      title: 'Soup is a primarily liquid food',
      description: 'Hot soups are additionally solid ingredients in liquids.',
    },
    {
      image: '../../assets/06.png',
      title: 'Chickens are characterize',
      description: 'Exact size varies greatly among color in many breeds.',
    },
    {
      image: '../../assets/banner.jpg',
      title: 'A drinkis a liquid for human',
      description: 'In addition to their basic function of satisfying thirst.',
    },
    {
      image: '../../assets/01.jpg',
      title: 'Pizza is an Italian food',
      description:
        'It is made with different toppings. Some of the most common toppings.',
    },
  ];
}
