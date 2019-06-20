module.exports = {
  addTags: "INSERT INTO tags(name,textcolor,bgcolor) VALUES(?,?,?)",
  getTags: "SELECT * FROM tags order by id",
  addBlog: "INSERT INTO blog(title,cover,description,content,tags,auth,createTime,updateTime) VALUES(?,?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)"
};
