import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "15e5bc45-f341-4287-97f3-d9a1f845ff69",
    content: "My son's art class",
    mediaURL:
      "https://imgs.search.brave.com/4339COXWA1Z7qYGlVr3RxJYOxNIY_IyQLkLBu7xb3gQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dXNtYWdhemluZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvZHJha2Ut/c29waGllLWJydXNz/YXV4cy1zb24tYWRv/bmlzLWJhYnktYWxi/dW0tcGljcy1tYXN0/ZXJwaWVjZS1pbi1w/cm9ncmVzcy5qcGc_/dz04MDAmcXVhbGl0/eT00MCZzdHJpcD1h/bGw",
    mediaAlt: "Art class",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "t7cZfWIp-q",
          firstName: "Travis",
          lastName: "Scott",
          username: "travis10",
          profileAvatar:
            "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
        },
        {
          _id: "79Gksh9otl",
          firstName: "Solána Imani",
          lastName: "Rowe",
          username: "sza",
          profileAvatar:
            "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Marshal",
          lastName: "Mathers",
          username: "slimshady",
          profileAvatar:
            "https://imgs.search.brave.com/aPgrIHwYLMo0niYIdJOmqx5EHcZSROGt4Lh4tg4v9GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTk3/ODg4OTA2L3Bob3Rv/L2VtaW5lbS1hdHRl/bmRzLXRoZS1yYWct/Ym9uZS14LWVtaW5l/bS1sb25kb24tcG9w/LXVwLW9wZW5pbmct/b24tanVseS0xMy0y/MDE4LWluLWxvbmRv/bi1lbmdsYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/NnZEU3lHMjNsYXlv/bFBWYm1FUVdvYzRY/S0xEZTF4a04wVy10/MUVQdHd3PQ",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
      ],
      dislikedBy: [],
    },
    username: "teatime",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "t7cZfWIp-q",
        commentData: "Artist in the making",
        firstName: "Travis",
        lastName: "Scott",
        username: "travis10",
        profileAvatar:
          "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "1T6Be1QpLm",
        commentData: "That's a nice piece of art right there!",
        firstName: "Marshal",
        lastName: "Mathers",
        username: "slimshady",
        profileAvatar:
          "https://imgs.search.brave.com/aPgrIHwYLMo0niYIdJOmqx5EHcZSROGt4Lh4tg4v9GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTk3/ODg4OTA2L3Bob3Rv/L2VtaW5lbS1hdHRl/bmRzLXRoZS1yYWct/Ym9uZS14LWVtaW5l/bS1sb25kb24tcG9w/LXVwLW9wZW5pbmct/b24tanVseS0xMy0y/MDE4LWluLWxvbmRv/bi1lbmdsYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/NnZEU3lHMjNsYXlv/bFBWYm1FUVdvYzRY/S0xEZTF4a04wVy10/MUVQdHd3PQ",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "508f7462-a891-4d73-987e-ad030fa40fcd",
    content:
      "Thank you to everyone who came to the award show yesterday it was a pleasure to see all of you there 😀",
    mediaURL:
      "https://imgs.search.brave.com/Z6ZERLyBx_VPKh87gTbgl-n2y7VRg9TzUBKa7Fv1wlI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wYWdl/c2l4LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvMy8y/MDIyLzEyL29saXZp/YS13aWxkZS1oYXJy/eS1zdHlsZXMtMzgu/anBnP3F1YWxpdHk9/NzUmc3RyaXA9YWxs/Jnc9ODc4",
    mediaAlt: "Award Ceremony",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
      ],
      dislikedBy: [],
    },
    username: "hstyles",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: "2023-03-15T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "175ece04-a8b3-4cf5-a9f1-4de2c84c8b7c",
    content: "Circus Maximus is now available on all streaming platforms!",
    mediaURL:
      "https://imgs.search.brave.com/sz5tjZZdSU44r_KMbCKpdA55wH-a15Kb7lferk3VOh0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YmlsbGJvYXJkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNy9UcmF2aXMt/U2NvdHQtQ0lSQ1VT/LU1BWElNVVMtVFJB/SUxFUi1iaWxsYm9h/cmQtMTU0OC5qcGc_/dz05NDImaD02MjMm/Y3JvcD0x",
    mediaAlt: "Travis Image",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
      ],
      dislikedBy: [],
    },
    username: "travis10",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "qq8zWjEeXd",
        commentData: "You are an inspiration!",
        firstName: "Harry",
        lastName: "Styles",
        username: "hstyles",
        profileAvatar:
          "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "o5gzWjEeX_",
        commentData: "Album of the year! 🐐",
        firstName: "Edward",
        lastName: "Sheeran",
        username: "ed",
        profileAvatar:
          "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "39475b82-0f43-40f1-a98f-a145c52c02db",
    content: "One of the best artists I know personally",
    mediaURL:
      "https://imgs.search.brave.com/Ki4Em9UPG8E9d4zCSMU_Qe094uQ6PxL6-yWUBjz4WJE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzIzMDYxNDA4NDMy/NC1tZWdoYW4tdHJh/aW5vci1jaGFybGll/LXB1dGgtZmlsZS0y/MDE1LmpwZz9jPTE2/eDkmcT1oXzcyMCx3/XzEyODAsY19maWxs",
    mediaAlt: "Friends",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Solána Imani",
          lastName: "Rowe",
          username: "sza",
          profileAvatar:
            "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
      ],
      dislikedBy: [],
    },
    username: "charlieputh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        commentData: "Meghan is one of nicest people I know",
        firstName: "Solána Imani",
        lastName: "Rowe",
        username: "sza",
        profileAvatar:
          "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "203e6407-4fa8-47dc-8406-7ae2530c1461",
    content: "New album coming soon! Stay tuned folks",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Solána Imani",
          lastName: "Rowe",
          username: "sza",
          profileAvatar:
            "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Charlie",
          lastName: "Puth",
          username: "charlieputh",
          profileAvatar:
            "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        },
      ],
      dislikedBy: [],
    },
    username: "slimshady",
    createdAt: "2014-11-15T01:06:00+05:30",
    updatedAt: "2014-11-15T01:06:00+05:30",
    comments: [
      {
        _id: "qq8zWjEeXd",
        commentData: "Amazing! Looking forward to your new work!",
        firstName: "Harry",
        lastName: "Styles",
        username: "hstyles",
        profileAvatar:
          "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        createdAt: "2014-11-15T01:06:00+05:30",
        updatedAt: "2014-11-15T01:06:00+05:30",
      },
      {
        _id: "LCrc9f0Zl0",
        commentData:
          "Have an incredible time exploring the beaches, soaking up the vibrant culture, and indulging in delicious seafood. Safe travels! ",
        firstName: "Charlie",
        lastName: "Puth",
        username: "charlieputh",
        profileAvatar:
          "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        createdAt: "2014-11-16T01:06:00+05:30",
        updatedAt: "2014-11-16T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "ede18080-78ab-4c3e-a3e2-aded11c1bf95",
    content:
      "I am happy to announce that I have been nominated for the grammys",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Solána Imani",
          lastName: "Rowe",
          username: "sza",
          profileAvatar:
            "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Charlie",
          lastName: "Puth",
          username: "charlieputh",
          profileAvatar:
            "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Aubrey",
          lastName: "Drake",
          username: "teatime",
          profileAvatar:
            "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        },
      ],
      dislikedBy: [],
    },
    username: "ed",
    createdAt: "2021-03-11T01:06:00+05:30",
    updatedAt: "2021-03-11T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Congratulations! Wishing for you to win 🙂",
        firstName: "Aubrey",
        lastName: "Drake",
        username: "teatime",
        profileAvatar:
          "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        createdAt: "2021-03-12T01:06:00+05:30",
        updatedAt: "2021-03-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "7f6e1427-c26d-4969-928f-ca966129a87a",
    content: "Be grateful ",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Charlie",
          lastName: "Puth",
          username: "charlieputh",
          profileAvatar:
            "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Aubrey",
          lastName: "Drake",
          username: "teatime",
          profileAvatar:
            "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        },
      ],
      dislikedBy: [],
    },
    username: "sza",
    createdAt: "2022-05-11T01:06:00+05:30",
    updatedAt: "2022-05-11T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "f0b613fb-81b4-47bc-9ca2-751a22977242",
    content: "Cooking lessons from the best!",
    mediaURL:
      "https://imgs.search.brave.com/JEvpfN39HpSHO9qriktZHrsIgTqZt27RIu8JT7dvvjU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXZl/LXByb2R1Y3Rpb24u/d2Ntcy5hYmMtY2Ru/Lm5ldC5hdS9jZWFh/YjcwNjMxNDQ4Nzgy/Y2QzZTFkMTI1ZTJh/NGZkZD9pbXBvbGlj/eT13Y21zX2Nyb3Bf/cmVzaXplJmNyb3BI/PTQ2NiZjcm9wVz04/MjgmeFBvcz0wJnlQ/b3M9MTUyJndpZHRo/PTg2MiZoZWlnaHQ9/NDg1",
    mediaAlt: "Chefs",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Solána Imani",
          lastName: "Rowe",
          username: "sza",
          profileAvatar:
            "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Charlie",
          lastName: "Puth",
          username: "charlieputh",
          profileAvatar:
            "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Aubrey",
          lastName: "Drake",
          username: "teatime",
          profileAvatar:
            "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        },
      ],
      dislikedBy: [],
    },
    username: "ed",
    createdAt: "2023-06-12T01:06:00+05:30",
    updatedAt: "2023-06-12T01:06:00+05:30",
    comments: [
      {
        _id: "qq8zWjEeXd",
        commentData:
          "I hope you prepared some extra for me also. I am coming right away to your place! 🏃‍♂️💨",
        firstName: "Harry",
        lastName: "Styles",
        username: "hstyles",
        profileAvatar:
          "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        createdAt: "2023-06-12T01:06:00+05:30",
        updatedAt: "2023-06-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "3cd5e18d-da71-4c4a-a3e5-46d529a8e039",
    content: "Time for some basketball, who's up for a 1v1?",
    mediaURL:
      "https://imgs.search.brave.com/nlOEYVBbqbQtFNcUIdoDyWnaFWnM7DclAHZyIQUIKXA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxL2E4/L2E5L2YxYThhOWZm/MTVlNWU4NDMxYmY3/Y2IzMDA4ZTUyZmU5/LmpwZw",
    mediaAlt: "Basketball",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Charlie",
          lastName: "Puth",
          username: "charlieputh",
          profileAvatar:
            "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Aubrey",
          lastName: "Drake",
          username: "teatime",
          profileAvatar:
            "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        },
      ],
      dislikedBy: [],
    },
    username: "travis10",
    createdAt: "2023-06-10T01:06:00+05:30",
    updatedAt: "2023-06-10T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Count me in!",
        firstName: "Aubrey",
        lastName: "Drake",
        username: "teatime",
        profileAvatar:
          "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        createdAt: "2023-06-11T01:06:00+05:30",
        updatedAt: "2023-06-11T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "d6c1f1e8-f8f2-46f2-9a6e-1886aa019479",
    content: "Going on a vacation 🏝️",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Aubrey",
          lastName: "Drake",
          username: "teatime",
          profileAvatar:
            "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        },
      ],
      dislikedBy: [],
    },
    username: "slimshady",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Enjoy bro!",
        firstName: "Aubrey",
        lastName: "Drake",
        username: "teatime",
        profileAvatar:
          "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "92faab82-f28d-4a64-8f56-14e17f27cb16",
    content: "Taking a break for few weeks cya guys",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
      ],
      dislikedBy: [],
    },
    username: "charlieputh",
    createdAt: "2023-03-17T01:06:00+05:30",
    updatedAt: "2023-03-17T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "d09da77f-9613-4b0a-bc52-f24dd7bf9903",
    content: "Europe Tour soon!",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Marshal",
          lastName: "Mathers",
          username: "slimshady",
          profileAvatar:
            "https://imgs.search.brave.com/aPgrIHwYLMo0niYIdJOmqx5EHcZSROGt4Lh4tg4v9GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTk3/ODg4OTA2L3Bob3Rv/L2VtaW5lbS1hdHRl/bmRzLXRoZS1yYWct/Ym9uZS14LWVtaW5l/bS1sb25kb24tcG9w/LXVwLW9wZW5pbmct/b24tanVseS0xMy0y/MDE4LWluLWxvbmRv/bi1lbmdsYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/NnZEU3lHMjNsYXlv/bFBWYm1FUVdvYzRY/S0xEZTF4a04wVy10/MUVQdHd3PQ",
        },
      ],
      dislikedBy: [],
    },
    username: "sza",
    createdAt: "2022-11-02T01:06:00+05:30",
    updatedAt: "2022-11-02T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Let's collab!",
        firstName: "Aubrey",
        lastName: "Drake",
        username: "teatime",
        profileAvatar:
          "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        createdAt: "2022-11-04T01:06:00+05:30",
        updatedAt: "2022-11-04T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "1975fbb2-ddf4-45a5-a362-650ea7d56de0",
    content: "I love my fans 💖",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Aubrey",
          lastName: "Drake",
          username: "teatime",
          profileAvatar:
            "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        },
      ],
      dislikedBy: [],
    },
    username: "hstyles",
    createdAt: "2023-06-25T01:06:00+05:30",
    updatedAt: "2023-06-25T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "c6826efc-35a3-4996-a7eb-090a7b143d01",
    content: "Came across this beauty!, what a marvel",
    mediaURL:
      "https://imgs.search.brave.com/TbiRaXzbeVhhJLeDzBWjuI8YbyrE1prtg1xFQYkG4_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Z290aGFtZHJlYW1j/YXJzLmNvbS9hc3Nl/dHMvZmxlZXQvZmVy/cmFyaS9mZXJyYXJp/LTU5OS1ndGItcHJv/ZmlsZS0yNjdlNGIw/YThmZDI3ODc4N2E5/Mzc0MThmMTVhMTA5/My5qcGc",
    mediaAlt: "Car",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Charlie",
          lastName: "Puth",
          username: "charlieputh",
          profileAvatar:
            "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        },
      ],
      dislikedBy: [],
    },
    username: "teatime",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "LCrc9f0Zl0",
        commentData: "I must praise your photography skills!",
        firstName: "Charlie",
        lastName: "Puth",
        username: "charlieputh",
        profileAvatar:
          "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "5c8b26ce-934c-4dc7-a09a-59d7a17b20f6",
    content:
      "Forever grateful for the guiding light and unconditional love of my fans , new merch coming soon on my site , click the link in the bio",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Harry",
          lastName: "Styles",
          username: "hstyles",
          profileAvatar:
            "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Marshal",
          lastName: "Mathers",
          username: "slimshady",
          profileAvatar:
            "https://imgs.search.brave.com/aPgrIHwYLMo0niYIdJOmqx5EHcZSROGt4Lh4tg4v9GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTk3/ODg4OTA2L3Bob3Rv/L2VtaW5lbS1hdHRl/bmRzLXRoZS1yYWct/Ym9uZS14LWVtaW5l/bS1sb25kb24tcG9w/LXVwLW9wZW5pbmct/b24tanVseS0xMy0y/MDE4LWluLWxvbmRv/bi1lbmdsYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/NnZEU3lHMjNsYXlv/bFBWYm1FUVdvYzRY/S0xEZTF4a04wVy10/MUVQdHd3PQ",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Edward",
          lastName: "Sheeran",
          username: "ed",
          profileAvatar:
            "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Charlie",
          lastName: "Puth",
          username: "charlieputh",
          profileAvatar:
            "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Aubrey",
          lastName: "Drake",
          username: "teatime",
          profileAvatar:
            "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Travis",
          lastName: "Scott",
          username: "travis10",
          profileAvatar:
            "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
        },
        {
          _id: "79Gksh9otl",
          firstName: "Solána Imani",
          lastName: "Rowe",
          username: "sza",
          profileAvatar:
            "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
        },
      ],
      dislikedBy: [],
    },
    username: "teatime",
    createdAt: "2021-06-07T01:06:00+05:30",
    updatedAt: "2021-06-07T01:06:00+05:30",
    comments: [],
  },
];
