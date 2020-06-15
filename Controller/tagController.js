var Tags = require("../models/tags");
var mongoose = require('mongoose');

exports.get_tags = async function (req, res) {
    try{
      var tag_list = await Tags.find().sort({ tag_count : -1 })
      console.log(tag_list)
      res.send(tag_list)
      res.status(204)
    } catch {
      res.status(404)
      res.send({ error: "Tags not fetched!" })
    }
  };

exports.edit_tag = async function (req, res) {
    try {
      const edited_tag = await Tags.findOne({ _id: req.params.tagId })

      if (req.body.tag_name) {
        edited_tag.tag_name = req.body.tag_name
      }

      if (req.body.tag_count) {
        edited_tag.tag_count = req.body.tag_count
      }

      if (req.body.related_tags) {
        edited_tag.related_tags = req.body.related_tags
      }

      await edited_tag.save()
      res.send(edited_tag)
    } catch {
      res.status(404)
      res.send({ error: "Tag doesn't exist!" })
    }
  };

exports.delete_tag = async function (req, res) {
    try {
      await Tags.deleteOne({ _id: req.params.tagId })
      res.send("Successfully Deleted!!").status(204)
    } catch {
      res.status(404)
      res.send({ error: "Tag doesn't exist!" })
    }
  };

exports.add_tag = async function (req, res) {
    try {
      var tag = new Tags({
        _id: new mongoose.Types.ObjectId(),
        tag_name: req.body.tag_name
        })
      await tag.save()
      res.send(tag).status(204)
    } catch {
      res.status(404)
      res.send({ error: "Tag not added!" })
    }
  };