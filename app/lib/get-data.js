
export default function getData() {
  var data = { users: {} };

  for (var i = 1; i < 100; i++) {
    data.users["user" + i] = { marks: [] };

    //var name = Math.random().toString(36).substring(7);
    //data.users[name + i] = { marks: [] };
  }
  Object.keys(data.users).forEach(function(uname) {
    var info = data.users[uname];
    for (var i = 0; i < 5; i++) {
      info.marks.push(Math.floor(Math.random() * 10));
    }
  });
  return data;
}
