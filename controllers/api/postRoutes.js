//importing routes and models
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//create a post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Edit a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.body, "update route hit");
    const results = await Post.update(
    
        req.body,
      
      {
        where: {
          id: req.params.id,
        },
      }
    );

      res.status(200).json(results);
      
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No Blog Post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
