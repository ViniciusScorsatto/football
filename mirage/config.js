import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = 'api';

  this.get('/players', () => {
    return {
      data: [
        {
          id: 1,
          type: 'player',
          attributes: {
            fullName: 'Lionel Messi',
            club: 'Inter Miami',
            clubLogoUrl:
              'https://1000logos.net/wp-content/uploads/2020/09/Inter-Miami-logo.png',
            position: 'Forward',
            marketValue: '€50M',
            photoUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQeXEHnK4BoXoRcF-AmZz7Rn2UuBYvmq70A&s',
          },
        },
        {
          id: 2,
          type: 'player',
          attributes: {
            fullName: 'Cristiano Ronaldo',
            club: 'Al-Nassr',
            clubLogoUrl:
              'https://static.vecteezy.com/system/resources/previews/026/284/889/original/al-nassr-club-logo-symbol-saudi-arabia-football-abstract-design-illustration-free-vector.jpg',
            position: 'Forward',
            marketValue: '€45M',
            photoUrl:
              'https://i.pinimg.com/736x/8d/e8/72/8de87212e16e9f6e02dc8e24aa1a1baa.jpg',
          },
        },
        {
          id: 3,
          type: 'player',
          attributes: {
            fullName: 'Kevin De Bruyne',
            club: 'Manchester City',
            clubLogoUrl:
              'https://download.logo.wine/logo/Manchester_City_F.C./Manchester_City_F.C.-Logo.wine.png',
            position: 'Midfielder',
            marketValue: '€70M',
            photoUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0RJE6Lkla4cWOggNcf_GAvMLwCzA6qE_xQ&s',
          },
        },
        {
          id: 4,
          type: 'player',
          attributes: {
            fullName: 'Virgil van Dijk',
            clubLogoUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6__WSXS7lEdXM3M5hE-h27JqPw_F9qQcsg&s',
            club: 'Liverpool',
            position: 'Defender',
            marketValue: '€60M',
            photoUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MnNVgxhsAJjj4dgSYiyAHLcb43QfgzJRzg&s',
          },
        },
      ],
    };
  });

  this.get('/players/:id', (schema, request) => {
    let id = request.params.id;
    return {
      data: {
        id: 1,
        type: 'player',
        attributes: {
          fullName: 'Lionel Messi',
          clubLogoUrl:
            'https://1000logos.net/wp-content/uploads/2020/09/Inter-Miami-logo.png',
          club: 'Inter Miami',
          position: 'Forward',
          marketValue: '€50M',
          photoUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQeXEHnK4BoXoRcF-AmZz7Rn2UuBYvmq70A&s',
        },
      },
    };
  });

  this.get('/players/:id/appearances', (schema, request) => {
    return {
      dates: [
        {
          id: 1,
          date: '2021-01-01',
          opponent: 'Team A',
          ownTeamGoals: 3,
          opponentGoals: 1,
          isHomeMatch: true,
        },
        {
          id: 2,
          date: '2021-02-01',
          opponent: 'Team B',
          ownTeamGoals: 2,
          opponentGoals: 2,
          isHomeMatch: false,
        },
        {
          id: 3,
          date: '2021-03-01',
          opponent: 'Team A',
          ownTeamGoals: 3,
          opponentGoals: 1,
          isHomeMatch: true,
        },
        {
          id: 4,
          date: '2021-04-01',
          opponent: 'Team B',
          ownTeamGoals: 2,
          opponentGoalxs: 2,
          isHomeMatch: false,
        },
        {
          id: 5,
          date: '2021-05-01',
          opponent: 'Team A',
          ownTeamGoals: 3,
          opponentGoals: 1,
          isHomeMatch: true,
        },
        {
          id: 6,
          date: '2021-06-01',
          opponent: 'Team B',
          ownTeamGoals: 2,
          opponentGoals: 2,
          isHomeMatch: false,
        },
      ],
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
}
