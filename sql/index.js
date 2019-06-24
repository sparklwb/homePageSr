module.exports = {
  addTags: "INSERT INTO tags(name,textcolor,bgcolor) VALUES(?,?,?)",
  getTags: "SELECT * FROM tags order by id",
  getBlogByPage: "SELECT * FROM blog order by id desc limit ?,?",
  getBlogNum: "select count(*) from blog",
  getBlogById: "SELECT * FROM blog WHERE id = ?",
  getBlogByTag: "",
  updateBlog: "UPDATE blog SET title = ?,cover = ?,keywords = ?,description = ?,content = ?,tags = ?,auth = ?,updateTime=CURRENT_TIMESTAMP WHERE id = ?",
  deleteBlog: "DELETE FROM blog where id = ?",
  addBlog: "INSERT INTO blog(title,cover,keywords,description,content,tags,auth,createTime,updateTime) VALUES(?,?,?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)",
  login: "SELECT * FROM user WHERE username = ?"
};
