module.exports = {
  addTags: "INSERT INTO tags(name,textcolor,bgcolor) VALUES(?,?,?)",
  getTags: "SELECT * FROM tags order by id",
};
