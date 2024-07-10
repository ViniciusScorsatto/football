import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      {
        id: 1,
        fullName: 'Lionel Messi',
        club: 'Inter Miami',
        position: 'Forward',
        marketValue: '€50M',
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQeXEHnK4BoXoRcF-AmZz7Rn2UuBYvmq70A&s",
      },
      {
        id: 2,
        fullName: 'Cristiano Ronaldo',
        club: 'Al-Nassr',
        position: 'Forward',
        marketValue: '€45M',
        photoUrl: "https://i.pinimg.com/736x/8d/e8/72/8de87212e16e9f6e02dc8e24aa1a1baa.jpg",
      },
      {
        id: 3,
        fullName: 'Kevin De Bruyne',
        club: 'Manchester City',
        position: 'Midfielder',
        marketValue: '€70M',
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0RJE6Lkla4cWOggNcf_GAvMLwCzA6qE_xQ&s",
      },
      {
        id: 4,
        fullName: 'Virgil van Dijk',
        club: 'Liverpool',
        position: 'Defender',
        marketValue: '€60M',
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MnNVgxhsAJjj4dgSYiyAHLcb43QfgzJRzg&s",
      },
    ];
  }
}