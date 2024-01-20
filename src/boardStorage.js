class BoardData {
    constructor(board) {
      
      this.board = board
      
    }
    
  }

  class BoardStorage {
    constructor(){
      this.player = ""
    }
    // create a new player and save it in the collection
    newData(board){
      let bd = new BoardData(board)
      this.board = bd
      return this.board
    }
    
    get allData(){
      return this.board
    }
  
  }

  export default BoardStorage;