async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];

  await delay(3);
  const result = await userList.map(test)
  return await result
  
}

function delay(n){
  return new Promise(function(resolve){
      setTimeout(resolve,n*1000);
  });
}

function test(data) {
  data.full_name = data.family_name + ' ' +data.first_name;
  
  return data
}



