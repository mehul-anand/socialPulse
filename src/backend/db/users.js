import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Travis",
    lastName: "Scott",
    password: "utopia",
    username: "travis10",
    bio: "Utopia is out now!",
    website: "https://www.travisscott.com/",
    profileAvatar:
      "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
    backgroundImage:
      "https://imgs.search.brave.com/W9j35pjFJw8mnUcsOlk0b_79LMYS_9tHxZG9QmrmDGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IwLzcy/LzhiL2IwNzI4YjAz/MGIzYzZkNmZjODkz/MTg3YzhkM2U4NGY1/LmpwZw",
    createdAt: "2014-07-02T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Charlie",
        lastName: "Puth",
        username: "charlieputh",
        profileAvatar:
          "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
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
        _id: "79Gksh9otl",
        firstName: "Solána Imani",
        lastName: "Rowe",
        username: "sza",
        profileAvatar:
          "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
      },
    ],
    followers: [
      {
        _id: "qq8zWjEeXd",
        firstName: "Harry",
        lastName: "Styles",
        username: "hstyles",
        profileAvatar:
          "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Solána Imani",
    lastName: "Rowe",
    password: "orbit01",
    username: "sza",
    bio: "Be Yourself!",
    website: "https://www.szactrl.com/https://www.szactrl.com/https://www.szactrl.com",
    profileAvatar:
      "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
    backgroundImage:
      "https://imgs.search.brave.com/Ub1d9e-C-3lE2Q07avYDsllEN2JuQIWtKOprU21G-eg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ucHIub3JnL2Fz/c2V0cy9pbWcvMjAy/Mi8xMi8xMi9zemFf/d2lkZS1mYzg3ZjZi/YmM1ZWEwOGU2N2Jj/MWQ1NTA5ZThlMzE5/MjE1M2VkYmJmLmpw/Zz9zPTMwMCZjPTE1/JmY9anBlZw",
    createdAt: "2022-04-11T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Marshal",
        lastName: "Mathers",
        username: "slimshady",
        profileAvatar:
          "https://imgs.search.brave.com/aPgrIHwYLMo0niYIdJOmqx5EHcZSROGt4Lh4tg4v9GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTk3/ODg4OTA2L3Bob3Rv/L2VtaW5lbS1hdHRl/bmRzLXRoZS1yYWct/Ym9uZS14LWVtaW5l/bS1sb25kb24tcG9w/LXVwLW9wZW5pbmct/b24tanVseS0xMy0y/MDE4LWluLWxvbmRv/bi1lbmdsYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/NnZEU3lHMjNsYXlv/bFBWYm1FUVdvYzRY/S0xEZTF4a04wVy10/MUVQdHd3PQ",
      },
    ],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Travis",
        lastName: "Scott",
        username: "travis10",
        profileAvatar:
          "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Marshal",
    lastName: "Mathers",
    password: "8mile",
    username: "slimshady",
    bio: "Lead singer of my band 🎶 , 'My salsa' coming soon",
    website: "https://www.eminem.com/",
    profileAvatar:
      "https://imgs.search.brave.com/aPgrIHwYLMo0niYIdJOmqx5EHcZSROGt4Lh4tg4v9GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTk3/ODg4OTA2L3Bob3Rv/L2VtaW5lbS1hdHRl/bmRzLXRoZS1yYWct/Ym9uZS14LWVtaW5l/bS1sb25kb24tcG9w/LXVwLW9wZW5pbmct/b24tanVseS0xMy0y/MDE4LWluLWxvbmRv/bi1lbmdsYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/NnZEU3lHMjNsYXlv/bFBWYm1FUVdvYzRY/S0xEZTF4a04wVy10/MUVQdHd3PQ",
    backgroundImage:
      "https://imgs.search.brave.com/ca6qettTUI0deGAHqkSv-yLqY1YplfZ_jN1kQ2YaEzs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lLnNu/bWMuaW8vaS82MDAv/cy8yODE1YzljMDZh/NzA5ZjViOTA3NjFk/ZDBlZTAzMWQwZC8x/NjEyNDU1L2VtaW5l/bS10aGUtbWFyc2hh/bGwtbWF0aGVycy1s/cC1jb3Zlci1hcnQu/anBn",
    createdAt: "2002-10-26T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "79Gksh9otl",
        firstName: "Solána Imani",
        lastName: "Rowe",
        username: "sza",
        profileAvatar:
          "https://imgs.search.brave.com/KFBIsU6hegKBU6qIXqxf-aks9hZ4yX7PlhipY1n47nc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bm1lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wOC9z/emEtdGVhc2VzLW5l/dy1zb25nLTY5Nng0/NDIuanBn",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Travis",
        lastName: "Scott",
        username: "travis10",
        profileAvatar:
          "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Charlie",
    lastName: "Puth",
    password: "attention",
    username: "charlieputh",
    bio: "Composing musical journeys",
    website: "https://www.charlieputh.com/",
    profileAvatar:
      "https://imgs.search.brave.com/G3UwjUn6Yx7HtTI1-OiFE7UgULIysLFgoSqfdSz2UQk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d29sZnRyYXAub3Jn/Ly0vbWVkaWEvaW1h/Z2VzbmV3LzIzZmls/ZW5lL2NoYXJsaWUt/cHV0aC1kZXNrdG9w/LmpwZw",
    backgroundImage:
      "https://imgs.search.brave.com/DGqAT4ldc1_8gSHFOkB_J5BZBoEKOnceHTGqePjSmek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmlud29uZGVy/cy5jb20vcHJvZHVj/dGlvbi9tdXNpYy1m/ZXN0aXZhbC13b25k/ZXItMS5qcGc",
    createdAt: "2012-02-10T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Travis",
        lastName: "Scott",
        username: "travis10",
        profileAvatar:
          "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    firstName: "Edward",
    lastName: "Sheeran",
    password: "photograph",
    username: "ed",
    bio: "Hey!",
    website: "https://www.edsheeran.com/",
    profileAvatar:
      "https://imgs.search.brave.com/fP99uT6oJCNgq1pItIKF_TVNyuJC-f39YFTuZU-Qnz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2FwaXRhbGZt/LmNvbS8yMDIwLzE5/L3ByZXNzLXBob3Rv/LS0tZWQtc2hlZXJh/bi0xNTg5MTkxNjYw/LWVkaXRvcmlhbC1s/b25nLWZvcm0tMC5q/cGVn",
    backgroundImage:
      "https://imgs.search.brave.com/jB-kc2cCEPz4Vyd6G1-9Wei-vqClPBefHRJR926ninY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvOTc2L2Nw/c3Byb2RwYi82RUY2/L3Byb2R1Y3Rpb24v/XzEwMTc2MDQ4Ml9n/ZXR0eWltYWdlcy05/MzcyNDEyNTIuanBn",
    createdAt: "2009-07-25T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Travis",
        lastName: "Scott",
        username: "travis10",
        profileAvatar:
          "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Aubrey",
    lastName: "Drake",
    password: "october",
    username: "teatime",
    bio: "Meltdown out now!",
    website: "https://drakerelated.com/rooms/el-chico-studios",
    profileAvatar:
      "https://imgs.search.brave.com/EcLfaPTQqK2LJilzDPqpbAKreLcyhGarnjDb7GmJAQQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS9hdmF0YXIxNzBz/L2ZmZGNhYzQyY2E4/MTc1NTZmODA4ZjBm/MzYxZTYzODE0",
    backgroundImage:
      "https://imgs.search.brave.com/_uQAJDa0mf89BVL7ga9EK9qArTcPPqpDm8WN_nGwWG4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBlLzhm/L2YwLzBlOGZmMGMw/MjBjYTZkMGMzYzZi/ZDE2ZWU5MDY0NGM5/LS1wcmV0dHktcGhv/dG9zLWRyYWtlLmpw/Zw",
    createdAt: "2005-05-17T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Harry",
    lastName: "Styles",
    password: "yay10",
    username: "hstyles",
    bio: "Daylight",
    website: "https://www.hstyles.co.uk/",
    profileAvatar:
      "https://imgs.search.brave.com/uoiGBhOkYhbB6jbLbeHMv9sk2RfYZGzsxByZKdf00Ew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVsbG9tYWdh/emluZS5jb20vaG9y/aXpvbi9zcXVhcmUv/ZDlhZjgxZmM1MzZl/LWhhcnJ5LXN0eWxl/cy10LmpwZw",
    backgroundImage:
      "https://imgs.search.brave.com/kfQeQj9wLvg41l6qRTH9c3WvAZNon7L9J97qjDCcaJc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMzY1MjQ1/ODYvNDA3NDEvaS82/MDAvZGVwb3NpdHBo/b3Rvc180MDc0MTE4/Mjgtc3RvY2stcGhv/dG8tcmlvLWphbmVp/cm8tYnJhemlsLW1h/eS0yMDE0LmpwZw",
    createdAt: "2008-07-21T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Travis",
        lastName: "Scott",
        username: "travis10",
        profileAvatar:
          "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
      },
    ],
    followers: [],
    bookmarks: [],
  },
];
