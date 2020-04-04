const express = require("express");
const bodyParser = require("body-parser");
const { addPost } = require("../models/postModel");
const upload = require("../utils/cloudinary");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// GET newsfeed
// - all posts and comments in an instance - paginated
router.get("/:inst_id", (req, res) => {
  // Pull parameters
  const inst_id = req.params.inst_id;

  // #region notes
  /* 
        Here's the newsfeed query. We need to pull a feed of all
        of the posts, comments, and profiles for it to look good.

        Maybe we return an array matrix of objects?
        >>> [
        >>>     [
        >>>         {PROFILE 1}, {PROFILE 2}, {PROFILE 3}...
        >>>     ]
        >>>     [
        >>>         {POST 1}, {POST 2}, {POST 3}...
        >>>     ]
        >>>     [
        >>>         {COMMENT 1}, {COMMENT 2}, {COMMENT 3}...
        >>>     ]
        >>> ]

        Alternatives:
        Don't send back all the comments with the initial call?
        Posts would appear like this:
        >>> Username
        >>> Some content on my post
        >>> Like - Comment - (4 comments)

        Could also not query comments here at all
        >>> Username
        >>> Some content on my post
        >>> Like - Comment

        BUT WE DO NEED TO INCLUDE REACTIONS HERE
        New example?
        >>> [
        >>>     [
        >>>         {profile 1}, {profile 2}
        >>>     ]
        >>>     [
        >>>         [
        >>>             {post 1}, {post 2}...
        >>>         ]
        >>>         [
        >>>             {reactions for post 1}, {for post 2}...
        >>>         ]
        >>>         [
        >>>             [
        >>>                 {comment 1 post 1}, {comment 2 post 1}...
        >>>             ]
        >>>             [
        >>>                 {comment 1 post 1 reacts}, {comment 2 post 1 reacts}
        >>>             ]
        >>>         ]
        >>>     ]
        >>> ]

        Better version:
        >>> [
        >>>     [
        >>>         [1]{prof 1}, [7]{prof 7}... // where index in array is unique id
        >>>     ]
        >>>     [
        >>>         [ // POST 1
        >>>             {
        >>>                 poster id, // references the above array of profiles
        >>>                 post content,
        >>>                 post timestamp,
        >>>                 optional post image url
        >>>             },
        >>>             [{post 1 react 1}, {post 1 react 2}...],
        >>>             [
        >>>                 [
        >>>                     {post 1 comment 1},
        >>>                     [{comment 1 react 1}, {comment 1 react 2}...]
        >>>                 ]
        >>>             ]
        >>>         ],
        >>>         [ // POST 2
        >>>             {post 2 object},
        >>>             [//no reactions//],
        >>>             [
        >>>                 [
        >>>                     //no comments//
        >>>                 ]
        >>>             ]
        >>>         ],
        >>>         [ // POST 3
        >>>             ...
        >>>         ], ...
        >>>     ]
        >>> ]

    */
  // #endregion notess

  // Big complex database query w/ pagination
  const newsfeed = [
    [
      /* profiles */
    ],
    [
      /* posts */
    ]
  ];

  // return the newsfeed array object
  res.send(newsfeed);
});

// POST a new post
router.post(
  "/:inst_id/new/:prof_id",
  upload.single("post_image_url"),
  (req, res) => {
    // Pull from params
    const inst_id = req.params.inst_id;
    const prof_id = req.params.prof_id;

    // Pull the post info from the body
    const post_content = req.body.content;
    const post_timestamp = req.body.time;

    const post = {
      post_content: req.body.content,
      post_image_url: !req.file ? "" : req.file.secure_url
    };

    const refs = {
      profile_id: prof_id
    };

    // Store the image? ~optional~

    // Store post info in data_posts

    addPost(post, refs)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        console.log(err);
      });
    // Store the new id index from db
    const newPostID = 1; //*****change later*****

    // Add new entry to xref_new_post,
    // mapping profile and post together

    // Return the index of the new post
    //   res.json(newPostID);
  }
);

// POST new reaction on a post
router.post("/:inst_id/new/:prof_id/:react_id", (req, res) => {
  // Pull from params
  const inst_id = req.params.inst_id;
  const prof_id = req.params.prof_id;
  const react_id = req.params.react_id;

  // Store react info info in xref_post_likes

  // Nothing to return?
  res.status(200);
});

module.exports = router;
