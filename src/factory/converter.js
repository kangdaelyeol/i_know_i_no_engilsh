
const getToday = () => new Date().toISOString().substring(0, 10);
class Converter {

  // questions객체 깊은 복사
  // input - questions:Object
  // output - newQuestions:Object
  copyQuestions = (questions) => {
    if(questions === false) return false;
    const newQuestions = {};
    Object.keys(questions).forEach(key => {
      newQuestions[key] = {
        ...questions[key]
      }
    });
    return newQuestions;
  }
  
  // item객체 깊은 복사
  // input - item:Object
  // output - newItem:Object
  copyItem = (item) => {
    const newItem = {
      ...item
    };
    newItem.questions = this.copyQuestions(item.questions);
    // length결정
    newItem.length = newItem.questions ? Object.keys(newItem.questions).length : 0;
    return newItem;
  }
  
  createNewItem = (title) => {
    const id = Date.now();
    const newItem = {
      id,
      title: title || "",
      length: 0,
      date: getToday(),
      questions: false
    };
    return newItem
  }
}


export default Converter