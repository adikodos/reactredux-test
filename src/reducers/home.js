import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED, TYPE_BLOG, TYPE_EVENTS, TYPE_NEW } from '../constants/actionTypes';


const initialState = {
  events: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, ad sea meis ancillae, praesent.',
      date: '21 Jan 2018',
      time: '10.00AM - 11.15AM WIB',
      place: 'Jakarta'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, ad sea meis ancillae, praesent.',
      date: '23 Jan 2018',
      time: '09.00AM - 10.15AM WIB',
      place: 'Jakarta'
    }
  ],
  items: [
    {
      id: 1,
      title: 'Title New 1 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 2,
      title: 'Title Blog 1 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 3,
      title: 'Title Events 1 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 4,
      title: 'Title New 2 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 5,
      title: 'Title Events 2 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 6,
      title: 'Title Blog 2 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 7,
      title: 'Title New 3 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 8,
      title: 'Title Blog 3 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 9,
      title: 'Title Events 3 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 10,
      title: 'Title New 4 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 11,
      title: 'Title Events 4 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 12,
      title: 'Title Blog 4 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 13,
      title: 'Title New 5 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 14,
      title: 'Title Blog 5 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 15,
      title: 'Title Events 5 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 16,
      title: 'Title New 6 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 17,
      title: 'Title Events 6 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 18,
      title: 'Title Blog 6 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 19,
      title: 'Title New 7 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 20,
      title: 'Title Blog 7 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 21,
      title: 'Title Events 7 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 22,
      title: 'Title New 8 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 23,
      title: 'Title Events 8 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 24,
      title: 'Title Blog 8 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 25,
      title: 'Title New 9 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 26,
      title: 'Title Blog 9 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'blog'
    },
    {
      id: 27,
      title: 'Title Events 9 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    },
    {
      id: 28,
      title: 'Title New 10 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'new'
    },
    {
      id: 29,
      title: 'Title Events 10 dolor in repre cillum dolore eu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi Nulla quis.',
      type: 'events'
    }
  ],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case TYPE_EVENTS:
      return {
        ...state,
        items: initialState.items.filter((item) => item.type.startsWith(action.itemsType)),
        type: action.itemsType
      };
    case TYPE_BLOG:
      return {
        ...state,
        items: initialState.items.filter((item) => item.type.startsWith(action.itemsType)),
        type: action.itemsType
      };
    case TYPE_NEW:
      return {
        ...state,
        items: initialState.items.filter((item) => item.type.startsWith(action.itemsType)),
        type: action.itemsType
      };
    default:
      return state;
  }
};
