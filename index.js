const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const posts =[
    {
      "id": "1",
      "username": "user_01",
      "caption": "Enjoying the sunset!",
      "imageUrl": "https://example.com/image1.jpg",
      "likes": 250,
      "comments": [
        {
          "username": "commenter_01",
          "comment": "Beautiful view!"
        },
        {
          "username": "commenter_02",
          "comment": "Wish I was there!"
        }
      ],
      "timestamp": "2024-09-04T10:15:30Z"
    },
    {
      "id": "2",
      "username": "user_02",
      "caption": "Delicious brunch this morning.",
      "imageUrl": "https://example.com/image2.jpg",
      "likes": 180,
      "comments": [
        {
          "username": "commenter_03",
          "comment": "Yum!"
        },
        {
          "username": "commenter_04",
          "comment": "Looks tasty!"
        }
      ],
      "timestamp": "2024-09-03T08:20:45Z"
    },
    {
      "id": "3",
      "username": "user_03",
      "caption": "Morning hike adventures.",
      "imageUrl": "https://example.com/image3.jpg",
      "likes": 320,
      "comments": [
        {
          "username": "commenter_05",
          "comment": "Great shot!"
        },
        {
          "username": "commenter_06",
          "comment": "Where is this place?"
        }
      ],
      "timestamp": "2024-09-02T07:30:00Z"
    }
  ]
  app.get('/getPosts', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
  
    // Calculate the starting and ending index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    // Paginate the posts
    const paginatedPosts = posts.slice(startIndex, endIndex);
  
    res.json({
      page,
      totalPosts: posts.length,
      totalPages: Math.ceil(posts.length / limit),
      posts: paginatedPosts
    });
  });

app.listen(4001, () => {
  console.log("Server is running... Hurrah!!");
});
