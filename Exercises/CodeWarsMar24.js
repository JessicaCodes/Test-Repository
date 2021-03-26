var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

// Return oldest developers in order they are originally.  If multiple return them all in original order
  function findSenior(list) {
    const oldestDeveloper = Math.max(...list.map(cur => cur.age))
    return list.filter((developer) => developer.age === oldestDeveloper)
    }

  console.log(findSenior(list1))