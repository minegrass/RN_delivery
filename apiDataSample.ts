export const featuredSample = [
  {
    id: 1,
    attributes: {
      name: "offers1",
      short_description: "offers1 desc",
      restaurants: {
        data: [
          {
            id: 1,
            attributes: {
              name: "res1",
              short_description: "res 1 desc",
              long: 12.1,
              lat: 112,
              address: "taman fake",
              rating: 4.4,
            },
          },
          {
            id: 2,
            attributes: {
              name: "res2",
              short_description: "res 2 desc",
              long: 12.1,
              lat: 112,
              address: "taman fake",
              rating: 1.1,
            },
          },
        ],
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "offers2",
      short_description: "offers2 desc",
      restaurants: {
        data: [
          {
            id: 1,
            attributes: {
              name: "res1",
              short_description: "res 1 desc",
              long: 12.1,
              lat: 112,
              address: "taman fake",
              rating: 4.4,
            },
          },
          {
            id: 2,
            attributes: {
              name: "res2",
              short_description: "res 2 desc",
              long: 12.1,
              lat: 112,
              address: "taman fake",
              rating: 1.1,
            },
          },
        ],
      },
    },
  },
];

export const RestaurantSample = [
  {
    id: 1,
    attributes: {
      name: "res1",
      short_description: "res 1 desc",
      long: 122.1,
      lat: 102,
      address: "taman fake",
      Rating: 4.1,
      type: { data: { id: 2, attributes: { type: "Korean" } } },
      image: {
        data: {
          attributes: {
            url: "https://picsum.photos/200",
          },
        },
      },
      dishes: {
        data: [
          {
            id: 1,
            attributes: {
              name: "dish1 sample",
              short_description: "desc 1 sample",
              price: 1.99,
              image: {
                data: {
                  id: 1,
                  attributes: {
                    url: "https://picsum.photos/200",
                  },
                },
              },
            },
          },
          {
            id: 2,
            attributes: {
              name: "dish2 sample",
              short_description: "desc 2 sample",
              price: 4.99,
              image: {
                data: {
                  id: 1,
                  attributes: {
                    url: "https://picsum.photos/200",
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "res2",
      short_description: "res 2 desc",
      long: 12.1,
      lat: 112,
      address: "taman real",
      Rating: 1.1,
      type: { data: { id: 1, attributes: { type: "Asian" } } },
      image: {
        data: {
          attributes: {
            url: "https://picsum.photos/200",
          },
        },
      },
      dishes: {
        data: [
          {
            id: 1,
            attributes: {
              name: "dish1 sample",
              short_description: "desc 1 sample",
              price: 1.99,
              image: {
                data: {
                  id: 1,
                  attributes: {
                    url: "https://picsum.photos/200",
                  },
                },
              },
            },
          },
          {
            id: 2,
            attributes: {
              name: "dish2 sample",
              short_description: "desc 2 sample",
              price: 4.99,
              image: {
                data: {
                  id: 1,
                  attributes: {
                    url: "https://picsum.photos/200",
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
];
