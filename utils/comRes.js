module.exports = function(res, code, desc, data) {
  res.end(JSON.stringify({ code, desc, data }));
};
