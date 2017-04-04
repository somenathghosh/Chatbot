'use strict';


let Node = (function(){

  const _add = (node){
    if(!node) throw new Error('BST ===> No Object');
    if(typeof node === 'object'){
      if(node.classifier && node.actionKey && node.description && node.dsl && node.callback && node.actionValue && node.actionValue && node.suggestion) {
        this.classifier = node.classifier;
        this.actionKey = node.actionKey;
        this.actionValue = node.actionValue;
        this.description = node.description;
        this.callback = node.callback;
        this.dsl = node.dsl;
        this.suggestion = node.suggestion;
        this.left = null;
        this.right = null;
        this.other = null;
      }
      else{
        throw new Error('BST ===> Value Missing');
      }

    }
  }

  class Node {

    constructor(node){
      this.classifier = null;
      this.actionKey = null;
      this.actionValue = undefined;
      this.description = null;
      this.callback = null;
      this.dsl = 0;
      this.context = 0;
      this.suggestion = null;
      this.left = null;
      this.right = null;
      this.other = null;
      this.parent = null
      _add.call(this,node);
    }

    next(index){
      if(index===1) return this.left;
      if(index===2) return this.right;
      if(index===3) return this.other;
      if(index===0) return this;
    }
    left(node){
      let n = new Node(node);
      n.parent = this;
      this.left = n;
      return this;
    }
    right(node){
      let n = new Node(node);
      n.parent = this;
      this.right = n;
      return this;
    }
    parent(){
      return this.parent;
    }




  }

  return Node;

})();


module.exports = NODE;
