module.exports = {
  addTags: "INSERT INTO tags(name,textcolor,bgcolor) VALUES(?,?,?)",
  getTagsByPage: "SELECT * FROM tags order by id desc limit ?,?",
  getAllTagsNum: "SELECT COUNT(*) FROM tags"
};
