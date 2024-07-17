export const todosArrayMocks = [
  {
    id: "list1",
    title: "list1",
    cards: [
      {
        id: "card1",
        title: "card 1",
        description: "javascript",
        author: "nathan",
        avatar: "xxx",
        meta: "xxx",
      },

      {
        id: "card2",
        title: "card 2",
        description: "redux",
        author: "nathan",
        avatar: "xxx",
        meta: "xxx",
      },
    ],
  },

  {
    id: "list2",
    title: "list2",
    cards: [
      {
        id: "card1",
        title: "card 1",
        description: "javascript",
        author: "nathan",
        avatar: "xxx",
        meta: "xxx",
      },

      {
        id: "card2",
        title: "card 2",
        description: "redux",
        author: "nathan",
        avatar: "xxx",
        meta: "xxx",
      },
    ],
  },
];

export const todosHashMocks = {
  colums: ["list1", "list2"],
  lists: {
    list1: { id: "list1", title: "List1", cards: ["card1-1", "card1-2"] },
    list2: { id: "list2", title: "List2", cards: ["card2-1"] },
  },
  cards: {
    "card1-1": {
      id: "card1-1",
      title: "card1-1",
      description: "javascript",
      author: "nathan",
      avatar: "xxhttps://api.dicebear.com/7.x/miniavs/svg?seed=8",
      meta: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    "card1-2": {
      id: "card1-2",
      title: "card1-2",
      description: "angular",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
      meta: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },

    "card2-1": {
      id: "card2-1",
      title: "card2-1",
      description: "vue",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
      meta: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
  },
};
